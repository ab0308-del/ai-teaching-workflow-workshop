window.WORKSHOP = {
  meta: {
    title: "AI 神隊友：ChatGPT、Gemini 與 Gemini Notebook 的教學工作流",
    presenter: "新北市大豐國小　許凱琳老師",
    notesFile: "AI神隊友_教師操作筆記.docx"
  },
  slides: [
    {
      type: "cover", label: "AI TEACHING WORKFLOW",
      title: "AI 神隊友", subtitle: "ChatGPT、Gemini 與 Gemini Notebook 的教學工作流",
      meta: ["國小教師研習", "模組化簡報"],
      brands: ["chatgpt", "gemini", "notebook"],
      notes: "開場先說明今天不做工具功能巡禮，而是分享三個工具如何在真實教學工作中分工。"
    },
    {
      type: "profile", label: "MEET YOUR INSTRUCTOR", title: "許凱琳老師",
      cards: [
        {icon:"🏆", title:"教學實踐", text:"115 年特殊優良教師、112 年 Super 教師獎、數位學習推動優良案例。"},
        {icon:"🎓", title:"專業推動", text:"教育部 A1、B3、B5-1 合格講師，Gemini 認證講師、Apple Professional Learning Specialist。"}
      ],
      notes: "簡短建立講師背景，重點放在教學實踐，不需逐條念完經歷。"
    },
    {
      type: "cards", label: "TODAY'S MAP", title: "六個可自由跳轉的研習模組",
      brands: ["chatgpt", "gemini", "notebook"],
      cards: [
        {icon:"01", title:"工作流觀念", text:"情境、生成原理與查證。"},
        {icon:"02", title:"ChatGPT", text:"語音、專案與創意素材。"},
        {icon:"03", title:"Gemini", text:"研究、Canvas 與互動教材。"},
        {icon:"04", title:"Gemini Notebook", text:"來源導向的備課與學習。"},
        {icon:"05", title:"AI 倫理", text:"教師判斷、學生引導與界線。"},
        {icon:"06", title:"帶走一條流程", text:"依現場時間彈性取捨。"}
      ],
      notes: "這頁強調沒有固定時數與操作節奏。可依現場狀況直接從目錄跳到需要的單元。"
    },
    {
      type: "cards", label: "TEACHER SCENARIOS", title: "老師通常從一個真實任務開始",
      cards: [
        {icon:"🎙️", title:"整理想法", text:"把口語內容變成重點與待辦。"},
        {icon:"🔎", title:"蒐集資料", text:"建立研究方向並回看來源。"},
        {icon:"🧩", title:"設計教材", text:"把研究結果轉為活動與互動素材。"},
        {icon:"📝", title:"備課與評量", text:"從指定資料發展教案、題目與解析。"}
      ],
      notes: "請學員先選一項自己最常重複的工作，後面所有示範都可以套回這個任務。"
    },
    {
      type: "flow", label: "HOW GENERATIVE AI WORKS", title: "生成式 AI 的基本運作",
      steps: [
        {title:"輸入", text:"問題、指令、檔案或情境。"},
        {title:"模型生成", text:"依訓練模式預測合適內容。"},
        {title:"輸出", text:"文字、圖片、影音或程式初稿。"}
      ],
      note: "生成結果看似完整，不代表已經查證。",
      notes: "用生活化說法即可：AI 不是從腦中找到唯一答案，而是根據輸入與已學模式組合出回應。"
    },
    {
      type: "image", title: "人工智慧的演進",
      image: "assets/user-01-ai-evolution.png", imageAlt: "人工智慧、機器學習、深度學習與生成式 AI 的演進圖",
      notes: "依時間軸說明人工智慧、機器學習、深度學習到生成式 AI 的概念演進。"
    },
    {
      type: "image", title: "生成式 AI 與 Transformer",
      image: "assets/user-02-generative-ai-transformer.png", imageAlt: "生成式 AI 編碼器、解碼器與 Transformer 運作圖",
      notes: "使用圖示說明預訓練、文字接龍與 Transformer 架構，不需深入數學細節。"
    },
    {
      type: "split", label: "AI HALLUCINATION", title: "為什麼 AI 會說得像真的，卻可能是錯的？",
      bullets: ["模型優先產生語句連貫的回答。", "來源不足時，仍可能補出看似合理的細節。", "數據、人名與引用最需要回查。", "教師的專業判斷決定內容能不能進教室。"],
      visual: {icon:"🔍", title:"三個檢查問題", text:"有來源嗎？符合情境嗎？我願意為它負責嗎？"},
      notes: "避免只用『AI 會騙人』解釋。重點是生成機制與驗證責任。"
    },
    {
      type: "image", title: "AI 幻覺與錯誤資訊",
      image: "assets/user-03-ai-hallucination.png", imageAlt: "AI 幻覺形成原因與錯誤資訊示意圖",
      notes: "搭配前一頁的檢查問題，說明訓練資料限制、生成機制與查核責任。"
    },
    {
      type: "flow", label: "MY WORKFLOW", title: "一條可重複使用的教師工作流",
      steps: [
        {title:"需求", text:"先說清楚要解決什麼。"},
        {title:"選工具", text:"依任務選擇適合的 AI。"},
        {title:"提供素材", text:"加入來源、範例與限制。"},
        {title:"教師檢查", text:"修正後再用於教學。"}
      ],
      notes: "這是全場主軸。後面三個工具都回到同一條流程，不把任何工具說成萬用。"
    },
    {
      type: "image", label: "OPENING QUESTION", title: "你用過哪些 AI？", displayTitle: true,
      brands: ["chatgpt", "gemini", "notebook"],
      image: "assets/user-04-ai-tool-map.png", imageAlt: "依功能整理的 AI 工具分類圖",
      notes: "邀請學員先從自己用過的工具分享，再引導大家從工具名稱轉向任務分類。"
    },
    {
      type: "chapter", label: "CHAPTER 01", title: "ChatGPT", subtitle: "我的語音與創意助理",
      image: "assets/user-05-chatgpt-voice.png", imageAlt: "ChatGPT 語音模式開始說話畫面",
      notes: "ChatGPT 單元聚焦語音、對話整理、Projects 與圖像生成。"
    },
    {
      type: "flow", label: "VOICE", title: "先說出來，再把對話變成可用內容",
      steps: [
        {title:"說", text:"口述備課想法或工作紀錄。"},
        {title:"整", text:"整理主題、重點與待辦。"},
        {title:"查", text:"確認遺漏與錯誤。"},
        {title:"用", text:"轉成會議紀錄、貼文或教材。"}
      ],
      mode: "示範／教師跟做", action: {label:"開啟操作筆記", href:"AI神隊友_教師操作筆記.docx"},
      notes: "示範時先自然說一段，再請 AI 整理。讓學員看到聊天內容如何轉成下一步工作材料。"
    },
    {
      type: "cards", label: "CONVERSATION TO WORK", title: "聊天不是結束，而是工作開始",
      cards: [
        {icon:"🧹", title:"統整", text:"把長對話整理成清楚段落。"},
        {icon:"💡", title:"發想", text:"提出選項，讓教師選擇與修正。"},
        {icon:"✅", title:"待辦", text:"拆出行動項與待確認問題。"}
      ],
      note: "代表你公開發言或做決策的內容，最後一步仍由你確認。",
      notes: "可舉活動後口述心得、會議紀錄或臨時備課靈感。"
    },
    {
      type: "split", label: "PROJECTS", title: "Projects 把同一項工作留在同一個空間",
      bullets: ["集中相關對話、檔案與專案指令。", "讓每次新對話沿用相同規則。", "適合會議整理、長期備課與行政任務。", "先做一個最常用的專案，再逐步擴充。"],
      image: "assets/user-06-project-folders.png", imageAlt: "ChatGPT Projects 專案資料夾清單",
      mode: "示範／教師跟做", action: {label:"開啟操作筆記", href:"AI神隊友_教師操作筆記.docx"},
      notes: "強調 Projects 的價值是延續工作脈絡，不是單次問答更長。"
    },
    {
      type: "cards", label: "PROJECT INSTRUCTIONS", title: "專案指令的四個必要元素",
      cards: [
        {icon:"👤", title:"角色 Role", text:"用什麼專業視角處理。"},
        {icon:"🎯", title:"任務 Task", text:"需要完成什麼工作。"},
        {icon:"🧱", title:"限制 Constraints", text:"來源、語氣與不能做的事。"},
        {icon:"📄", title:"輸出 Output", text:"結果的結構與格式。"}
      ],
      notes: "讓學員把自己的常用任務套入四格，不需追求一次寫出完美指令。"
    },
    {
      type: "cards", label: "IMAGE CREATION", title: "圖像生成服務教學理解，而不是只求好看",
      cards: [
        {icon:"👋", title:"自我介紹圖片", text:"建立研習或課程開場視覺。"},
        {icon:"🧠", title:"課文心智圖", text:"呈現概念階層與關係。"},
        {icon:"💬", title:"情境漫畫", text:"把事件順序與對話具象化。"},
        {icon:"✏️", title:"線稿學習單", text:"保留學生思考與書寫空間。"}
      ],
      note: "檢查繁體中文字、知識內容、適齡性與圖像權利。",
      mode: "示範／教師跟做", action: {label:"開啟操作筆記", href:"AI神隊友_教師操作筆記.docx"},
      notes: "示範一種圖像即可。先講教學用途，再談風格與版面。"
    },
    {
      type: "compare", label: "BEFORE AND AFTER", title: "原始素材如何變成可教、可用的成果",
      cards: [
        {icon:"前", title:"原始素材", text:"一段口語想法、課文或零散工作紀錄。"},
        {icon:"中", title:"AI 協助", text:"整理結構、提出版本、生成視覺初稿。"},
        {icon:"後", title:"教師完成", text:"核對內容、修正語氣、決定如何使用。"}
      ],
      notes: "這頁不是宣稱 AI 自動完成教材，而是把教師判斷放在成果完成前。"
    },
    {
      type: "chapter", label: "CHAPTER 02", title: "Google Gemini", subtitle: "從課程研究到互動教材",
      image: "assets/user-07-gemini-query.png", imageAlt: "向 Gemini 詢問六年級 SEL 教學教材的提示詞畫面",
      notes: "Gemini 單元以 SEL 為共同主題，串起研究、教材設計與互動網頁。"
    },
    {
      type: "flow", label: "GOOGLE ECOSYSTEM", title: "Gemini 的位置：把研究接到教材製作",
      steps: [
        {title:"研究", text:"Deep Research 蒐集與整理來源。"},
        {title:"匯出", text:"保留 Google 文件或 PDF。"},
        {title:"設計", text:"Canvas 發展教材與活動。"},
        {title:"互動", text:"Vibe Coding 製作可操作網頁。"}
      ],
      notes: "不要比較誰一定比較準。聚焦這次課程中的工作流程與 Google 生態系銜接。"
    },
    {
      type: "flow", label: "DEEP RESEARCH", title: "SEL 主題研究：先定問題，再檢查來源",
      image: "assets/user-08-gemini-deep-research.png", imageAlt: "使用 Gemini 進行 SEL 教材深度研究的操作圖",
      steps: [
        {title:"設定任務", text:"六年級 SEL、用途與範圍。"},
        {title:"檢視計畫", text:"確認研究方向沒有偏題。"},
        {title:"閱讀來源", text:"點回原始頁面核對。"},
        {title:"整理建議", text:"區分來源內容與教學設計。"}
      ],
      mode: "示範／教師跟做", action: {label:"開啟操作筆記", href:"AI神隊友_教師操作筆記.docx"},
      notes: "示範時讓學員看到研究計畫與來源，不只看最後生成的長報告。"
    },
    {
      type: "split", label: "RESEARCH HANDOFF", title: "研究成果要能交給下一個步驟使用",
      bullets: ["先刪除不相關或無法確認的內容。", "保留來源連結與可追溯的段落。", "匯出為 Google 文件或 PDF。", "把整理後的資料交給 Canvas 做教材設計。"],
      image: "assets/user-09-gemini-canvas.png", imageAlt: "從研究資料轉成 Gemini Canvas 五堂課教材的示意圖",
      notes: "研究不是終點。交付給下一個工具前，先整理成教師看得懂、可檢查的材料。"
    },
    {
      type: "split", label: "GEMINI CANVAS", title: "Canvas 把研究資料變成可持續修改的教材",
      bullets: ["先產生課程架構，再逐段修正。", "每個 SEL 向度包含目標、情境、提問與活動。", "調整年級用語、閱讀量與任務難度。", "保留來源內容與設計建議的區別。"],
      visual: {icon:"🧩", title:"五個 SEL 向度", text:"自我覺察、自我管理、社會覺察、人際技巧、負責任的決定。"},
      mode: "示範／教師跟做", action: {label:"開啟操作筆記", href:"AI神隊友_教師操作筆記.docx"},
      notes: "先請 AI 產生架構，講師示範如何在 Canvas 內直接修改，而不是一次接受完整成品。"
    },
    {
      type: "cards", label: "VIBE CODING", title: "用自然語言製作互動網頁",
      cards: [
        {icon:"🎯", title:"定義學習任務", text:"學生完成後要理解或練習什麼。"},
        {icon:"🧪", title:"先做最小版本", text:"一種題型、清楚回饋、可操作按鈕。"},
        {icon:"📱", title:"預覽與測試", text:"檢查平板、手機與投影畫面。"},
        {icon:"🛠️", title:"反覆修正", text:"描述具體問題，再定點修改。"}
      ],
      mode: "示範／教師跟做", action: {label:"開啟操作筆記", href:"AI神隊友_教師操作筆記.docx"},
      notes: "現場不教程式語法。教師只需能清楚描述使用者、任務、畫面與回饋。"
    },
    {
      type: "image", title: "用 Vibe Coding 創造互動網頁遊戲",
      image: "assets/user-10-vibe-coding.png", imageAlt: "以 Vibe Coding 製作 SEL 互動網頁遊戲的示意圖",
      notes: "接續 Vibe Coding 的操作說明，展示互動網頁遊戲可如何連結教學任務。"
    },
    {
      type: "compare", label: "DEMO CASE", title: "兩個可快速展示的互動案例",
      cards: [
        {icon:"🎮", title:"SEL 情境選擇遊戲", text:"情境、三個選項、即時回饋與原因。"},
        {icon:"📷", title:"拍立得照片網頁", text:"照片、標題、說明、放大與手機版面。"}
      ],
      note: "若當日不安排操作，這頁可直接播放示範並說明測試重點。",
      notes: "依現場時間二選一，不必兩個都做。完成後檢查按鈕、內容、回饋與分享權限。"
    },
    {
      type: "image", title: "完成教材後的分享方式",
      image: "assets/user-11-share-learning.png", imageAlt: "Gemini Canvas 分享連結與教學平台分享示意圖",
      notes: "提醒使用個人帳號的分享功能，並在分享前再次確認內容與權限。"
    },
    {
      type: "flow", label: "GEMINI WORKFLOW", title: "從研究到課堂應用的完整路徑",
      steps: [
        {title:"Deep Research", text:"蒐集並查核來源。"},
        {title:"Canvas", text:"整理教材與活動。"},
        {title:"Vibe Coding", text:"轉成互動網頁。"},
        {title:"測試", text:"修正內容與操作。"},
        {title:"課堂應用", text:"由教師決定如何使用。"}
      ],
      notes: "請學員說出每一步誰負責判斷。答案始終包含教師。"
    },
    {
      type: "chapter", label: "CHAPTER 03", title: "Gemini Notebook", subtitle: "來源導向的備課、評量與多模態學習",
      image: "assets/user-12-notebook-workflow.png", imageAlt: "Gemini Notebook 將 PDF 來源轉成心智圖、測驗、學習卡、簡報與資訊圖表",
      notes: "首次口頭說明這是本次統一名稱，原 NotebookLM，後續只使用 Gemini Notebook。"
    },
    {
      type: "quote", label: "MY STORY", title: "我原本以為，它只是讀論文的工具",
      quote: "直到我把教學指引放進去，才看見它可以支援備課、評量與不同學習入口。",
      notes: "用講師自身經驗帶入：工具價值不是功能清單，而是資料放進真實任務後產生的連結。"
    },
    {
      type: "flow", label: "SOURCE-GROUNDED NOTEBOOK", title: "先建立來源，再與資料對話",
      steps: [
        {title:"建立筆記本", text:"依課程或主題分開管理。"},
        {title:"上傳來源", text:"教學指引、PDF 或參考教材。"},
        {title:"提出問題", text:"請 AI 根據來源整理。"},
        {title:"查閱引用", text:"點回原文確認依據。"}
      ],
      mode: "示範／教師跟做", action: {label:"開啟操作筆記", href:"AI神隊友_教師操作筆記.docx"},
      notes: "示範引用位置。若來源掃描品質差，也要提醒先檢查文字是否辨識完整。"
    },
    {
      type: "compare", label: "PLANNING AND ASSESSMENT", title: "同一份教學指引，發展教案與評量",
      cards: [
        {icon:"📚", title:"備課", text:"課程架構、教案、學習單與教學提問。"},
        {icon:"🧾", title:"評量", text:"測驗、答案、解析與對應學習重點。"},
        {icon:"🔎", title:"教師核對", text:"來源、難度、題意與答案正確性。"}
      ],
      mode: "示範／教師跟做", action: {label:"開啟操作筆記", href:"AI神隊友_教師操作筆記.docx"},
      notes: "AI 生成題目後，教師仍要確認評量目標、干擾選項與答案是否成立。"
    },
    {
      type: "cards", label: "MULTIMODAL LEARNING", title: "同一份資料，可以有多種學習入口",
      cards: [
        {icon:"📖", title:"閱讀", text:"報告、摘要與簡報。"},
        {icon:"🎧", title:"聆聽", text:"語音摘要。"},
        {icon:"🎬", title:"觀看", text:"影片摘要與資訊圖表。"},
        {icon:"🧠", title:"整理", text:"心智圖與學習卡。"},
        {icon:"🃏", title:"練習", text:"閃卡與提取練習。"},
        {icon:"✅", title:"測驗", text:"題目、答案與解析。"}
      ],
      notes: "多模態不等於越多越好。請依學習目標與學生需要選擇合適形式。"
    },
    {
      type: "chapter", label: "CHAPTER 04", title: "AI 倫理與教育現場", subtitle: "讓專業判斷走在工具前面",
      image: "assets/user-14-ai-ethics.png", imageAlt: "教師使用 AI 的三條底線：不取代學生學習、不隱瞞 AI 使用、保留專業判斷",
      notes: "倫理不是最後的警告頁，而是前三個工具每一步都要帶著的判斷。"
    },
    {
      type: "compare", label: "TEACHER AND STUDENT", title: "教師與學生，需要不同的使用邊界",
      cards: [
        {icon:"🧑‍🏫", title:"教師使用 AI", text:"運用專業知識與後設認知，負責查核、選擇與修訂。"},
        {icon:"🧒", title:"學生使用 AI", text:"依年齡、學習目的與管理需求，提供適當引導與把關。"}
      ],
      notes: "不要用同一套規則處理所有年齡與任務。學生是否使用 AI，取決於學習目的。"
    },
    {
      type: "cards", label: "BOUNDARIES", title: "教育平台與 AI 工具都需要教師引導",
      cards: [
        {icon:"🏫", title:"教育情境", text:"各類教育平台與 Edcafe AI 可作為教學案例。"},
        {icon:"🔐", title:"保護個資", text:"只提供完成任務所需的最少資料。"},
        {icon:"🧭", title:"辨識生成內容", text:"標示 AI 參與，回查來源與事實。"},
        {icon:"🧠", title:"不代替思考", text:"讓 AI 支援學習，不直接完成學生任務。"}
      ],
      note: "任何平台都不宣稱完全無風險；也要提醒 Deepfake 與假內容的辨識。",
      notes: "這裡只把教育平台當作情境例子，不進行平台操作教學。"
    },
    {
      type: "partners", label: "THREE AI PARTNERS", title: "三個工具，在工作流中各有位置",
      brands: [],
      partners: [
        {brand:"chatgpt", title:"你的隨身助理", lines:["語音對話", "專案、生圖", "了解你的小幫手"]},
        {brand:"gemini", title:"你的課程設計師", lines:["深度研究", "多元 CANVAS", "創意教材任你玩"]},
        {brand:"notebook", title:"你的知識精煉師", lines:["學習深化", "資訊圖表與簡報製作", "打造高效工作流"]}
      ],
      notes: "工具名稱可能演進，但工作流中的角色可以保留。請學員回想自己要帶走哪一條流程。"
    },
    {
      type: "closing", label: "YOUR NEXT MOVE", title: "帶走一條真正會再用的工作流",
      subtitle: "選一項重複工作，留下規則、來源與驗證步驟。下次，不必從零開始。",
      actions: [
        {label:"開啟操作筆記", href:"AI神隊友_教師操作筆記.docx"}
      ],
      notes: "最後請學員寫下自己下一次會使用的任務、資料來源與檢查方式。"
    }
  ]
};
