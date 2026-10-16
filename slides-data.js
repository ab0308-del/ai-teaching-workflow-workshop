window.WORKSHOP = {
  meta: {
    title: "AI 神隊友：教師的 AI 工作流實作",
    presenter: "新北市大豐國小　許凱琳老師",
    resources: {
      notes: "https://docs.google.com/document/d/1lUt_1LFjXOBi8iuQgjz9L6E-VibiuOAZLRCsHm7ASP8/edit?tab=t.0",
      padlet: "https://padlet.com/ab0308/ai-chatgpt-gemini-gemini-notebook-w0vh6t48bvt0ysfq",
      slides: "https://docs.google.com/presentation/d/1vlEgHubyDQ7Sx0UmiclsAJLRIHzeCmRR_k_UExT4ZpM/edit"
    }
  },
  slides: [
    {
      type: "cover", tone: "hero", label: "AI TEACHING WORKFLOW",
      title: "AI 神隊友", subtitle: "從真實任務出發，完成一條會再用的教師工作流",
      meta: ["ChatGPT", "Gemini", "Gemini Notebook"],
      actions: [
        {label: "開啟操作筆記", resource: "notes"},
        {label: "進入研習 Padlet", resource: "padlet", secondary: true}
      ],
      notes: "開場先說：今天不比工具功能，而是帶走一套可以重複使用的工作方法。"
    },
    {
      type: "profile", tone: "paper", label: "MEET YOUR INSTRUCTOR", title: "許凱琳老師",
      lead: "從教學現場出發，把 AI 變成能協作、能查核、能落地的神隊友。",
      cards: [
        {icon:"🏆", title:"教學實踐", text:"115 年特殊優良教師、112 年 Super 教師獎、數位學習推動優良案例。"},
        {icon:"🎓", title:"專業推動", text:"教育部 A1、B3、B5-1 合格講師，Gemini 認證講師、Apple Professional Learning Specialist。"}
      ],
      notes: "簡短建立講師背景，重點放在真實教學實踐，不需逐條念完經歷。"
    },
    {
      type: "map", tone: "paper", label: "TODAY'S MAP", title: "六段任務，串成一條工作流",
      cards: [
        {icon:"01", title:"選任務", text:"先找出一項重複、耗時又值得改善的工作。"},
        {icon:"02", title:"學方法", text:"交代、給資料、反向提問、分步完成。"},
        {icon:"03", title:"ChatGPT", text:"把想法、專案與圖像素材整理成可用成果。"},
        {icon:"04", title:"Gemini", text:"從研究資料走到教材與互動網頁。"},
        {icon:"05", title:"Gemini Notebook", text:"用指定來源完成備課、評量與多模態轉化。"},
        {icon:"06", title:"整合帶走", text:"留下來源、規則與驗證步驟，下次不必重來。"}
      ],
      notes: "這份簡報可依現場時間從目錄自由跳轉，但每一段都回到同一條工作流。"
    },
    {
      type: "cards", tone: "action", label: "YOUR MISSION", title: "先選一項你真的想改善的工作",
      cards: [
        {icon:"🎙️", title:"整理想法", text:"把口述內容變成紀錄、重點與待辦。"},
        {icon:"🧑‍🏫", title:"班級經營", text:"整理評語、情境圖卡與溝通語句。"},
        {icon:"🔎", title:"研究備課", text:"查找資料、保留來源，再發展教材。"},
        {icon:"🧩", title:"互動教材", text:"把教學目標轉成可操作的網頁活動。"}
      ],
      note: "寫下一項任務；後面的示範，都可以套回你的真實工作。",
      notes: "請學員先選一項，避免後面只是在看工具秀。"
    },
    {
      type: "flow", tone: "paper", label: "HOW AI HELPS", title: "AI 產出是初稿，教師才是完成者",
      steps: [
        {title:"說清楚", text:"描述情境、對象與想解決的問題。"},
        {title:"提供依據", text:"加入教材、範例、檔案與限制。"},
        {title:"共同修正", text:"要求提問、比較版本、指出問題。"},
        {title:"教師查核", text:"確認事實、語氣、適齡性與可用性。"}
      ],
      note: "看起來完整，不代表已經正確；可用成果一定包含教師判斷。",
      notes: "不要把 AI 說成自動答案機，這頁是全場共同基準。"
    },
    {
      type: "cards", tone: "method", label: "AI COMMUNICATION", title: "與 AI 溝通的四個招式",
      cards: [
        {icon:"📌", title:"交代清楚", text:"說明目前狀況、問題，以及希望得到的成果。"},
        {icon:"📚", title:"給教材資料", text:"提供截圖、照片或檔案，讓 AI 有依據。"},
        {icon:"❓", title:"引導與提問", text:"不確定怎麼說時，請 AI 先問問題。"},
        {icon:"🧩", title:"分工與分步", text:"複雜任務先規劃，再逐步完成與確認。"}
      ],
      notes: "可請學員用手勢跟著說一次：交代、給資料、請提問、分步做。"
    },
    {
      type: "formula", tone: "method", label: "PROMPT FORMULA", title: "提示詞不必背，先把四件事說完整",
      parts: [
        {key:"R", title:"角色 Role", text:"用什麼專業視角協助你。"},
        {key:"T", title:"任務 Task", text:"這次要完成什麼成果。"},
        {key:"C", title:"限制 Constraints", text:"來源、對象、語氣與不能做的事。"},
        {key:"O", title:"輸出 Output", text:"希望結果長什麼樣子。"}
      ],
      note: "先有清楚任務，再追求漂亮句子。",
      notes: "邀請學員把自己的真實任務各填入一句。"
    },
    {
      type: "prompt", tone: "method", label: "REVERSE QUESTIONING", title: "不急著生成，先讓 AI 問對問題",
      promptTitle: "班級經營圖卡｜反向提問",
      promptContext: "適合需求還不夠清楚、需要先確認情境與版面時使用。",
      prompt: "請參考我上傳的圖卡，我想為【五年級學生】設計一張【班級情境】圖卡，來輔導班上有行為問題的學生，和我一起完成。先不要生成圖片，請先問我問題，確認使用情境、重點與版面。",
      display: ["先不要生成", "請先問我問題", "確認情境、重點與版面"],
      notes: "這是本次研習的重要方法：先討論、確認，再生成。"
    },
    {
      type: "split", tone: "guard", label: "QUALITY CHECK", title: "交付前，用三個問題守住品質",
      bullets: ["有來源嗎？重要資訊能回到原文嗎？", "符合使用情境、學生年級與教學目的嗎？", "我願意以教師身分為這份內容負責嗎？"],
      visual: {icon:"🧭", title:"教師最後一哩", text:"AI 幫忙加速；選擇、修訂與使用責任仍在教師。"},
      notes: "遇到人名、數字、引用、答案與個資，必須特別停下來確認。"
    },
    {
      type: "chapter", tone: "chatgpt", label: "CHAPTER 01", title: "ChatGPT", subtitle: "把零散想法，變成可延續的工作材料",
      image: "assets/user-05-chatgpt-voice.png", imageAlt: "ChatGPT 語音模式操作畫面",
      notes: "ChatGPT 單元聚焦語音、Projects、評語與圖像任務。"
    },
    {
      type: "flow", tone: "chatgpt", label: "VOICE TO ACTION", title: "先說出來，再把對話變成下一步",
      steps: [
        {title:"說", text:"口述備課想法或工作紀錄。"},
        {title:"整", text:"整理主題、重點與待辦。"},
        {title:"查", text:"確認遺漏、錯誤與待確認問題。"},
        {title:"用", text:"轉成紀錄、貼文或教材初稿。"}
      ],
      promptTitle: "語音對話整理",
      promptContext: "結束語音對話後，請 AI 依固定欄位整理。",
      prompt: "請將剛才的對話整理成主題、重點、待辦事項及待確認問題。請勿自行補充未提到的事實，使用繁體中文。",
      notes: "示範時先自然說一段，再打開完整提示詞複製。"
    },
    {
      type: "split", tone: "chatgpt", label: "PROJECTS", title: "把同一項工作留在同一個專案",
      bullets: ["集中相關對話、檔案與專案指令。", "讓每次新對話沿用相同角色與規則。", "適合長期備課、評語整理與行政任務。", "先做一個最常用的專案，再逐步擴充。"],
      image: "assets/user-06-project-folders.png", imageAlt: "ChatGPT Projects 專案清單",
      notes: "Projects 的價值不是對話變長，而是規則與素材可以延續。"
    },
    {
      type: "prompt", tone: "chatgpt", label: "PROJECT PRACTICE", title: "把期末評語做成可重複使用的幫手",
      promptTitle: "評語幫手｜專案指令",
      promptContext: "建立名為「評語幫手」的專案，將這段文字放入專案指令。",
      prompt: "你是一位擁有數十年經驗的國小導師，我會根據正向與溫暖的原則，並參考您提供的風格和字數限制，撰寫一份約 120 字、絕不超過 150 字的期末評語與具體建議，採用臺灣繁體中文，並力求用字精確。",
      display: ["角色：國小導師", "原則：正向、溫暖", "限制：120 字左右，不超過 150 字", "輸出：期末評語＋具體建議"],
      notes: "提醒學員測試時使用去識別的虛擬資料，不貼學生敏感資訊。"
    },
    {
      type: "case", tone: "chatgpt", label: "IMAGE CO-DESIGN", title: "班級經營圖卡：先談使用，再談畫面",
      cards: [
        {icon:"1", title:"說情境", text:"年級、行為、發生時機與影響。"},
        {icon:"2", title:"定界線", text:"要傳達的核心句與不可出現的標籤。"},
        {icon:"3", title:"選版面", text:"人物、情境、色彩、字量與尺寸。"},
        {icon:"4", title:"再生成", text:"確認繁體中文、適齡性與可讀性。"}
      ],
      promptTitle: "班級經營圖卡｜反向提問",
      promptContext: "讓 AI 先協助釐清，不立即生圖。",
      prompt: "請參考我上傳的圖卡，我想為【五年級學生】設計一張【班級情境】圖卡，來輔導班上有行為問題的學生，和我一起完成。先不要生成圖片，請先問我問題，確認使用情境、重點與版面。",
      notes: "可搭配 Padlet 中的最新圖卡作品，說明從討論到成品的過程。"
    },
    {
      type: "cards", tone: "chatgpt", label: "TEACHING VISUALS", title: "圖像生成要服務理解，不只是好看",
      cards: [
        {icon:"🧠", title:"心智圖", text:"呈現概念階層，保留部分節點讓學生填寫。"},
        {icon:"💬", title:"四格漫畫", text:"用人物、情境與短對話理解事件順序。"},
        {icon:"✏️", title:"學習單", text:"用黑白線稿、概念提示與作答空間支持學習。"},
        {icon:"🔍", title:"教師檢查", text:"文字、知識、適齡性、版權與實際用途。"}
      ],
      notes: "現場依時間選一種示範即可，不必三種都做。"
    },
    {
      type: "task", tone: "action", label: "CHATGPT MISSION", title: "完成一個 ChatGPT 小任務",
      steps: [
        {title:"選一項", text:"語音整理、評語幫手或班級圖卡。"},
        {title:"先確認", text:"用四招補齊情境、資料與限制。"},
        {title:"做一版", text:"取得初稿後，至少修正一次。"},
        {title:"分享", text:"把成果或心得放到研習 Padlet。"}
      ],
      actions: [{label:"開啟操作筆記", resource:"notes"},{label:"前往 Padlet", resource:"padlet", secondary:true}],
      notes: "給學員操作時間；完成不是貼出第一版，而是至少有一次教師修正。"
    },
    {
      type: "bridge", tone: "method", label: "HANDOFF", title: "把成果交給下一棒前，先整理成可追溯的材料",
      cards: [
        {icon:"🧹", title:"刪除雜訊", text:"移除不相關、重複或無法確認的內容。"},
        {icon:"🔗", title:"留下來源", text:"保留原始連結與可以回查的段落。"},
        {icon:"🏷️", title:"標記狀態", text:"區分來源事實、AI 建議與教師決定。"}
      ],
      note: "好的工作流不是一直生成，而是讓下一步拿到乾淨、可檢查的材料。",
      notes: "用這頁從 ChatGPT 過渡到 Gemini 的研究與教材製作。"
    },
    {
      type: "chapter", tone: "gemini", label: "CHAPTER 02", title: "Google Gemini", subtitle: "從研究問題，走到教材與互動網頁",
      image: "assets/user-07-gemini-query.png", imageAlt: "向 Gemini 詢問六年級 SEL 教材的畫面",
      notes: "Gemini 單元以六年級 SEL 為共同案例，串起研究、Canvas 與 Vibe Coding。"
    },
    {
      type: "screenshot", tone: "gemini", label: "DEEP RESEARCH", title: "先定研究問題，再閱讀來源",
      image: "assets/user-08-gemini-deep-research.png", imageAlt: "Gemini Deep Research 操作畫面",
      steps: [
        {title:"設定", text:"說明年級、主題、用途與範圍。"},
        {title:"檢視", text:"先看研究計畫是否偏題。"},
        {title:"回查", text:"點回來源核對重要內容。"},
        {title:"整理", text:"區分資料與教學建議。"}
      ],
      promptTitle: "Deep Research｜SEL 主題研究",
      promptContext: "示範研究型任務時使用。",
      prompt: "我想帶國小六年級學生進行 SEL 社會情緒學習，請研究適合的教學教材、五個核心向度及可用的活動範例，整理來源連結與教學建議。",
      notes: "不要只展示長報告，務必示範研究計畫與來源回查。"
    },
    {
      type: "flow", tone: "gemini", label: "RESEARCH HANDOFF", title: "研究成果要能交給教材設計使用",
      steps: [
        {title:"篩選", text:"刪除不相關與無法確認內容。"},
        {title:"查核", text:"保留可回到原始來源的資訊。"},
        {title:"匯出", text:"整理為 Google 文件或 PDF。"},
        {title:"交接", text:"把乾淨材料送進 Canvas。"}
      ],
      note: "研究不是終點；交接品質會直接影響下一步。",
      notes: "請學員說出每一步誰負責判斷，答案都包含教師。"
    },
    {
      type: "split", tone: "gemini", label: "GEMINI CANVAS", title: "把研究資料變成可持續修改的教材",
      bullets: ["先產生課程架構，再逐段修正。", "依五個 SEL 向度安排目標、情境、提問與活動。", "調整年級用語、閱讀量與任務難度。", "保留來源內容與設計建議的差異。"],
      image: "assets/user-09-gemini-canvas.png", imageAlt: "Gemini Canvas 教材設計畫面",
      promptTitle: "Canvas｜五堂 SEL 教材",
      promptContext: "將已查核的 PDF 或研究資料放入 Canvas 後使用。",
      prompt: "請使用這一份 PDF 檔，協助我設計給學生使用的五堂課教材。這五堂課分別對應 SEL 社會情緒學習的五個向度。我想製作上課簡報，請協助我列出簡報大綱及內容。",
      notes: "先產生架構，再在 Canvas 裡直接修正，不一次接受完整成品。"
    },
    {
      type: "cards", tone: "gemini", label: "VIBE CODING", title: "用自然語言製作互動網頁",
      cards: [
        {icon:"🎯", title:"定義學習任務", text:"學生完成後要理解或練習什麼？"},
        {icon:"🧪", title:"先做最小版本", text:"一種題型、明確按鈕與清楚回饋。"},
        {icon:"📱", title:"預覽與測試", text:"檢查手機、平板、投影與操作流程。"},
        {icon:"🛠️", title:"定點修正", text:"描述具體問題，再要求局部修改。"}
      ],
      promptTitle: "Vibe Coding｜SEL 互動情境遊戲",
      promptContext: "以學習目標開始，不先談程式語法。",
      prompt: "請製作適合國小六年級的 SEL 互動情境遊戲。每題呈現一個生活情境及三個選項，作答後顯示回饋與原因。使用繁體中文，畫面活潑，適合平板操作。",
      notes: "教師不必先學程式碼；先能說清楚使用者、任務、畫面與回饋。"
    },
    {
      type: "imageFeature", tone: "gemini", label: "DEMO CASE", title: "先做小而完整，再逐步加功能",
      image: "assets/user-10-vibe-coding.png", imageAlt: "用 Vibe Coding 製作 SEL 互動遊戲的示意圖",
      caption: "一個可操作的情境、一組選項、一段有理由的回饋，就能形成第一版。",
      notes: "說明最小可行版本的概念，再展示如何根據測試結果加功能。"
    },
    {
      type: "task", tone: "action", label: "GEMINI MISSION", title: "從一份研究資料，完成一個可測試成果",
      steps: [
        {title:"研究", text:"定義問題並回查至少一個來源。"},
        {title:"整理", text:"保留來源，刪除不確定內容。"},
        {title:"製作", text:"用 Canvas 或 Vibe Coding 做第一版。"},
        {title:"測試", text:"記錄一個問題與一次修改。"}
      ],
      actions: [{label:"開啟操作筆記", resource:"notes"},{label:"分享至 Padlet", resource:"padlet", secondary:true}],
      notes: "若時間有限，可用講師案例做共同測試，不要求每人都完成網頁。"
    },
    {
      type: "chapter", tone: "notebook", label: "CHAPTER 03", title: "Gemini Notebook", subtitle: "用指定來源完成備課、評量與多模態轉化",
      image: "assets/user-12-notebook-workflow.png", imageAlt: "Gemini Notebook 多模態教材工作流",
      notes: "首次口頭說明這是本次統一名稱，操作介面可能仍顯示 NotebookLM。"
    },
    {
      type: "flow", tone: "notebook", label: "SOURCE-GROUNDED", title: "先建立來源，再與資料對話",
      steps: [
        {title:"建筆記本", text:"依課程或主題分開管理。"},
        {title:"上傳來源", text:"加入教學指引、PDF 或教材。"},
        {title:"提出問題", text:"要求只根據來源整理。"},
        {title:"查閱引用", text:"點回原文確認依據。"}
      ],
      promptTitle: "Gemini Notebook｜來源整理",
      promptContext: "來源上傳完成後，先用這個問題確認內容範圍。",
      prompt: "請根據這份教學指引，整理六年級 SEL 五個向度的學習目標、重點概念與教學活動，並標示依據來源。",
      notes: "示範引用位置；來源若是掃描檔，也要先確認文字辨識是否完整。"
    },
    {
      type: "dualPrompt", tone: "notebook", label: "PLANNING & ASSESSMENT", title: "同一份教學指引，發展教案與評量",
      prompts: [
        {icon:"📚", title:"教案", text:"五堂課：目標、流程、討論題與評量方式。", prompt:"請根據這份教學指引，規劃五堂國小六年級 SEL 課程，每堂列出學習目標、教學流程、討論題與評量方式。"},
        {icon:"🧾", title:"出題", text:"十題測驗：答案、解析與對應學習重點。", prompt:"請根據來源設計 10 題測驗，包含選擇題及情境題，附答案、解析與對應學習重點。"}
      ],
      note: "題目生成後，教師仍要確認目標、難度、題意與答案。",
      notes: "可二選一示範；重點是所有內容都能回到指定來源。"
    },
    {
      type: "cards", tone: "notebook", label: "MULTIMODAL LEARNING", title: "同一份資料，可以有不同學習入口",
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
      type: "imageFeature", tone: "notebook", label: "CREATE & REFINE", title: "簡報與資訊圖表：來源先行，輸出再優化",
      image: "assets/user-12-notebook-workflow.png", imageAlt: "Gemini Notebook 將來源轉成多種教材",
      caption: "上傳來源 → 建立筆記 → 設定內容與視覺 → 匯出 → 後期優化",
      promptTitle: "資訊圖表｜流程呈現",
      promptContext: "需要把來源內容整理成視覺流程時使用。",
      prompt: "請根據來源，整理文章的流程與關係，製作清楚的資訊圖表，附上必要說明，使用臺灣繁體中文。",
      notes: "提醒學員：匯出後仍要檢查文字、版面與來源是否一致。"
    },
    {
      type: "partners", tone: "integrate", label: "THREE AI PARTNERS", title: "三個工具，在工作流中各有位置",
      partners: [
        {brand:"chatgpt", title:"整理與共創", lines:["語音與對話", "專案規則", "圖像素材"]},
        {brand:"gemini", title:"研究與製作", lines:["Deep Research", "Canvas", "互動網頁"]},
        {brand:"notebook", title:"來源與轉化", lines:["指定資料", "教案評量", "多模態輸出"]}
      ],
      note: "工具會更新；可以長久留下的是任務、來源、規則與驗證方法。",
      notes: "請學員把自己的任務放到三個角色中，思考它適合在哪一步完成。"
    },
    {
      type: "split", tone: "guard", label: "AI ETHICS", title: "每一步，都帶著教師的三條底線",
      bullets: ["不把學生學習直接交給 AI 代做。", "不提供不必要的個資與敏感資訊。", "不隱瞞 AI 參與，重要內容回查來源。", "不讓工具取代專業判斷與師生關係。"],
      image: "assets/user-14-ai-ethics.png", imageAlt: "教師使用 AI 的三條底線",
      notes: "倫理不是最後的警告，而是前面每個操作都要帶著的條件。"
    },
    {
      type: "closing", tone: "hero", label: "YOUR NEXT MOVE", title: "帶走一條真正會再用的工作流",
      subtitle: "選一項重複工作，留下來源、規則與驗證步驟。下次，不必從零開始。",
      checklist: ["我選好真實任務", "我會要求 AI 先提問", "我保留來源與版本", "我完成至少一次教師修正"],
      actions: [
        {label:"開啟操作筆記", resource:"notes"},
        {label:"前往 Padlet 分享", resource:"padlet", secondary:true}
      ],
      notes: "最後請學員完成實作檢核，並在 Padlet 留下一項成果或下一步。"
    }
  ]
};
