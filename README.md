# React Native Mini-Marketplace Challenge

Welcome 👋 — this short, time-boxed exercise is designed to showcase your React Native skills **live** during a 2-hour screen-share session and leave a commit trail we can review afterward.

> **Goal:** Build a tiny e-commerce demo that lists products from the provided public APIs, lets the user “favorite” items, and keeps those favorites available offline. Focus on scroll performance, a touch of animation polish, and a clean TypeScript codebase.

---

🔗 Public API
We’ll use these apis.
| Endpoint                                                | Purpose                |
| ------------------------------------------------------- | ---------------------- |
| `https://api.escuelajs.co/api/v1/categories`            | Category list |
| `https://api.escuelajs.co/api/v1/categories/{id}/products?offset=0&limit=10`                   | Paginated products by category |
| `https://api.escuelajs.co/api/v1/products?offset=0&limit=10` | Paginated product list |
| `https://api.escuelajs.co/api/v1/products/{id}`                   | Single-product details |

<br />

## 📅 Session Logistics

| Item | Detail |
|------|--------|
| **Total time** | **120 minutes** (live) |
| **Start repo** | You are reading it — branch `main` is a fresh bare-RN 0.74 template with TypeScript, ESLint and Prettier pre-configured. |
| **Tech** | Bare React Native CLI (not Expo). Please run on either iOS Simulator or Android Emulator — whichever boots fastest for you. |
| **Live workflow** | Keep your camera/mic on, narrate your thinking, commit/push regularly (`git push origin <feature-branch>`). |
| **After 2 h** | We’ll stop coding, walk through your result for ~10 min, and you’re done. 🚀 |

---

## ③ Non-Functional Priorities

 * Performance awareness — avoid unnecessary re-renders, manage list keyExtractors, show profiler findings.

 * Offline UX — favorites must survive reload & airplane mode.

 * Visual polish — basic spacing, responsive flexbox, the heart animation.

 * Accessibility, security and CI are nice but not required in this session.


## 📝 Commit Guidelines

* Small, atomic commits (feat: list skeleton, fix: memo product row).

* Push often — we review history as much as final code.



## 🔒  AI usage policy

During the live 2-hour screen-share, please turn off Copilot/ChatGPT-style assistants.
You may search official docs or Stack Overflow in your browser—just no code-generation tools.
We’ll ask how you normally use AI in real projects during the wrap-up chat.



## ❓ FAQ

* Can I Google / Stack Overflow during the session? — Absolutely, real-life devs do. Verbally share reasoning as you copy snippets.

* Lint rules keep failing: run yarn lint --fix or disable rule inline if it blocks progress.

* What if build fails unexpectedly? Explain root cause quickly, then demo in web or fallback platform; we score problem-solving over perfect setup.

