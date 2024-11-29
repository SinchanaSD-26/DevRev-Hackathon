# Mock data to simulate customer conversations.
#SNAPIN :-
  
const mockConversations = [
    { id: 1, text: 'This service is terrible!' },
    { id: 2, text: 'I am very unhappy with this product.' },
    { id: 3, text: 'I love this!' },
];
export default mockConversations;



#Expected Output:-
This mock data is processed by index.ts to simulate real conversations.
For example, the first and second conversations will trigger alerts since their sentiment scores will be negative.
