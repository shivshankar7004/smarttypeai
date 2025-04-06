import Card from '@/components/Card';
import React from 'react';

const page: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center min-h-screen bg-gray-100 p-6 gap-5">
            <Card link="/services/AI-knowledge" title="AI Knowledge Explorer" description="Ask anything, and our AI-powered assistant will provide concise and accurate explanations. Whether it’s science, history, technology, or general knowledge, get instant insights in a simple and easy-to-understand format."  />
            <Card link="/services/AI-Dictionary"title="AI Dictionary & Word Meanings" description="Instantly get the meaning of any word using AI. Just type a word, and our AI dictionary will provide accurate definitions, example sentences, and contextual meanings." />
            <Card link="/services/AI-Antonym" title="AI Antonym Finder (Opposite Words)" description="Enter any word, and our AI will find its opposite (antonym) in seconds. Get multiple antonyms, along with example sentences for better understanding." />
            <Card link="/services/AI-Synonym" title="AI Synonym Finder (Similar Words)" description="Find similar words instantly! Our AI suggests synonyms to enhance your vocabulary, making your writing richer and more engaging." />
        </div>
            

    );
};

export default page;