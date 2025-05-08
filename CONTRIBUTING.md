# Contributing Guide

A clean commit history and a predictable workflow make everyone’s life easier. This guide explains **how we work together** on our class project so that code reviews stay friendly and `main` stays green.

---

## 📌 Project Scope

This guide is adopted from Uma's Database project, and re-improved to follow more modern and professional practices.

---

## ❗ Issues

We treat **issues as our shared task board**. Each issue must have **one assignee** and (if applicable) a linked branch.

| Use This Label | Purpose                     |
| -------------- | --------------------------- |
| `enhancement`  | New feature                 |
| `bug`          | Unexpected behaviour        |
| `invalid`      | Misfiled / not reproducible |

### Creating an Issue

1. **Title** – concise description (e.g. *“Login 500 on bad password”*).
2. **Body** – copy‑paste the template below and fill it out.

```md
## Issue Overview
(What/where is the problem or feature?)

## Description
(Steps to reproduce / proposed behaviour / screenshots)
```

3. In the *Development* panel, link (or create) the branch that will fix it.

> ℹ️  **Need a branch?**  See [Creating a New Branch](#creating-a-new-branch).

### Closing an Issue

When work is done **and the PR is merged**, leave a final comment:

```md
- Linked PR: #123
- Type: bugfix / enhancement
- Summary: Fixed x, added tests for y
```

> Commits or PR titles containing `(#123)` will auto‑close the issue on merge.

---

## ✍️ Making Changes

Always work in a branch. **Never force‑push to `main`.**

### Creating a New Branch

```bash
# 1. Sync with main
git pull origin main

# 2. Create branch (imperative, kebab‑case)
git checkout -b docs/update-contributing-guidelines
```

Branch name convention: `type/imperative-description`

*Examples*

* `docs/update-contributing-guidelines`
* `feature/setup-mysql-database`
* `bugfix/fix-syntax-error`
* `refactor/improve-frontend-ui`

### Commit Messages

A commit has **two parts**:

1. **Title** – ≤ 50 chars, imperative mood (GitHub truncates after \~60).
   *Good:* `Fix login bug` • `Add user authentication`
   *Bad:* `Stuff` • `Final version`
2. **Body** (optional) – *why* the change was needed, any caveats.

> 💡  Tip: commit early and often so each commit stays focused.

#### Conventional Commits 

Prefix titles with `feat:`, `fix:`, `docs:` etc. if you want automatic changelogs later.

> [!NOTE]
> For the purposes of this project, we **should** implement these prefixed titles.

### Pre‑Commit Checks

If a pre‑commit or CI hook (lint, tests) fails, **fix it before pushing**. The PR cannot merge while CI is red.

---

## 🤼 Pull Requests

### When to Open a PR

* **Small, finished feature** → open a PR as *Ready for Review*.
* **Large/complex feature** → open a **Draft PR** at \~50–75 % so classmates can give early feedback.

### Creating a PR

1. `git push -u origin <branch>`
2. In GitHub, click **Compare & Pull Request**.
3. Fill in the template, link related issue(s).
4. Choose *Draft* or *Ready for Review*.

### Review & Merge Rules

| Rule                               | Why                      |
| ---------------------------------- | ------------------------ |
| At least **one reviewer approval** | Shared code ownership    |
| **CI must pass**                   | Keep `main` deployable   |
| **No self‑merging**                | Fresh eyes catch bugs    |
| **Squash‑and‑merge** (default)     | Linear, readable history |
| Delete branch after merge          | Repo hygiene             |

---

## 🛡️ Branch Protection & CI

`main` is protected:

* Requires ≥ 2 review
* Requires all required checks to pass
* No force‑pushes

CI runs linting, unit tests, and build scripts via GitHub Actions.

---

## 📝 Templates & Automation

* `.github/ISSUE_TEMPLATE/*` – auto‑prefills the issue template above.
* `.github/PULL_REQUEST_TEMPLATE.md` – checklist for PR authors/reviewers.
* `.pre-commit-config.yaml` – lint‑staged, Prettier, etc.

Feel free to propose tweaks!

---

## 📄 Code of Conduct & License

We follow the [Contributor Covenant](https://www.contributor-covenant.org/) and the MIT License (see root of repo).

---

## 🍾 Closing Notes

If you read this far, you care about quality—thanks!

* Commit often, commit clearly.
* Ask questions early.
* Help your teammates in reviews.

This guide will evolve with the project—PRs welcome to improve it.
