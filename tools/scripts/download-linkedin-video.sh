#!/bin/bash

# Download LinkedIn video using yt-dlp
# Usage: ./scripts/download-linkedin-video.sh

LINKEDIN_URL="https://www.linkedin.com/feed/update/urn:li:ugcPost:7387171661868933120"
OUTPUT_DIR="snippets/assets/media/videos"
OUTPUT_FILE="livepeer-founders-post.mp4"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Check if yt-dlp is installed
if ! command -v yt-dlp &> /dev/null; then
    echo "yt-dlp is not installed. Installing via brew..."
    brew install yt-dlp
fi

# Download the video
echo "Downloading LinkedIn video..."
yt-dlp "$LINKEDIN_URL" -o "$OUTPUT_DIR/$OUTPUT_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Video downloaded successfully to: $OUTPUT_DIR/$OUTPUT_FILE"
else
    echo "❌ Failed to download video. Try one of these alternatives:"
    echo "1. Use https://www.linkedin-video-downloader.com/"
    echo "2. Use browser DevTools Network tab"
    echo "3. Use a browser extension like Video DownloadHelper"
fi

