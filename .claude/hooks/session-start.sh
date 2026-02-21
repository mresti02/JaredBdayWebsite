#!/bin/bash
set -euo pipefail

# Only run in Claude Code remote environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Setting up JaredBdayWebsite environment..."

cd "${CLAUDE_PROJECT_DIR:-.}"

# Install npm dependencies (no-op if no deps, future-proof)
if [ -f "package.json" ]; then
  npm install
fi

echo "Environment setup complete."
