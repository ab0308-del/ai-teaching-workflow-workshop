window.WORKSHOP = {
  meta: {
    title: "AI神隊友－常見AI工具的教學工作流",
    presenter: "新北市大豐國小　許凱琳老師",
    resources: {
      notes: "https://docs.google.com/document/d/1lUt_1LFjXOBi8iuQgjz9L6E-VibiuOAZLRCsHm7ASP8/edit?tab=t.0",
      padlet: "https://padlet.com/ab0308/ai-chatgpt-gemini-gemini-notebook-w0vh6t48bvt0ysfq",
      slides: "https://docs.google.com/presentation/d/1vlEgHubyDQ7Sx0UmiclsAJLRIHzeCmRR_k_UExT4ZpM/edit"
    }
  },
  slides: [
    {
      type: "cover", label: "AI TEACHING WORKFLOW", title: "AI 神隊友",
      subtitle: "常見 AI 工具的教學工作流",
      event: {name: "115學年度新北市教師會精進研習", session: "第一場", time: "11/25（三）14:00～16:00"},
      tagline: "帶您無痛上手 AI 工具，把繁瑣工作一鍵搞定，神隊友上線，準時下班不是夢！",
      meta: ["ChatGPT", "Gemini", "Gemini Notebook"],
      notes: "開場：今天不比工具功能，而是帶走一套可以重複使用的工作方法。"
    },
    {
      type: "profile", tone: "paper", label: "MEET YOUR INSTRUCTOR", title: "許凱琳老師",
      lead: "從教學現場出發，把 AI 變成能協作、能查核、能落地的神隊友。",
      cards: [
        {icon:"🏆", title:"教學實踐", text:"115 年特殊優良教師、112 年 Super 教師獎、112 年教育部數位學習推動優良教案。"},
        {icon:"🎓", title:"專業推動", text:"教育部 A1、B3、B5-1 合格講師，Gemini 認證講師、Apple Professional Learning Specialist。"}
      ],
      notes: "簡短建立講師背景，重點放在真實教學實踐。"
    },
    {
      type: "toolPick", tone: "paper", label: "OPENING QUESTION", title: "AI 工具這麼多，你用哪一個？",
      tools: [
        {brand:"chatgpt", text:"語音、專案、生圖"},
        {brand:"gemini", text:"研究、Canvas、互動網頁"},
        {brand:"notebook", text:"來源導向的備課與學習"}
      ],
      note: "請舉手：平常最常用哪一個？還是三個都在用？",
      notes: "暖身調查，請老師舉手，接著進入下一頁的手機投票。"
    },
    {
      type: "vote", mode: "live", tone: "paper", label: "OPENING QUESTION", title: "這個工作，你會選哪一種 AI？",
      lead: "十個工作情境，各選一位最適合的 AI 神隊友：直接在這頁點選，或用手機掃 QR Code 作答。",
      notes: "給 2～3 分鐘作答。線上的老師可以直接在自己開啟的簡報這頁點選，也可以用手機掃 QR Code。結果會即時更新；點任一個情境可以揭曉「凱琳老師的選擇」，也可按「全部揭曉」。建議先只揭曉一兩題，留下懸念，最後一頁回顧時再全部揭曉。"
    },
    {
      type: "cards", tone: "paper", label: "TODAY'S MAP", title: "研習地圖",
      cards: [
        {icon:"01", title:"AI 是什麼？", text:"生成原理與幻覺。"},
        {icon:"02", title:"ChatGPT", text:"語音、專案與創意素材。"},
        {icon:"03", title:"Gemini", text:"研究、Canvas 與互動教材。"},
        {icon:"04", title:"Gemini Notebook", text:"來源導向的備課與學習。"},
        {icon:"05", title:"AI 素養", text:"教師判斷、學生引導與界線。"}
      ],
      notes: "五段內容可依現場狀況從目錄跳轉。"
    },
    {
      type: "flow3", tone: "paper", label: "HOW GENERATIVE AI WORKS", title: "生成式 AI 的基本運作",
      steps: [
        {title:"輸入", text:"問題、指令、檔案或情境。"},
        {title:"模型生成", text:"依訓練模式預測合適內容。"},
        {title:"輸出", text:"文字、圖片、影音或程式初稿。"}
      ],
      note: "生成結果看似完整，不代表已經查證。",
      notes: "用最簡單的方式說明：AI 是在「預測」最合適的下一段內容。"
    },
    {
      type: "image", tone: "paper", label: "AI EVOLUTION", title: "人工智慧的演進",
      image: "assets/user-01-ai-evolution.png", imageAlt: "人工智慧的演進示意圖",
      notes: "從規則式、機器學習、深度學習到生成式 AI。"
    },
    {
      type: "image", tone: "paper", label: "GENERATIVE AI", title: "生成式 AI 與 Transformer",
      image: "assets/user-02-generative-ai-transformer.png", imageAlt: "生成式 AI 與 Transformer 示意圖",
      notes: "Transformer 讓模型能同時看懂整段上下文，是今天這些工具的共同基礎。"
    },
    {
      type: "split", tone: "guard", label: "AI HALLUCINATION", title: "為什麼 AI 會說得像真的，卻可能是錯的？",
      bullets: ["模型優先產生語句連貫的回答。", "來源不足時，仍可能補出看似合理的細節。", "數據、人名與引用最需要回查。", "教師的專業判斷決定內容能不能進教室。"],
      visual: {icon:"🧭", title:"三個檢查問題", text:"有來源嗎？符合情境嗎？我願意為它負責嗎？"},
      notes: "遇到人名、數字、引用、答案與個資，必須特別停下來確認。"
    },
    {
      type: "image", tone: "guard", label: "AI HALLUCINATION", title: "AI 幻覺與錯誤資訊",
      image: "assets/user-03-ai-hallucination.png", imageAlt: "AI 幻覺與錯誤資訊示意圖",
      notes: "可舉一個實際遇過的 AI 錯誤例子。"
    },
    {
      type: "cards", tone: "paper", label: "TEACHER SCENARIOS", title: "老師通常從一個真實任務開始",
      cards: [
        {icon:"🎙️", title:"整理想法", text:"把口語內容變成重點與待辦。"},
        {icon:"🔎", title:"蒐集資料", text:"建立研究方向並回看來源。"},
        {icon:"🧩", title:"設計教材", text:"把研究結果轉為活動與互動素材。"},
        {icon:"📝", title:"備課與評量", text:"從指定資料發展教案、題目與解析。"}
      ],
      notes: "請老師想一項自己最近最想省時間的工作。"
    },
    {
      type: "flow", tone: "paper", label: "MY WORKFLOW", title: "一條可重複使用的教師工作流",
      steps: [
        {title:"需求", text:"先說清楚要解決什麼。"},
        {title:"選工具", text:"依任務選擇適合的 AI。"},
        {title:"提供素材", text:"加入來源、範例與限制。"},
        {title:"教師檢查", text:"修正後再用於教學。"}
      ],
      notes: "「選工具」就是剛剛投票的那一題，後面三章會一一說明。"
    },
    {
      type: "chapter", tone: "chatgpt", label: "CHAPTER 01", title: "ChatGPT", subtitle: "我的語音與創意助理",
      image: "assets/user-05-chatgpt-voice.png", imageAlt: "ChatGPT 語音模式操作畫面",
      notes: "ChatGPT 單元聚焦語音、專案、圖像與 work。"
    },
    {
      type: "flow", tone: "chatgpt", label: "VOICE", title: "先說出來，再把對話變成可用內容",
      steps: [
        {title:"說", text:"口述備課想法或工作紀錄。"},
        {title:"整", text:"整理主題、重點與待辦。"},
        {title:"查", text:"確認遺漏與錯誤。"},
        {title:"用", text:"轉成會議紀錄、貼文或教材。"}
      ],
      promptTitle: "語音對話整理",
      promptContext: "結束語音對話後，請 AI 依固定欄位整理。",
      prompt: "請將剛才的對話整理成主題、重點、待辦事項及待確認問題。請勿自行補充未提到的事實，使用繁體中文。",
      notes: "示範時先自然說一段，再打開完整提示詞複製。"
    },
    {
      type: "cards", tone: "chatgpt", label: "CONVERSATION TO WORK", title: "聊天不是結束，而是工作開始",
      cards: [
        {icon:"🧹", title:"統整", text:"把長對話整理成清楚段落。"},
        {icon:"💡", title:"發想", text:"提出選項，教師選擇與修正。"},
        {icon:"✅", title:"待辦", text:"拆出行動項與待確認問題。"}
      ],
      note: "代表你公開發言或做決策的內容，最後一步仍由你確認。",
      notes: "對話的價值在於轉成下一步可以用的東西。"
    },
    {
      type: "split", tone: "chatgpt", label: "PROJECTS", title: "Projects：把工作留在同一空間",
      bullets: ["集中相關對話、檔案與專案指令。", "讓每次新對話沿用相同規則。", "適合會議整理、長期備課與行政任務。", "先做一個最常用的專案，再逐步擴充。"],
      image: "assets/user-06-project-folders.png", imageAlt: "ChatGPT Projects 專案清單",
      prompts: [
        {title:"會議紀錄幫手｜專案指令", context:"實作案例：新增專案「會議紀錄幫手」，把這段文字貼進專案指令；之後每次開會，開新對話貼上逐字稿或筆記即可。",
         text:"你是學校會議紀錄的整理助手。我會提供會議逐字稿、錄音轉文字、照片或手寫筆記，請整理成：會議主題、日期與出席人員、討論重點、決議事項、待辦事項（含負責人與期限）及待確認問題。請勿自行補充未提到的內容，使用臺灣繁體中文，條列清楚。"},
        {title:"評語幫手｜專案指令", context:"新增專案「評語幫手」，把這段文字貼進專案指令。",
         text:"你是一位擁有數十年經驗的國小導師，我會根據正向與溫暖的原則，並參考您提供的風格和字數限制，撰寫一份約120字，絕不超過150字的期末評語與具體建議，採用臺灣繁體中文，並力求用字精確。"}
      ],
      notes: "實作案例以「會議紀錄幫手」為主：建專案、貼指令、貼一段逐字稿測試。延伸可再做「評語幫手」，提醒老師使用虛擬資料，Padlet 有「虛擬評語」檔可練習。"
    },
    {
      type: "cards", tone: "chatgpt", label: "IMAGE CREATION", title: "圖像生成服務教學理解",
      cards: [
        {icon:"🙋", title:"自我介紹圖片", text:"建立研習或課程開場視覺。"},
        {icon:"🧠", title:"課文心智圖", text:"呈現概念階層與關係。"},
        {icon:"💬", title:"情境漫畫", text:"把事件順序與對話具象化。"},
        {icon:"✏️", title:"線稿學習單", text:"保留學生思考與書寫空間。"}
      ],
      note: "檢查繁體中文字、知識內容、適齡性與圖像權利。",
      prompts: [
        {title:"心智圖提示詞", text:"請根據我提供的課文，生成適合國小學生的彩色心智圖，呈現概念階層與關係。將部分關鍵節點留空供學生填寫，繁體中文，A4 直式。"},
        {title:"漫畫提示詞", text:"請將以下課文轉成四格情境漫畫，每格包含人物、情境及簡短繁體中文對話，幫助學生理解重點，A4 直式。"},
        {title:"學習單提示詞", text:"請把課文轉成適合學生填寫的黑白線稿學習單，包含插圖、關鍵概念與作答空間。"}
      ],
      notes: "現場依時間選一種示範即可。Padlet 有康軒五上國語第五課 PDF 可練習。"
    },
    {
      type: "flow3", tone: "chatgpt", label: "BEFORE AND AFTER", title: "原始素材如何變成可教、可用的成果",
      steps: [
        {title:"前｜原始素材", text:"一段口語想法、課文或零散工作紀錄。"},
        {title:"中｜AI 協助", text:"整理結構、提出版本、生成視覺初稿。"},
        {title:"後｜教師完成", text:"核對內容、修正語氣、決定如何使用。"}
      ],
      notes: "強調「後」這一步永遠是老師。"
    },
    {
      type: "cards", tone: "method", label: "AI COMMUNICATION", title: "與 AI 溝通的四個招式",
      cards: [
        {icon:"📌", title:"交待清楚", text:"說明目前狀況／問題，以及希望獲得的結果。"},
        {icon:"📚", title:"給教材資料", text:"提供截圖、照片或檔案，讓 AI 有依據，不必憑空猜。"},
        {icon:"❓", title:"引導與提問", text:"不確定怎麼說時，請 AI 主動提問、確認細節。"},
        {icon:"🧩", title:"分工與分步", text:"複雜任務先規劃步驟與分工，再逐步完成。"}
      ],
      notes: "可請老師跟著說一次：交待、給資料、請提問、分步做。"
    },
    {
      type: "cards", tone: "method", label: "PROMPT FORMULA", title: "不需要再跟別人要提示詞",
      cards: [
        {icon:"🧾", title:"具體內容", text:"提供背景、學習對象、參考資料與問題情境。"},
        {icon:"🎯", title:"任務", text:"說明想完成的成果，例如：班級經營說明圖卡。"},
        {icon:"🤝", title:"一起完成", text:"讓 AI 成為協作夥伴，主動展開引導式對話。"},
        {icon:"↩️", title:"反向提問", text:"先說：「不要直接做圖卡，請先跟我討論圖卡製作主題。」"}
      ],
      promptTitle: "班級經營圖卡｜反向提問",
      promptContext: "先上傳一張參考圖卡，再貼上這段提示詞，回答 AI 的提問後才生成。",
      prompt: "請參考我上傳的圖卡，我想為【五年級學生】設計一張【班級情境】圖卡，來輔導班上有行為問題的學生，和我一起完成。先不要生成圖片，請先問我問題，確認使用情境、重點與版面。",
      notes: "這是本次研習的重要方法：先討論、確認，再生成。Padlet「圖卡(反向提問)」區有老師們的作品。"
    },
    {
      type: "cards", tone: "chatgpt", mode: "✨ 最新補充", label: "CHATGPT WORK", title: "ChatGPT work：讓 AI 直接幫你做事",
      cards: [
        {icon:"🧠", title:"處理複雜任務", text:"可協助執行複雜工作，並支援掛接外部程式，如 Kahoot、Padlet、Google Workspace⋯。"},
        {icon:"🌐", title:"網頁開發與託管", text:"具備網頁製作功能，並提供 ChatGPT Sites 網頁空間供使用。"}
      ],
      note: "從聊天，走到讓 AI 動手完成：這正是邁向 AI Agent 的第一步。",
      notes: "最新補充。可回扣第 4 頁投票結果中的「運用 AI 直接幫你工作」。"
    },
    {
      type: "chapter", tone: "gemini", label: "CHAPTER 02", title: "Google Gemini", subtitle: "從課程研究到互動教材",
      image: "assets/user-07-gemini-query.png", imageAlt: "向 Gemini 詢問六年級 SEL 教材的畫面",
      notes: "Gemini 單元以六年級 SEL 為共同案例，串起研究、Canvas 與 Vibe Coding。"
    },
    {
      type: "flow", tone: "gemini", label: "GOOGLE ECOSYSTEM", title: "Gemini 的位置：把研究接到教材製作",
      steps: [
        {title:"研究", text:"Deep Research 蒐集與整理來源。"},
        {title:"匯出", text:"保留 Google 文件或 PDF。"},
        {title:"設計", text:"Canvas 發展教材與活動。"},
        {title:"互動", text:"Vibe Coding 製作可操作網頁。"}
      ],
      notes: "Gemini 的強項在於和 Google 文件、雲端硬碟、協作平台接在一起。"
    },
    {
      type: "screenshot", tone: "gemini", label: "DEEP RESEARCH", title: "SEL 主題研究：先定問題，再檢查來源",
      image: "assets/user-08-gemini-deep-research.png", imageAlt: "Gemini Deep Research 操作畫面",
      steps: [
        {title:"設定任務", text:"六年級 SEL、用途與範圍。"},
        {title:"檢視計畫", text:"確認研究方向沒有偏題。"},
        {title:"閱讀來源", text:"點回原始頁面核對。"},
        {title:"整理建議", text:"區分來源內容與教學設計。"}
      ],
      promptTitle: "Deep Research｜SEL 主題研究",
      promptContext: "開啟 Gemini → 選擇 Deep Research，輸入研究主題、年級與用途。",
      prompt: "我想帶國小六年級學生進行 SEL 社會情緒學習，請研究適合的教學教材、五個核心向度及可用的活動範例，整理來源連結與教學建議。",
      actions: [{label:"開啟操作筆記", resource:"notes", secondary:true}],
      notes: "務必示範研究計畫與來源回查，不要只展示長報告。"
    },
    {
      type: "split", tone: "gemini", label: "RESEARCH HANDOFF", title: "研究成果要能交給下一個步驟使用",
      bullets: ["先刪除不相關或無法確認的內容。", "保留來源連結與可追溯的段落。", "匯出為 Google 文件或 PDF。", "把整理後的資料交給 Canvas 做教材設計。"],
      visual: {icon:"🔗", title:"乾淨的交接", text:"下一步拿到的是可檢查、可追溯的材料。"},
      notes: "研究不是終點；交接品質會直接影響下一步。"
    },
    {
      type: "split", tone: "gemini", label: "GEMINI CANVAS", title: "Canvas 把研究資料變成可持續修改的教材",
      bullets: ["先產生課程架構，再逐段修正。", "每個 SEL 向度包含目標、情境、提問與活動。", "調整年級用語、閱讀量與任務難度。", "保留來源內容與設計建議的區別。"],
      image: "assets/user-09-gemini-canvas.png", imageAlt: "Gemini Canvas 教材設計畫面",
      promptTitle: "Canvas｜五堂 SEL 教材",
      promptContext: "在 Gemini 開啟 Canvas，貼入研究結果或加入教材後使用。五個 SEL 向度：自我覺察、自我管理、社會覺察、人際技巧、負責任的決定。",
      prompt: "請使用這一份文件，協助我設計給學生使用的五堂課的教材。這五堂課分別就是SEL社會情緒學習的五個向度。\n我想要製作上課的簡報，請協助我列出簡報大綱及內容。",
      notes: "先產生架構，再在 Canvas 裡直接修正，不一次接受完整成品。"
    },
    {
      type: "cards", tone: "gemini", label: "VIBE CODING", title: "用自然語言製作互動網頁",
      cards: [
        {icon:"🎯", title:"定義學習任務", text:"學生完成後要理解或練習什麼。"},
        {icon:"🧪", title:"先做最小版本", text:"一種題型、清楚回饋、可操作按鈕。"},
        {icon:"📱", title:"預覽與測試", text:"檢查平板、手機與投影畫面。"},
        {icon:"🛠️", title:"反覆修正", text:"描述具體問題，再定點修改。"}
      ],
      promptTitle: "Vibe Coding｜SEL 互動情境遊戲",
      promptContext: "在 Gemini Canvas 描述網頁功能與使用對象。",
      prompt: "請製作適合國小六年級的 SEL 互動情境遊戲。每題呈現一個生活情境及三個選項，作答後顯示回饋與原因。使用繁體中文，畫面活潑，適合平板操作。",
      notes: "老師不必先學程式；先能說清楚使用者、任務、畫面與回饋。"
    },
    {
      type: "imageFeature", tone: "gemini", label: "VIBE CODING", title: "用 Vibe Coding 創造互動網頁遊戲",
      image: "assets/user-10-vibe-coding.png", imageAlt: "用 Vibe Coding 製作 SEL 互動遊戲的示意圖",
      caption: "一個情境、三個選項、一段有理由的回饋，就是可以上課用的第一版。",
      actions: [{label:"玩玩看：SEL 情緒保衛站", href:"https://gemini.google.com/share/5dd79f600435"}],
      notes: "現場開啟 SEL 情緒保衛站示範。"
    },
    {
      type: "cards", tone: "gemini", label: "DEMO CASE", title: "兩個可快速展示的互動案例",
      cards: [
        {icon:"🎮", title:"SEL 情境選擇遊戲", text:"情境、三個選項、即時回饋與原因。"},
        {icon:"📷", title:"拍立得照片網頁", text:"照片、標題、說明、放大與手機版面。"}
      ],
      prompts: [
        {title:"SEL 網頁提示詞", text:"請製作適合國小六年級的 SEL 互動情境遊戲。每題呈現一個生活情境及三個選項，作答後顯示回饋與原因。使用繁體中文，畫面活潑，適合平板操作。"},
        {title:"拍立得網頁提示詞", text:"請製作拍立得風格的照片展示網頁，卡片包含照片、標題與說明，可點擊放大，支援手機版面。先用示範圖片占位，讓我可以再替換內容。"}
      ],
      note: "完成後確認：互動可用、內容正確、分享權限適當。",
      notes: "若不安排操作，這頁可直接播放示範並說明測試重點。"
    },
    {
      type: "imageFeature", tone: "gemini", label: "SHARE", title: "完成教材後的分享方式",
      image: "assets/user-11-share-learning.png", imageAlt: "Gemini 教材分享方式示意圖",
      captionLabel: "最新更新",
      caption: "可以直接分享到 Google Sites 協作平台，不用像之前一樣貼來貼去。",
      notes: "示範分享連結與嵌入 Google Sites。"
    },
    {
      type: "cards", tone: "gemini", mode: "✨ 最新補充", label: "GEMINI SKILLS", title: "Gemini 技能：把重複的工作交出去",
      cards: [
        {icon:"🔁", title:"取代過去的 Gem", text:"現在可以透過建立「技能」來取代過去的 Gem。"},
        {icon:"📣", title:"需要時再呼叫", text:"將重複性的工作交由技能處理，需要時再進行呼叫。"},
        {icon:"⏱️", title:"省下瑣碎時間", text:"有效節省處理瑣碎事務的時間。"}
      ],
      note: "對應投票題「重複性的工作」：一次設定好，之後一鍵叫用。",
      notes: "最新補充。可回扣投票結果中的「重複性的工作」。"
    },
    {
      type: "flow5", tone: "gemini", label: "GEMINI WORKFLOW", title: "從研究到課堂應用的完整路徑",
      steps: [
        {title:"Deep Research", text:"蒐集並查核來源。"},
        {title:"Canvas", text:"整理教材與活動。"},
        {title:"Vibe Coding", text:"轉成互動網頁。"},
        {title:"測試", text:"修正內容與操作。"},
        {title:"課堂應用", text:"由教師決定如何使用。"}
      ],
      notes: "回顧 Gemini 整條路徑。"
    },
    {
      type: "chapter", tone: "notebook", label: "CHAPTER 03", title: "Gemini Notebook", subtitle: "來源導向的備課、評量與多模態學習",
      image: "assets/user-12-notebook-workflow.png", imageAlt: "Gemini Notebook 多模態教材工作流",
      notes: "口頭說明：Gemini Notebook 即原 NotebookLM，介面可能仍顯示舊名稱。"
    },
    {
      type: "quote", tone: "notebook", label: "MY STORY", title: "我原本以為，它只是讀論文的工具",
      quote: "直到我把教學指引放進去，才看見它可以支援備課、評量與不同學習入口。",
      notes: "分享自己的使用歷程。"
    },
    {
      type: "flow", tone: "notebook", label: "SOURCE-GROUNDED NOTEBOOK", title: "先建立來源，再與資料對話",
      steps: [
        {title:"建立筆記本", text:"依課程或主題分開管理。"},
        {title:"上傳來源", text:"教學指引、PDF 或參考教材。"},
        {title:"提出問題", text:"請 AI 根據來源整理。"},
        {title:"查閱引用", text:"點回原文確認依據。"}
      ],
      promptTitle: "Gemini Notebook｜來源整理",
      promptContext: "新增筆記本「SEL 社會情緒學習」，上傳教學指引後提問。",
      prompt: "請根據這份教學指引，整理六年級 SEL 五個向度的學習目標、重點概念與教學活動，並標示依據來源。",
      notes: "示範引用位置；掃描檔要先確認文字辨識是否完整。"
    },
    {
      type: "dualPrompt", tone: "notebook", mode: "示範／教師跟做", label: "PLANNING AND ASSESSMENT", title: "同一份教學指引，發展教案與評量",
      prompts: [
        {icon:"📚", title:"備課", text:"課程架構、教案、學習單與教學提問。", prompt:"請根據這份教學指引，規劃五堂國小六年級 SEL 課程，每堂列出學習目標、教學流程、討論題與評量方式。"},
        {icon:"🧾", title:"評量", text:"測驗、答案、解析與對應學習重點。", prompt:"請根據來源設計 10 題測驗，包含選擇題及情境題，附答案、解析與對應學習重點。"}
      ],
      note: "🔍 教師核對：來源、難度、題意與答案正確性。",
      notes: "可二選一示範；重點是所有內容都能回到指定來源。"
    },
    {
      type: "cards", tone: "notebook", label: "MULTIMODAL LEARNING", title: "同一份資料，可以有多種學習入口",
      cards: [
        {icon:"📖", title:"閱讀", text:"報告、摘要與簡報。"},
        {icon:"🎧", title:"聆聽", text:"語音摘要。"},
        {icon:"🎬", title:"觀看", text:"影片摘要與資訊圖表。"},
        {icon:"🧠", title:"整理", text:"心智圖與學習卡。"},
        {icon:"🃏", title:"練習", text:"閃卡與提取練習。"},
        {icon:"✅", title:"測驗", text:"題目、答案與解析。"}
      ],
      notes: "多模態不等於越多越好；請依學習目標與學生需要選擇。"
    },
    {
      type: "dualPrompt", tone: "notebook", label: "SLIDES & INFOGRAPHICS", title: "簡報與資訊圖表，也可以指定風格",
      prompts: [
        {icon:"💥", title:"漫畫簡報", text:"每張投影片三格漫畫，手寫筆觸、繁體中文。", prompt:"請根據來源以日本動漫spy family的人物主角，將簡報內容都變成動漫漫畫風格，每個slide三格，橫式排版。記得每個句子都要呈現。核心筆觸： 內容主體必須用「工整的深黑色中性筆」手寫完成。繁體中文輸出"},
        {icon:"🗞️", title:"資訊圖表", text:"文章流程圖＋詳細說明，雜誌風格。", prompt:"請根據來源，畫出文章的流程圖附上詳細說明，日本流行雜誌風格，但是說明文字是台灣繁體中文。"}
      ],
      note: "產出後仍要檢查文字、版面與來源是否一致；Padlet 另有「NotebookLM 轉可編輯簡報」工具。",
      notes: "對應投票題「製作簡報」。"
    },
    {
      type: "cards", tone: "notebook", mode: "✨ 最新補充", label: "GEMINI NOTEBOOK APP", title: "Gemini Notebook App：拍照、錄音就開始",
      cards: [
        {icon:"📸", title:"拍照筆記", text:"在應用程式打開後，可以直接拍照做筆記。"},
        {icon:"🎙️", title:"直接錄音", text:"開會、晤談的內容直接錄下來。"},
        {icon:"📝", title:"會議紀錄與逐字稿", text:"製作會議紀錄、有逐字稿，都變得更簡單。"},
        {icon:"🔄", title:"深度對話與多模態", text:"接著進行深度對話，或轉成各種學習素材。"}
      ],
      note: "對應投票題「會議紀錄與轉錄」。",
      notes: "最新補充。可現場用手機示範拍一張照片加入來源。"
    },
    {
      type: "chapter", tone: "guard", label: "CHAPTER 04", title: "教育現場的 AI 倫理", subtitle: "讓專業判斷走在工具前面",
      image: "assets/user-14-ai-ethics.png", imageAlt: "教師使用 AI 的倫理提醒",
      notes: "倫理不是最後的警告，而是前面每個操作都要帶著的條件。"
    },
    {
      type: "cards", tone: "guard", label: "TEACHER AND STUDENT", title: "教師與學生，需要不同的使用邊界",
      cards: [
        {icon:"🧑‍🏫", title:"教師使用 AI", text:"運用專業知識與後設認知，負責查核、選擇與修訂。"},
        {icon:"🧒", title:"學生使用 AI", text:"依年齡、學習目的與管理需求，提供適當引導與把關。"}
      ],
      notes: "對應投票題「學生與 AI 共學」：學生使用時，老師的引導是關鍵。"
    },
    {
      type: "cards", tone: "guard", label: "BOUNDARIES", title: "教育平台與 AI 工具都需要教師引導",
      cards: [
        {icon:"🏫", title:"教育情境", text:"各類教育平台與 Edcafe AI 可作為教學案例。"},
        {icon:"🔒", title:"保護個資", text:"只提供完成任務所需的最少資料。"},
        {icon:"🧭", title:"辨識生成內容", text:"標示 AI 參與，回查來源與事實。"},
        {icon:"🧠", title:"不代替思考", text:"讓 AI 支援學習，不直接完成學生任務。"}
      ],
      note: "任何平台都不宣稱完全無風險；也要提醒 Deepfake 與假內容的辨識。",
      notes: "收束倫理段落。"
    },
    {
      type: "vote", mode: "recap", tone: "integrate", label: "LOOK BACK", title: "回頭看：你的神隊友選對了嗎？",
      lead: "對照大家的選擇和凱琳老師的選擇，同一個工作，常常不只一種好答案。",
      notes: "按「全部揭曉」，挑兩三題和大家差異最大的情境討論。還沒投票的老師仍可掃 QR Code 補投。"
    },
    {
      type: "partners", tone: "integrate", label: "THREE AI PARTNERS", title: "三個工具，在工作流中各有位置",
      partners: [
        {brand:"chatgpt", title:"你的隨身助理", lines:["語音對話", "專案、生圖、work", "最人性化的小幫手"]},
        {brand:"gemini", title:"你的課程設計師", lines:["深度研究", "多元 Canvas", "創意教材任你玩"]},
        {brand:"notebook", title:"你的知識精煉師", lines:["教學深化", "多模態輸出", "打造高效工作流"]}
      ],
      note: "工具名稱可能演進，但工作流中的角色可以保留。",
      notes: "請老師回想自己要帶走哪一條流程。"
    },
    {
      type: "flow3", tone: "agent", label: "MY AI JOURNEY", title: "AI 演進得好快，我的用法也一路在變",
      steps: [
        {title:"① 聊天問答", text:"在網頁上問問題、請 AI 寫一段文字，再複製貼上回來用。"},
        {title:"② 上傳資料一起做", text:"專案、Canvas、Gemini Notebook：把檔案上傳，讓 AI 依資料產出教材。"},
        {title:"③ AI agent 在本機幫我做", text:"直接讀寫我電腦裡的檔案，從頭到尾把一件工作完成。"}
      ],
      note: "前面介紹的工具我還是天天在用；需要處理本機檔案的工作，現在多半交給 AI agent。",
      notes: "說明自己的演進：從複製貼上，到上傳資料，到讓 AI agent 直接在電腦裡工作。可提到自己用的是 Claude Code 和 Codex。"
    },
    {
      type: "agent", tone: "agent", label: "WHY AI AGENT", title: "AI agent：直接在我的電腦裡工作",
      features: [
        {icon:"📂", title:"檔案不用再上傳", text:"直接讀取電腦裡的教材、PDF、簡報與照片。"},
        {icon:"🛠️", title:"一次完成多個步驟", text:"查資料、整理、做檔案、檢查，一路做到好。"},
        {icon:"📝", title:"成果直接存回電腦", text:"產出 Word、簡報、網頁，放進指定的資料夾。"},
        {icon:"🧑‍🏫", title:"我負責下指令與把關", text:"說清楚目標，最後由老師檢查、決定怎麼用。"}
      ],
      examples: ["這份網頁簡報與即時投票", "研習三件組：簡報、Padlet、操作筆記", "Keynote 簡報精簡與補插圖", "出題、試卷與教學筆記整理"],
      notes: "分享實際用 AI agent 完成的工作。今天的網頁簡報、手機投票，就是請 AI agent 協助完成的。"
    },
    {
      type: "nextSession", tone: "agent", label: "NEXT SESSION", title: "想更深入 AI agent？歡迎參加第二場",
      session: {
        name: "115學年度新北市教師會精進研習",
        order: "第二場",
        title: "您的AI好幫手－輕鬆解鎖AI Agent的神奇應用",
        time: "12/2（三）14:00～16:00",
        speaker: "張鉅輝老師",
        pitch: "想雇個免錢的超級助理嗎？解鎖 AI Agent 的神奇魔法，讓它幫您處理各種教學疑難雜症！",
        join: "線上 Meet 教室，代碼請見教師會 LINE 通知"
      },
      notes: "銜接第二場：今天介紹常見 AI 工具，下週由張鉅輝老師帶大家深入 AI agent。"
    },
    {
      type: "closing", tone: "hero", label: "YOUR NEXT MOVE", title: "帶走真正會再用的 AI 工作流",
      subtitle: "帶您無痛上手 AI 工具，把繁瑣工作一鍵搞定，神隊友上線，準時下班不是夢！",
      checklist: ["我選好一項真實任務", "我知道該找哪一位神隊友", "我會請 AI 先提問、再生成", "我完成至少一次教師查核"],
      actions: [
        {label:"開啟操作筆記", resource:"notes"},
        {label:"前往 Padlet 分享", resource:"padlet", secondary:true}
      ],
      notes: "最後請老師寫下自己下一次會使用的任務、資料來源與檢查方式，並在 Padlet 留言。"
    }
  ]
};
