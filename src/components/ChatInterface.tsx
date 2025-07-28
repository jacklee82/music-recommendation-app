import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Message } from '../types';
import { RecommendationEngine } from '../utils/recommendationEngine';
import { Send, Music, User, Bot } from 'lucide-react';

const ChatContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const Header = styled.header`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 80%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const Avatar = styled.div<{ isUser: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isUser ? '#667eea' : '#764ba2'};
  color: white;
  font-size: 1.2rem;
`;

const MessageContent = styled.div<{ isUser: boolean }>`
  background: ${props => props.isUser ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.8)'};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  max-width: 100%;
`;

const MessageText = styled.p`
  margin: 0 0 1rem 0;
  color: #333;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const RecommendationsContainer = styled.div`
  margin-top: 1rem;
`;

const RecommendationTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #667eea;
  font-size: 0.9rem;
  font-weight: 600;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SongItem = styled.div`
  background: rgba(102, 126, 234, 0.1);
  padding: 0.75rem;
  border-radius: 0.5rem;
  border-left: 3px solid #667eea;
`;

const SongTitle = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
`;

const SongArtist = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const SongReason = styled.div`
  font-size: 0.8rem;
  color: #888;
  font-style: italic;
`;

const InputContainer = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const InputForm = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  outline: none;
  
  &:focus {
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.3);
  }
`;

const SendButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #5a6fd8;
    transform: scale(1.05);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const QuickSuggestions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const SuggestionButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

const Dot = styled.div<{ delay: number }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #667eea;
  animation: bounce 1.4s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
  
  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

interface ChatInterfaceProps {
  recommendationEngine: RecommendationEngine;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ recommendationEngine }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '안녕하세요! 🎵\n\n어떤 음악을 찾고 계신가요?\n\n예시:\n• "슬플 때 듣는 노래"\n• "운동할 때 듣는 음악"\n• "봄날 산책할 때 듣는 노래"\n• "퇴근길에 듣는 힐링 음악"',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // AI 응답 시뮬레이션 (실제로는 API 호출)
    setTimeout(() => {
      const result = recommendationEngine.getRecommendations(inputValue);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: result.analysis,
        timestamp: new Date(),
        recommendations: result.recommendations
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const quickSuggestions = [
    "슬플 때 듣는 노래",
    "운동할 때 듣는 음악",
    "봄날 산책할 때 듣는 노래",
    "퇴근길에 듣는 힐링 음악"
  ];

  return (
    <ChatContainer>
      <Header>
        <Title>🎵 음악 추천 챗봇</Title>
      </Header>
      
      <MessagesContainer>
        {messages.map((message) => (
          <MessageBubble key={message.id} isUser={message.type === 'user'}>
            <Avatar isUser={message.type === 'user'}>
              {message.type === 'user' ? <User size={20} /> : <Bot size={20} />}
            </Avatar>
            <MessageContent isUser={message.type === 'user'}>
              <MessageText>{message.content}</MessageText>
              {message.recommendations && (
                <RecommendationsContainer>
                  <RecommendationTitle>
                    <Music size={16} style={{ marginRight: '0.5rem' }} />
                    추천 플레이리스트
                  </RecommendationTitle>
                  <SongList>
                    {message.recommendations.map((song) => (
                      <SongItem key={song.id}>
                        <SongTitle>{song.title}</SongTitle>
                        <SongArtist>{song.artist}</SongArtist>
                        <SongReason>{song.reason}</SongReason>
                      </SongItem>
                    ))}
                  </SongList>
                </RecommendationsContainer>
              )}
            </MessageContent>
          </MessageBubble>
        ))}
        
        {isLoading && (
          <MessageBubble isUser={false}>
            <Avatar isUser={false}>
              <Bot size={20} />
            </Avatar>
            <MessageContent isUser={false}>
              <LoadingDots>
                <Dot delay={0} />
                <Dot delay={0.2} />
                <Dot delay={0.4} />
              </LoadingDots>
            </MessageContent>
          </MessageBubble>
        )}
        
        <div ref={messagesEndRef} />
      </MessagesContainer>
      
      <InputContainer>
        <QuickSuggestions>
          {quickSuggestions.map((suggestion, index) => (
            <SuggestionButton
              key={index}
              onClick={() => handleQuickSuggestion(suggestion)}
              disabled={isLoading}
            >
              {suggestion}
            </SuggestionButton>
          ))}
        </QuickSuggestions>
        
        <InputForm onSubmit={handleSubmit}>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="어떤 음악을 찾고 계신가요?"
            disabled={isLoading}
          />
          <SendButton type="submit" disabled={!inputValue.trim() || isLoading}>
            <Send size={20} />
          </SendButton>
        </InputForm>
      </InputContainer>
    </ChatContainer>
  );
}; 