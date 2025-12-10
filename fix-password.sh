#!/bin/bash
if [ "$GIT_COMMIT" = "1b29150f0e3f255340d130080f0c94e7d632f537" ]; then
    # Replace the problematic content
    sed -i '' 's/POSTGRES_PASSWORD: ***REMOVED***/POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}/g' docker-compose.yml
fi