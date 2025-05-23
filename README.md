# COVID-19 冠狀病毒主蛋白酶的活性中心與抑制劑開發 - 自主學習計畫

這是一個為高中生設計的自主學習計畫網站，專注於COVID-19冠狀病毒主蛋白酶的活性中心與抑制劑開發研究。

## 功能特色

- 暗色模式設計，美觀易用
- 完整的學習計畫內容，包括研究原因、目標、預期收穫
- 五個月分階段學習目標與每週小目標
- 每日任務進度追蹤功能（未開始、實施中、已完成）
- 每日反思記錄功能（限20字以內）
- 進度資料本地儲存與匯出/匯入功能
- 週目標表格視圖
- 心得反思與參考資料頁面
- 完全靜態網頁，可輕鬆部署到GitHub Pages

## 部署到GitHub Pages步驟

1. 在GitHub上創建一個新的儲存庫（Repository）

2. 將所有檔案上傳到儲存庫：
   - index.html
   - styles.css
   - app.js
   - data.js
   - 其他資源檔案（如有）

3. 在儲存庫設定中啟用GitHub Pages：
   - 前往儲存庫的「Settings」頁籤
   - 滾動到「GitHub Pages」部分
   - 在「Source」下拉選單中選擇「main」分支
   - 點擊「Save」按鈕

4. 等待幾分鐘後，您的網站將在以下URL可用：
   `https://[您的GitHub用戶名].github.io/[儲存庫名稱]/`

## 本地開發與測試

如果您想在本地開發和測試網站，可以使用以下方法：

```bash
# 使用Python的內建HTTP伺服器
python -m http.server 8000

# 或使用Node.js的http-server（需先安裝）
npx http-server
```

然後在瀏覽器中訪問 `http://localhost:8000`

## 檔案結構

- `index.html` - 主HTML檔案
- `styles.css` - CSS樣式表
- `app.js` - 主要JavaScript邏輯
- `data.js` - 學習計畫資料

## 資料儲存

所有進度和反思資料都儲存在瀏覽器的localStorage中。您可以使用網站上的「匯出進度資料」和「匯入進度資料」按鈕來備份和還原您的資料。

## 授權

本專案僅供教育目的使用。
