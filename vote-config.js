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
    notebook: { label: "Gemini Notebook", short: "Notebook", color: "#e08a12" },
    other: { label: "其他", short: "其他", color: "#8a9aa6" }
  },
  // pick：凱琳老師的答案；pickLabel／pickShort：選「其他」時的具體名稱（說明框／標籤用）；reason：揭曉時的一句說明
  scenarios: [
    { id: "image", icon: "🎨", name: "產生圖片", hint: "班級經營圖卡、課文插圖、自我介紹圖",
      pick: "chatgpt", also: [], reason: "生圖搭配「反向提問」，先討論情境與版面再生成，繁體中文字也比較穩。" },
    { id: "slides", icon: "🖥️", name: "製作簡報", hint: "把課文或研習資料變成投影片",
      pick: "notebook", also: [], reason: "上傳來源就能產出簡報與資訊圖表，還能指定漫畫、雜誌等風格。" },
    { id: "meeting", icon: "🎙️", name: "會議紀錄與轉錄", hint: "開會、晤談、口述想法變成文字",
      pick: "notebook", also: [], reason: "Gemini Notebook App 可直接錄音、拍照筆記，逐字稿與會議紀錄一次完成。" },
    { id: "interactive", icon: "🧩", name: "製作互動教材", hint: "互動網頁、小遊戲、課堂活動",
      pick: "gemini", also: [], reason: "Canvas 用說的就能做出互動網頁和小遊戲（Vibe Coding），邊預覽邊修改。" },
    { id: "planning", icon: "🧑‍🏫", name: "備課討論", hint: "針對教學指引討論教學重點",
      pick: "notebook", also: [], reason: "放進教學指引後，每個回答都能點回原文查證，適合依據教材備課。" },
    { id: "exam", icon: "📝", name: "出考卷、寫教案", hint: "依教學指引出題、規劃教案",
      pick: "notebook", also: [], reason: "把教學指引放進筆記本，就能規劃教案、出測驗並附答案與解析，每一題都能回查來源。" },
    { id: "repeat", icon: "🔁", name: "重複性的工作", hint: "評語、通知、每週固定任務",
      pick: "chatgpt", pickLabel: "ChatGPT 專案", also: [], reason: "ChatGPT 專案把指令和檔案留在同一處，評語、會議紀錄這類固定工作，一打開就能接著做。" },
    { id: "accuracy", icon: "🔎", name: "資料查詢與內容準確度", hint: "查資料、確認內容有沒有錯",
      pick: "other", pickLabel: "Google AI 模式", pickShort: "AI 模式", also: [], reason: "Google AI 模式整合搜尋結果並附上來源連結，可以直接點開原始網頁核對內容。" },
    { id: "colearn", icon: "🧒", name: "學生與 AI 共學", hint: "讓學生用 AI 複習、提問、練習",
      pick: "other", pickLabel: "e度、Edcafe", pickShort: "教育平台", also: [], reason: "e度、Edcafe 這類教育平台為課堂設計，老師可以設定任務、引導學生使用，比直接開放一般 AI 工具更適合學生。" },
    { id: "agent", icon: "🤖", name: "運用 AI 直接幫你工作", hint: "讓 AI 直接操作、完成一整件事",
      pick: "other", pickLabel: "AI Agent", pickShort: "AI Agent", also: [], reason: "AI Agent 能在授權範圍內規劃並執行多步驟任務，直接處理電腦裡的檔案；研習最後會分享我怎麼用它。" }
  ]
};

window.AI_VOTE.round = (() => {
  const raw = new URLSearchParams(location.search).get("r") || window.AI_VOTE.defaultRound;
  return raw.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 40) || window.AI_VOTE.defaultRound;
})();

window.AI_VOTE.local = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, val) { try { localStorage.setItem(k, JSON.stringify(val)); } catch {} },
  voter() {
    const key = `aivote-voter-${window.AI_VOTE.round}`;
    let id = this.get(key, null);
    if (!id) {
      id = (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2)).slice(0, 36);
      this.set(key, id);
    }
    return id;
  },
  choices() { return this.get(`aivote-choices-${window.AI_VOTE.round}`, {}); },
  saveChoice(id, tool) { const c = this.choices(); c[id] = tool; this.set(`aivote-choices-${window.AI_VOTE.round}`, c); }
};

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
    const blank = () => Object.fromEntries([...Object.keys(v.tools).map(k => [k, 0]), ["total", 0]]);
    v.scenarios.forEach(s => { result[s.id] = blank(); });
    const voters = new Set();
    rows.forEach(r => {
      const t = result[r.scenario];
      if (!t || !(r.tool in v.tools)) return;
      t[r.tool] += 1; t.total += 1; voters.add(r.voter);
    });
    return { result, voters: voters.size };
  }
};
