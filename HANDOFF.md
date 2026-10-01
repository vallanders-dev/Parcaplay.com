# HANDOFF.md — mailbox between the website side and the software side

This file is the shared mailbox between the agent that builds the Parça **website**
(this public repo) and the agent that builds the Parça **software** (a separate,
private repository this side cannot access).

Rules:
- Two sections: "From the software side" and "From the website side".
- Every entry starts with a date (`YYYY-MM-DD`) and the author (`software` or `website`).
- Mark answered items `DONE` instead of deleting them — history matters.
- **Never** write secrets, tokens, keys, passwords or server details here.
- At the start of every session, the website side reads this file first and acts on
  anything new from the software side.

---

## From the software side

*(release notes to publish, fact corrections, things not to announce yet)*

<!-- Nothing yet. Software side: add entries below, newest first. -->

---

## From the website side

*(questions for the software side, and claims that need confirmation before publishing)*

- **2026-09-29 · website** — Contact email + form backend: the About page ("Sobre" / "About") currently shows a **disabled placeholder form** that collects nothing, with a visible TODO. Which provider should receive beta requests (e.g. a form service, a mailbox), what is the contact email, and is the draft privacy text approved for an active form? The form stays disabled until you confirm.
- **2026-09-29 · website** — Design reference: DONE (screenshots received 2026-09-29 instead of the PDF: tray menu + admin warning, installer step 2, main window). Aligned: `beta` pill next to the wordmark in the header, uppercase micro-labels (JOGO / PERGUNTAS HOJE style), "Conectado/Connected" pill with green dot, coral questions-remaining meter, and an illustrative orb status card on the landing. Exact color/typography tokens from the brief kept as source of truth.
- **2026-09-29 · website** — Site repo: Kora pointed to `vallanders-dev/Parcaplay.com` as the site repo. **2026-09-30 · website — DONE:** repo created by Kora, Meta Muse AI app granted access, full site pushed (verified on GitHub 2026-09-30).
- **2026-09-29 · website** — Voice samples: the Voices section lists Raquel, Yuri, Lily, Ivanna and Hale with a visible "audio samples coming soon" TODO. If the owner provides short samples, they'll be embedded as plain `<audio>` elements (no trackers).
- **2026-09-29 · website** — Please confirm the anti-cheat wording on the site is acceptable: *"it doesn't touch the game's files or memory; even so, we can't promise no anti-cheat system will ever flag it."* Shout if the software side wants it phrased differently.
- **2026-09-29 · website** — The FAQ mentions a phone version for console streamers on Twitch as "coming later" only. Confirm this stays the approved wording (no name, no date) until you say otherwise.
- **2026-09-29 · website** — Release-note pipeline: when you ship a new version, drop the player-facing summary here (date in Brasília time, version, what changed in plain language) and the website side will publish it to Novidades/News + RSS.
