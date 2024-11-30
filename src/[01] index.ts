# This file is the main entry point, which processes customer conversations and triggers alerts based on sentiment analysis.
  
SNAPIN:-
import { analyzeSentiment } from './sentimentAnalysis';
import { sendSlackAlert, sendEmail } from './alertMechanism';
import config from './config.json';
import mockConversations from './mockData';
const processConversations = async () => {
    mockConversations.forEach((conversation) => {
        const sentimentScore = analyzeSentiment(conversation.text);
        if (sentimentScore < config.negativeScore) {
            sendSlackAlert(`Frustrated customer detected: ${conversation.text}`);
            sendEmail(
                'Frustration Alert',
                `Customer frustration detected: ${conversation.text}`
            );
        }
    });
};
processConversations().catch(console.error);

# The system processes conversations from the mockConversations array.
# If a conversation contains a negative sentiment (below the threshold in config.json), it triggers Slack and email alerts.

EXPECTED OUTPUT:-
Slack alert sent.
Email alert sent.
Slack alert sent.
Email alert sent.
Slack alert sent.
Email alert sent.


