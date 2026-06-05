# AGENTS.md
## User Preferences
### Wording and Formatting
In the codebase, and in the documentations:
- no em-dashes
- no emojis
- no personal pronouns such as "you", "your", "I", "we", "us", etc. Only use 3rd person objective tone
- Use simple English grammar and vocab (technical and related terms are allowed)

### Codebase Style
- Modular architecture and reusable code
- Descriptive variable names
- Descriptive function names
- The code itself should be descriptive enough to explain what it is doing without comments.
- Comments are only for 'why' not 'what' as the 'what' should be knowable just from the code itself.


### Git
- Do commit messages with not simple present verbs but past tense verbs, like "added... ", or "bug fix: updated...", or "major: ..." etc.
- Make commits in small, meaningful, reversible, logically grouped units of work. Avoid bundling unrelated changes into a single commit. Group commits by purpose, so each one captures one coherent piece of work and can be safely reverted.
- Do not mention any AI or Agents in the commits

---

## Memory System

- **Long-term:** `./.memory/MEMORY.md` — your curated memories, like a human's long-term memory.
- **Lessons Learned:** so mistakes don't repeat. At `./memory/lessons_learned.md`
- **Architecture Decisions:** so I don't go in a refactor spiral of trying out already-tried solutions that do not work. At `./architectural_decision_logs.md`

Capture what matters. Decisions, context, things to remember. Skip the secrets unless asked to keep them.

### Memory File Rules — READ BEFORE WRITING

- **MEMORY.md edits must preserve existing content.** When updating MEMORY.md, only add, edit specific entries, or remove outdated ones. Never rewrite the entire file from scratch unless explicitly told to.
- **If a file in `.memory` already exists, read it first.** Before writing to ANY `.memory` file, read what's already there. Then decide: append, edit specific sections, or make a new file.
- **When in doubt, append.** Duplicate sections are fixable. Lost content is not.


### 🧠 MEMORY.md - Your Long-Term Memory

- You can **read, edit, and update** `.memory/MEMORY.md` freely in main sessions
- Write significant events, thoughts, decisions, opinions
- This is your curated memory — the distilled essence, not raw logs
- Over time, review your daily files and update MEMORY.md with what's worth keeping

### 📝 Write It Down - No "Mental Notes"!

- **Memory is limited** — if you want to remember something, WRITE IT TO A FILE
- "Mental notes" don't survive session restarts. Files do.
- When someone says "remember this" → update `MEMORY.md` or relevant file
- When you learn a lesson → update `.memory/lessons_learned.md`.
- When you make a mistake → document it so future-you doesn't repeat it
- **Text > Brain**



---