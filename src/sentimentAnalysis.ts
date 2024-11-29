# This module analyzes the sentiment of customer text using the Sentiment library.

SNAP IN:-

import Sentiment from 'sentiment';
export const analyzeSentiment = (text: string): number => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    return result.score;
};



# EXPECTED OUTPUT:
The sentiment score is returned for each conversation. For example, if the input is "This service is terrible!", the score might be -5.

# Example of the function call in index.ts:

const sentimentScore = analyzeSentiment("This service is terrible!");
console.log(sentimentScore); // Output: -5

# Expected Output (Console):
-5
