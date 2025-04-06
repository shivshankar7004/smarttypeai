export const generatePrompt = (inputs,words) => {
    const prompt = `Hey gemini! i need your help in generating about words and it's similar words. i have topic information to generate about this topic.
    
    here are inputs: 
    
    -Topic: ${inputs || "random  word"}
    
    
    ### Requirements:
    - Provide ${words||"100"} for topic.
    - Format the response in JSON, including:
     - 'topic': The style of the words.
     - 'description': The provided topic description.
     - 'story': privide  ${words||"100"} words and it's some it's synonyms in a single string.
    
    
    
    ### Example JSON Response:
    {
     "topic": "invention",
      "description": "the action of inventing something, typically a process or device",
     "story": "Amazing - Incredible,	Unbelievable,	Improbable,	Astonishing;
              Anger -	Enrage,	Infuriate,	Arouse,	Nettle;
              Angry -	Wrathful,	Furious,	Enraged,	Indignant;"     
`;
  
    return prompt;
  };