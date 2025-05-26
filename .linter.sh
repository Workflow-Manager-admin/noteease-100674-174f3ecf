#!/bin/bash
cd /home/kavia/workspace/code-generation/noteease-100674-174f3ecf/noteease_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

