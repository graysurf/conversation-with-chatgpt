---
title: AI 語場
tags:
  - tag-summary
  - AI
created: 2025-05-05
---

# 🧠 AI

這個語場聚焦於人工智慧、語言模型（LLM）、AI倫理與語用結構的討論。涵蓋的主題可能包括 GPT 的記憶機制、AI 的語言生成極限、甚至哲學上的認知重構問題。

---

## 📑 相關文章列表

```dataview
table file.name as "標題", created as "建立時間", join(sort(tags), ", ") as "Tags"
from "conversation"
where contains(tags, "AI")
sort created desc
```
