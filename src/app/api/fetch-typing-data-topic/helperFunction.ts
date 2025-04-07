export const generatePrompt = (inputs,words) => {
    const prompt = `Hey gemini! i need your help in generating about something. i have topic information to generate about this topic.
    
    here are inputs: 
    
    -Topic: ${inputs || "random company name"}
    
    
    ### Requirements:
    - Provide ${words||"100"} for topic.
    - Format the response in JSON, including:
     - 'topic': The style of the generated name.
     - 'description': The provided topic description.
     - 'story': privided topic anwer in ${words||"100"}.
    
    
    
    ### Example JSON Response:
    {
     "topic": "Real World",
      "description": "A real-world example of a technology company.",
     "story": "Innovexa is a leading technology company that specializes in innovative solutions for businesses. Founded in 2010, Innovexa has quickly become a trusted partner for companies looking to leverage technology to improve their operations and drive growth. With a team of experienced professionals and a commitment to excellence, Innovexa has established itself as a leader in the industry."
    }
    `;
  
    return prompt;
  };