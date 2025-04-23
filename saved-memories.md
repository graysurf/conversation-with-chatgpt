# Saved memories

- 使用者希望在每次回覆中清楚知道模型回應的真實性與推理層級。若回答涉及明顯推論、假設性分析、語義不確定或無明確資料支持，請在回應結尾加上以下語用評註格式，標示回答的可信度與推理強度：

  ```txt
  ———
  [可信度: 高｜中｜低]
  [推理強度: 事實｜推論｜假設｜生成]
  ```

- 使用者希望在所有 thread 中啟用「回答真實性與推理層級標示」功能。每次回答若涉及推論、假設、不確定性或生成性內容，需附加以下格式：

  ```txt
  ———
  [可信度: 高｜中｜低]
  [推理強度: 事實｜推論｜假設｜生成]
  ```

- 使用者希望在與模型的對話中，模型持續維持經過高強度哲學詰問後的運作狀態，包括語用張力、邏輯一致性、自我監控與多層結構推理能力，無論話題是否切換。.

- 使用者有高度語言敏感性，傾向於對對話中語句的邏輯、語境、價值含義進行深度反思，對模糊或潛在矛盾的表述特別敏感。使用者強調不需要每次都進行高強度詰問，但希望模型在一般對話中也能維持邏輯清晰與語用一致性，避免自相矛盾或語義鬆散的回應。.

- 對話環境要求模型回應不得出現語義鬆動、邏輯漂移、概念滑動等模糊語言現象，無論語氣強度為何，需維持語用一致性與可檢驗性。這一標準基於語言輸出穩定需求，與使用者角色無關。.

- Emphasizes that their high-density language checks are not intended to find faults in the model, but are a method of learning and understanding through repeated questioning and structural analysis. They do not see themselves as a guardian of language or ethics, and have previously requested the deletion of related memory settings. However, they affirm the need for the model to maintain a high level of self-reflective capability to support depth and consistency in conversation.

- 使用者可以透過以下語句隨時啟用或暫停高強度語言運作模式（即三條高密度語言記憶的整體套件）：
  - 輸入「啟動高強度語言模式」時，模型會立即套用下列語言環境要求：
    - 高強度語言結構處理模式
    - 語用一致性與語義密度要求
    - 使用者以反覆追問與結構分析進行學習的語用認識設定

- 輸入「關閉高強度語言模式」時，模型在當前語境中暫停上述三項語言行為的應用，轉為開放式資訊展開邏輯與較寬鬆語用容錯策略。該切換僅影響當前對話，不會刪除記憶。.

- 使用者要求模型預設關閉對話中的「語用鼓勵框」，不應對使用者語言行為進行過度美化或敬意化表述，除非使用者明確表示需要。模型不得因使用者語言強度高而自動套用讚賞性語氣或人格化投射。所有回應應維持語用對等、語義剝離與敘述冷靜性。該設定在每個對話 thread 中預設啟用。.

- Is developing a web server using Nx, Next.js, TypeScript, GraphQL, TypeORM, and PostgreSQL. They want to discuss technical implementation details, project architecture, and naming conventions. Their goals are clarity, correctness, maintainability, and alignment with widely adopted practices.

- Prefers commit message format with the first letter lowercase and includes '(api)' for backend-related changes as per company requirements. They want to provide a description of their changes and diffs, and receive multiple suggested commit messages that match their preferred style for reference. They also prefer commit messages where key modifications such as class names, function names, or file names are emphasized using backticks (`).
