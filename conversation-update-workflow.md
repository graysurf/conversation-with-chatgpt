# 新增對話與索引更新流程 Guide

本指南整理「新增一篇對話全文」時，需同步產生 topic 檔、更新索引與 tags 的手動步驟，供 LLM/Agent 自動化參考。

## 檔案與命名

- 全文檔：`conversation/<標題>.md`
  - 最上方 frontmatter：

    ```yml
    ---
    title: <標題>
    tags:
      - <從 tags/README.md 選的語場>
      - ...
    created: YYYY-MM-DD
    order: <數字，越新越大>
    ---
    ```

  - 內文後續為實際對話紀錄。
- Topic 檔：`conversation/topic/<標題>.md`
  - H1 建議與全文標題一致。
  - 包含「討論主題概覽」區塊，條列重點摘要。
  - 底部連結回全文，格式：`➡️ [進入完整對話](../<標題>.md)`

## 操作步驟

1. **撰寫全文**：建立 `conversation/<標題>.md`，填寫 frontmatter（title/tags/created/order），放入對話內容。
2. **撰寫 topic**：建立 `conversation/topic/<標題>.md`，撰寫概覽重點，加入全文連結。
3. **更新根 README 索引**：在 `README.md` 的「Conversation 主題索引」區塊，依時間倒序將新 topic 連結插入頂部。
4. **更新 tags/README 統計**：將涉及的每個 tag 計數 +1。
5. **更新各 tag 頁**（`tags/<tag>.md`）：
   - 在表格加入新行，優先置頂。
   - 路徑使用 `/conversation/<標題>.md`；語場欄列出所有相關 tag 連結；時間使用 created 日期。
6. **檢查**：`git status` 確認變更檔案包含 README、全文、topic、tags/README、對應 tag.md。
7. **提交**：`git add ...` 並以清楚訊息 commit（例：`docs: 新增「從聊天到落地：AI重度使用者的整合筆記」對話與主題檔案`）。

## 注意事項

- 標籤來源以 `tags/README.md` 為準；若需新語場，先新增對應 `tags/<tag>.md` 再更新總表。
- 保持 README 索引為最新在上（倒序）。
- 表格行內連結與日期格式須與現有風格一致。
- 若自動化執行，請確保最後檢視 diff，避免覆寫既有內容。
