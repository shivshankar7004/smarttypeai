export const generatePrompt = (inputs,words) => {
    const prompt = `Hey gemini! i need your help in generating about words and it's opposite words. i have topic information to generate about this topic.
    
    here are inputs: 
    
    -Topic: ${inputs || "random  word"}
    
    
    ### Requirements:
    - Provide ${words||"100"} for topic.
    - Format the response in JSON, including:
     - 'topic': The style of the words.
     - 'description': The provided topic description.
     - 'story': privide  ${words||"100"} words and it's some it's Antonyms in a single string.
    
    
    
    ### Example JSON Response:
    {
     "topic": "invention",
      "description": "the action of inventing something, typically a process or device",
     "story": "Absence - Presence,	Plenty,	Existence	Enough;
              Accept - Refuse,	Fail,	Deny,	Reject;
              Advantage -	Disadvantage,	Harm,	Impotence,	Inferiority;"     
`;
  
    return prompt;
  };