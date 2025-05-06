---
title: PTT
tags:
  - tag-summary
  - PTT
---

# 🧃 PTT
這個語場聚焦於 PTT 作為語言戰場、文化載體與社會風向球的多重角色。討論內容可能涉及鄉民語言風格、板主治理、生態圈內的階級互動、甚至 PTT 在台灣輿論場的獨特功能與歷史位置。這不只是網路論壇的觀察筆記，更是台灣社會語用結構的縮影。

```dataview
table
  file.name as "標題",
  created as "建立時間",
  join(map(tags, (t) => "[[" + t + "]]"), ", ") as "語場"
from "conversation"
where contains(tags, "PTT")
sort created desc
```
