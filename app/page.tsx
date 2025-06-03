'use client';

import { useChat, Message } from '@ai-sdk/react';
import ChatBubble from './components/ChatBubble';
import LoadingIndicator from './components/LoadingIndicator';
import PromptSuggestions from './components/PromptSuggestions';
import ChatInput from './components/ChatInput';
import Header from './Header';

const Home = () => {
  const { append, status, messages, input, handleInputChange, handleSubmit } =
    useChat();

  const noMessages = messages.length === 0;
  const isLoading = status === 'submitted';

  const handlePromptClick = (prompt: string) => {
    const message: Message = {
      id: crypto.randomUUID(),
      content: prompt,
      role: 'user',
    };

    append(message);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
        <Header />

        <div className="flex flex-col items-center justify-end">
          {noMessages ? (
            <div className="flex flex-col justify-end items-center max-w-3xl mb-10">
              <p className="text-sm sm:text-lg text-center text-gray-700 mb-12 leading-relaxed">
                The ultimate place for F1 super fans. Ask F1GPT anything about
                the Formula 1. Start your F1 conversation by typing a question
                or choosing from the suggested topics below.
              </p>
              <PromptSuggestions onPromptClick={handlePromptClick} />
            </div>
          ) : (
            <div className="flex flex-col gap-4 my-12 ">
              {messages.map((message: Message, index: number) => (
                <ChatBubble
                  key={`message-${index}`}
                  message={message}
                />
              ))}
            </div>
          )}
        </div>
        {isLoading && <LoadingIndicator className="h-10" />}
      </div>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
export default Home;
