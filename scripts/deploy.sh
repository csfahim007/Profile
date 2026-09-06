#!/usr/bin/env bash

set -euo pipefail

APP_DIR="/home/administrator/projects/portfolio/fahim-portfolio"
PORT="5176"
LOG_FILE="/tmp/portfolio-preview.log"

cd "$APP_DIR"

echo "===== PORTFOLIO DEPLOYMENT ====="
echo "APP_DIR: $APP_DIR"
echo "PORT: $PORT"

if [ ! -d "$APP_DIR/dist" ]; then
    echo "ERROR: dist directory does not exist."
    exit 1
fi

if [ ! -f "$APP_DIR/dist/index.html" ]; then
    echo "ERROR: dist/index.html does not exist."
    exit 1
fi

echo
echo "===== STOP EXISTING PORTFOLIO ====="

pkill -f "vite preview --host 127.0.0.1 --port $PORT" || true

sleep 2

echo
echo "===== START PORTFOLIO ====="

nohup npm run preview -- \
    --host 127.0.0.1 \
    --port "$PORT" \
    > "$LOG_FILE" 2>&1 < /dev/null &

sleep 3

echo
echo "===== VERIFY PORTFOLIO ====="

if ! curl -fsS -I "http://127.0.0.1:$PORT/" > /dev/null; then
    echo "ERROR: Portfolio failed to start."
    echo
    cat "$LOG_FILE"
    exit 1
fi

echo "Portfolio is running successfully."
echo "URL: http://127.0.0.1:$PORT"

echo
echo "===== DEPLOYMENT COMPLETE ====="

