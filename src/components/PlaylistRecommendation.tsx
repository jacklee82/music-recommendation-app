import React, { useState } from 'react';
import styled from 'styled-components';
import { Song } from '../types';
import { RecommendationEngine } from '../utils/recommendationEngine';
import { Search, Music, Play, Heart, Clock, TrendingUp } from 'lucide-react';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const PromptSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const PromptForm = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const PromptInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  outline: none;
  
  &:focus {
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.3);
  }
`;

const SearchButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #5a6fd8;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const QuickPrompts = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const QuickPromptButton = styled.button`
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

const LoadingSection = styled.div`
  text-align: center;
  padding: 3rem;
  color: white;
`;

const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const LoadingSubtext = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const ResultsSection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const AnalysisSection = styled.div`
  background: rgba(102, 126, 234, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-left: 4px solid #667eea;
`;

const AnalysisTitle = styled.h3`
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnalysisText = styled.p`
  color: #333;
  line-height: 1.6;
  white-space: pre-wrap;
  margin: 0;
`;

const PlaylistSection = styled.div`
  margin-top: 2rem;
`;

const PlaylistTitle = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const SongCard = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const SongHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const SongInfo = styled.div`
  flex: 1;
`;

const SongTitle = styled.h3`
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const SongArtist = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const SongGenre = styled.span`
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

const SongReason = styled.p`
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
  font-style: italic;
`;

const SongActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #666;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
`;

const StatsSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`;

interface PlaylistRecommendationProps {
  recommendationEngine: RecommendationEngine;
}

export const PlaylistRecommendation: React.FC<PlaylistRecommendationProps> = ({ recommendationEngine }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{
    recommendations: Song[];
    analysis: string;
  } | null>(null);

  const quickPrompts = [
    "슬플 때 듣는 노래",
    "운동할 때 듣는 음악",
    "봄날 산책할 때 듣는 노래",
    "퇴근길에 듣는 힐링 음악",
    "이별 후 마음 정리할 때 듣는 노래",
    "파티에서 신나는 음악",
    "공부할 때 듣는 음악",
    "드라이브할 때 듣는 음악",
    "한강거닐며 듣는 음악",
    "공원에서 산책할 때 듣는 음악",
    "카페에서 마시는 음악",
    "지하철에서 듣는 음악",
    "바닷가에서 듣는 음악",
    "캠핑할 때 듣는 음악"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setResults(null);

    // 1초 정도 검색하는 애니메이션
    setTimeout(() => {
      const result = recommendationEngine.getRecommendations(prompt);
      setResults(result);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuickPrompt = (quickPrompt: string) => {
    setPrompt(quickPrompt);
    // 바로 검색 실행
    setIsLoading(true);
    setResults(null);
    
    setTimeout(() => {
      const result = recommendationEngine.getRecommendations(quickPrompt);
      setResults(result);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <Header>
        <Title>🎵 플레이리스트 추천</Title>
        <Subtitle>
          당신의 감정과 상황에 맞는 완벽한 플레이리스트를 찾아드립니다
        </Subtitle>
      </Header>

      <PromptSection>
        <PromptForm onSubmit={handleSubmit}>
          <PromptInput
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="어떤 플레이리스트를 찾고 계신가요? (예: 슬플 때 듣는 노래, 운동할 때 듣는 음악)"
            disabled={isLoading}
          />
          <SearchButton type="submit" disabled={!prompt.trim() || isLoading}>
            <Search size={20} />
            {isLoading ? '검색 중...' : '추천 받기'}
          </SearchButton>
        </PromptForm>
        
        <QuickPrompts>
          {quickPrompts.map((quickPrompt, index) => (
            <QuickPromptButton
              key={index}
              onClick={() => handleQuickPrompt(quickPrompt)}
              disabled={isLoading}
            >
              {quickPrompt}
            </QuickPromptButton>
          ))}
        </QuickPrompts>
      </PromptSection>

      {isLoading && (
        <LoadingSection>
          <LoadingSpinner />
          <LoadingText>플레이리스트를 분석하고 있습니다...</LoadingText>
          <LoadingSubtext>AI가 당신의 감정과 상황을 분석하여 최적의 곡들을 찾고 있어요</LoadingSubtext>
        </LoadingSection>
      )}

      {results && (
        <ResultsSection>
          <AnalysisSection>
            <AnalysisTitle>
              <TrendingUp size={20} />
              분석 결과
            </AnalysisTitle>
            <AnalysisText>{results.analysis}</AnalysisText>
          </AnalysisSection>

          <PlaylistSection>
            <PlaylistTitle>
              <Music size={24} />
              추천 플레이리스트
            </PlaylistTitle>
            
            <SongGrid>
              {results.recommendations.map((song) => (
                <SongCard key={song.id}>
                  <SongHeader>
                    <SongInfo>
                      <SongTitle>{song.title}</SongTitle>
                      <SongArtist>{song.artist}</SongArtist>
                      <SongGenre>{song.genre}</SongGenre>
                    </SongInfo>
                    <SongActions>
                      <ActionButton title="재생">
                        <Play size={16} />
                      </ActionButton>
                      <ActionButton title="좋아요">
                        <Heart size={16} />
                      </ActionButton>
                    </SongActions>
                  </SongHeader>
                  <SongReason>{song.reason}</SongReason>
                </SongCard>
              ))}
            </SongGrid>

            <StatsSection>
              <StatItem>
                <Clock size={16} />
                총 {results.recommendations.length}곡
              </StatItem>
              <StatItem>
                <Music size={16} />
                다양한 장르 포함
              </StatItem>
              <StatItem>
                <Heart size={16} />
                맞춤형 추천
              </StatItem>
            </StatsSection>
          </PlaylistSection>
        </ResultsSection>
      )}
    </Container>
  );
}; 