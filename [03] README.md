# Customer Frustration Alerting System

## Overview
This project identifies customer frustration in real-time and sends alerts to support teams.

## Features
- Sentiment analysis of customer conversations.
- Slack and email alert mechanisms.
- Configurable thresholds for frustration detection.

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   
# Compile the project:
npm run build

# Run the application:
npm start

# Architecture
1. sentimentAnalysis.ts: Analyzes text sentiment.
2. alertMechanism.ts: Sends Slack and email alerts.
3. config.json: Stores alert thresholds.
