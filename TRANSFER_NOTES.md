# Transfer notes: blureonlabs/blu

## What happened on 13 Nov 2026 (laptop transfer)
The founder moved to a new laptop and cleaned up the old one. For this repo:
- 26 uncommitted local changes were committed and pushed to branch **`wip/transfer-2026-11-13`**. Nothing landed on `main`.
- Old local path: `~/Documents/Projects/blu`.
- The local copy on the old laptop was **deleted** after everything was confirmed on GitHub. It now lives **only on GitHub**.
- Build folders (`node_modules`, `.next`, `target`, `dist`) were never in git. They come back with `npm install`, `cargo build` and the like.

## How to pick this up again
```bash
git clone https://github.com/blureonlabs/blu.git
cd blu
git checkout wip/transfer-2026-11-13   # the branch holding the saved work
# then install dependencies (npm install / pnpm install / cargo build) and add your .env if the project needs one
```

*Note written by Claude (Claude Code) for the founder, 13 Nov 2026. Master index of every repo moved that day: `blureonlabs/blubabyshow` → `docs/REPO_TRANSFER_INDEX.md`.*
