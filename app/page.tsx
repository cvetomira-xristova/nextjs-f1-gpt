'use client';

import Image from 'next/image';
import f1GPTLogo from './assets/f1-gpt-h.png';
import { useChat, Message } from '@ai-sdk/react';
import ChatBubble from './components/ChatBubble';
import LoadingIndicator from './components/LoadingIndicator';
import PromptSuggestions from './components/PromptSuggestions';
import ChatInput from './components/ChatInput';

const Home = () => {
  const { append, status, messages, input, handleInputChange, handleSubmit } =
    useChat();

  const noMessages = messages.length === 0;
  const isLoading = status === 'submitted' || status === 'streaming';

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
      <div>
        <Image
          src={f1GPTLogo}
          alt="F1GPT Logo"
          height={80}
          priority
        />
        <p className="text-xs sm:text-md text-gray-600 font-light tracking-wide">
          Your AI companion for Formula 1 insights
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        {noMessages ? (
          <div className="flex flex-col justify-between h-100">
            <p className="text-sm sm:text-lg text-center text-gray-600 max-w-2xl mb-10">
              The ultimate place for F1 super fans. Ask F1GPT anything about the
              Formula 1. Start your F1 conversation by typing a question or
              choosing from the suggested topics below.
            </p>
            <PromptSuggestions onPromptClick={handlePromptClick} />
          </div>
        ) : (
          <>
            {messages.map((message: Message, index: number) => (
              <ChatBubble
                key={`message-${index}`}
                message={message}
              />
            ))}
          </>
        )}

        {isLoading && <LoadingIndicator />}

        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};
export default Home;
