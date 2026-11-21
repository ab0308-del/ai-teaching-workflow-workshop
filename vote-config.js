// 「不同工作情境下的 AI 工具選擇」投票設定：簡報頁與手機投票頁共用
window.AI_VOTE = {
  supabaseUrl: "https://demckofqselwofbpdztn.supabase.co",
  // Supabase 公開匿名金鑰（anon key，本來就設計放在前端；資料表只開放新增與讀取）
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbWNrb2Zxc2Vsd29mYnBkenRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4Mzk3MDYsImV4cCI6MjA5MzQxNTcwNn0.OQFeOvbYVKjHey7soPbuLGtkzCICKg1QPdm8w4l2sS8",
  table: "ai_tool_votes",
  // 場次代碼：網址加 ?r=rehearsal 可另開一輪（彩排用），不會混到正式結果
  defaultRound: "union",
  tools: {
    chatgpt: { label: "ChatGPT", short: "ChatGPT", color: "#10a37f" },
    gemini: { label: "Gemini", short: "Gemini", color: "#3f6fe8" },
    notebook: { label: "Gemini Notebook", short: "Notebook", color: "#e08a12" }
  },
  // pick：凱琳老師的首選；also：也很適合；reason：揭曉時的一句說明
  scenarios: [
    { id: "image", icon: "🎨", name: "產生圖片", hint: "班級經營圖卡、課文插圖、自我介紹圖",
      pick: "chatgpt", also: [], reason: "生圖搭配「反向提問」，先討論情境與版面再生成，繁體中文字也比較穩。" },
    { id: "slides", icon: "🖥️", name: "製作簡報", hint: "把課文或研習資料變成投影片",
      pick: "notebook", also: ["gemini"], reason: "上傳來源就能產出簡報與資訊圖表，還能指定漫畫、雜誌等風格。" },
    { id: "meeting", icon: "🎙️", name: "會議紀錄與轉錄", hint: "開會、晤談、口述想法變成文字",
      pick: "notebook", also: ["chatgpt"], reason: "Gemini Notebook App 可直接錄音、拍照筆記，逐字稿與會議紀錄一次完成；ChatGPT 語音也很適合整理口述想法。" },
    { id: "material", icon: "📚", name: "製作教學教材", hint: "課程架構、學習單、活動設計",
      pick: "gemini", also: ["notebook"], reason: "Deep Research 查資料，再用 Canvas 邊看邊改，研究和教材接成一條線。" },
    { id: "planning", icon: "🧑‍🏫", name: "備課討論", hint: "針對教學指引討論教學重點",
      pick: "notebook", also: ["chatgpt"], reason: "放進教學指引後，每個回答都能點回原文查證，適合依據教材備課。" },
    { id: "web", icon: "🌐", name: "網頁製作", hint: "互動遊戲、展示網頁、小工具",
      pick: "gemini", also: ["chatgpt"], reason: "Canvas 的 Vibe Coding 用說的就能做互動網頁；ChatGPT 也開始提供 Sites 網頁空間。" },
    { id: "repeat", icon: "🔁", name: "重複性的工作", hint: "評語、通知、每週固定任務",
      pick: "chatgpt", also: ["gemini"], reason: "ChatGPT 專案把指令和檔案留在同一處；Gemini 也能建立「技能」處理固定流程。" },
    { id: "accuracy", icon: "🔎", name: "資料查詢與內容準確度", hint: "查資料、確認內容有沒有錯",
      pick: "notebook", also: ["gemini"], reason: "回答只根據你給的來源，並附上引用位置；要大範圍蒐集資料再用 Gemini Deep Research。" },
    { id: "colearn", icon: "🧒", name: "學生與 AI 共學", hint: "讓學生用 AI 複習、提問、練習",
      pick: "notebook", also: ["gemini"], reason: "同一份教材可變成語音、影片、心智圖、閃卡與測驗，學生有多種學習入口。" },
    { id: "agent", icon: "🤖", name: "運用 AI 直接幫你工作", hint: "讓 AI 直接操作、完成一整件事",
      pick: "chatgpt", also: [], reason: "ChatGPT work 可以處理複雜任務，並串接 Kahoot、Padlet、Google Workspace 等外部工具。" }
  ]
};

window.AI_VOTE.round = (() => {
  const raw = new URLSearchParams(location.search).get("r") || window.AI_VOTE.defaultRound;
  return raw.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 40) || window.AI_VOTE.defaultRound;
})();

window.AI_VOTE.api = {
  headers() {
    const k = window.AI_VOTE.anonKey;
    return { apikey: k, Authorization: `Bearer ${k}`, "Content-Type": "application/json" };
  },
  async fetchVotes() {
    const v = window.AI_VOTE;
    const url = `${v.supabaseUrl}/rest/v1/${v.table}?select=scenario,tool,voter&round=eq.${encodeURIComponent(v.round)}&limit=5000`;
    const res = await fetch(url, { headers: this.headers(), cache: "no-store" });
    if (!res.ok) throw new Error(`讀取失敗 ${res.status}`);
    return res.json();
  },
  async addVote(scenario, tool, voter) {
    const v = window.AI_VOTE;
    const res = await fetch(`${v.supabaseUrl}/rest/v1/${v.table}`, {
      method: "POST",
      headers: { ...this.headers(), Prefer: "return=minimal" },
      body: JSON.stringify({ round: v.round, scenario, tool, voter })
    });
    if (res.status === 409) return "duplicate";
    if (!res.ok) throw new Error(`送出失敗 ${res.status}`);
    return "ok";
  },
  tally(rows) {
    const v = window.AI_VOTE;
    const result = {};
    v.scenarios.forEach(s => { result[s.id] = { chatgpt: 0, gemini: 0, notebook: 0, total: 0 }; });
    const voters = new Set();
    rows.forEach(r => {
      const t = result[r.scenario];
      if (!t || !(r.tool in t)) return;
      t[r.tool] += 1; t.total += 1; voters.add(r.voter);
    });
    return { result, voters: voters.size };
  }
};
