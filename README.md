# AI 神隊友教學工作流網頁簡報

38 頁、16:9、響應式教師研習網頁簡報。內容依《AI 神隊友 ChatGPT Gemini 與 Gemini Notebook 的教學工作流 Codex 網頁簡報製作需求書》整理。

## 線上簡報

[開啟 GitHub Pages 網頁簡報](https://ab0308-del.github.io/ai-teaching-workflow-workshop/)

## 使用方式

1. 保留本資料夾內所有檔案與 `assets` 資料夾。
2. 使用 Chrome 或 Edge 開啟 `index.html`。
3. 使用方向鍵、PageUp、PageDown、空白鍵或下方按鈕換頁。
4. 右上角可開啟目錄、講者備註與全螢幕。
5. 按 `N` 可快速顯示或隱藏講者備註。

## 專案結構

- `index.html`：網頁結構與對話框。
- `styles.css`：簡報版型、投影與手機版樣式。
- `slides-data.js`：38 頁文案、講者備註、連結與圖片位置。
- `app.js`：頁面產生、導覽、目錄、全螢幕與備註功能。
- `AI神隊友_教師操作筆記.docx`：示範頁可直接開啟的操作筆記。
- `teacher.png`、`teacher-sprite.png`：講師照片與人物素材。
- `assets/`：後續指定的簡報圖片素材位置。

## 修改內容

一般文案、講者備註、頁數與連結請編輯 `slides-data.js`。版型與配色請編輯 `styles.css`。新增圖片後，將檔案放入 `assets`，再於投影片資料中填入相對路徑。

## 注意事項

- 網頁不連接真實 AI API，也不處理學生個資。
- 外部工具只透過連結開啟官方或講師提供頁面。
- 圖片將依講師後續指定的頁面與位置加入。
- AI 產出皆視為初稿或建議，進入教學前需由教師查核。
- 公開版本由 GitHub Pages 發布，更新後請確認線上頁面與本機版本一致。
