export const generatePrompt = (inputs,words) => {
    const prompt = `Hey gemini! i need your help in generating about words and it's meaning in detail. i have topic information to generate about this topic.
    
    here are inputs: 
    
    -Topic: ${inputs || "random  word"}
    
    
    ### Requirements:
    - Provide ${words||"100"} for topic.
    - Format the response in JSON, including:
     - 'topic': The style of the words.
     - 'description': The provided topic description.
     - 'story': privide  ${words||"100"} words and it's meaming in a single string.
    
    
    
    ### Example JSON Response:
    {
     "topic": "invention",
      "description": "the action of inventing something, typically a process or device",
     "story": "invention - the action of inventing something, typically a process or device.;
               innovation- a new method, idea, product, etc.;
               technology- the application of scientific knowledge for practical purposes.;
               creativity- the use of imagination or original ideas to create something.;     
`;
  
    return prompt;
  };