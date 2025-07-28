import { QuestionData, Song } from '../types';
import { questionsData } from '../data/questions';

export class RecommendationEngine {
  private questions: QuestionData[];

  constructor() {
    this.questions = questionsData;
  }

  // 키워드 매칭 점수 계산
  private calculateKeywordScore(userInput: string, keywords: string[]): number {
    const userInputLower = userInput.toLowerCase();
    let score = 0;
    
    keywords.forEach(keyword => {
      if (userInputLower.includes(keyword.toLowerCase())) {
        score += 1;
      }
    });
    
    return score / keywords.length;
  }

  // 감정 키워드 매칭
  private matchEmotionKeywords(userInput: string): string[] {
    const emotionKeywords = [
      '슬픔', '기쁨', '분노', '설렘', '우울', '화남', '외로움', '허무', '혼란',
      '긴장', '불안', '안정', '평온', '복잡', '한심', '벅차', '눈물', '웃음'
    ];
    
    return emotionKeywords.filter(keyword => 
      userInput.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  // 상황 키워드 매칭
  private matchSituationKeywords(userInput: string): string[] {
    const situationKeywords = [
      '운동', '퇴근', '여행', '작업', '산책', '드라이브', '카페', '집', '회사',
      '지하철', '버스', '기차', '비행기', '캠핑', '바닷가', '한강', '도서관',
      '거닐기', '걷기', '산책하기', '한강변', '강변', '공원', '야외', '실외',
      '걷다', '거닐다', '산책하다', '한강에서', '강변에서', '공원에서',
      '바다', '해변', '휴양', '커피', '휴식', '여유', '운전', '자동차',
      '카페에서', '지하철에서', '바닷가에서', '캠핑에서', '드라이브할 때',
      '카페에서 마시는', '지하철에서 듣는', '바닷가에서 듣는', '캠핑할 때 듣는'
    ];
    
    return situationKeywords.filter(keyword => 
      userInput.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  // 계절/날씨 키워드 매칭
  private matchWeatherKeywords(userInput: string): string[] {
    const weatherKeywords = [
      '봄', '여름', '가을', '겨울', '비', '눈', '맑음', '흐림', '더움', '추움',
      '햇살', '바다', '낙엽', '장마', '시원함', '따뜻함'
    ];
    
    return weatherKeywords.filter(keyword => 
      userInput.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  // 사용자 선호도 고려
  private adjustForUserPreferences(
    recommendations: Song[], 
    userPreferences: { favoriteGenres: string[], avoidGenres: string[] }
  ): Song[] {
    return recommendations.map(song => {
      let score = 1;
      
      // 선호 장르 보너스
      if (userPreferences.favoriteGenres.includes(song.genre)) {
        score += 0.5;
      }
      
      // 피하고 싶은 장르 페널티
      if (userPreferences.avoidGenres.includes(song.genre)) {
        score -= 0.3;
      }
      
      return { ...song, score };
    }).sort((a, b) => (b.score || 0) - (a.score || 0));
  }

  // 메인 추천 함수
  public getRecommendations(
    userInput: string, 
    userPreferences: { favoriteGenres: string[], avoidGenres: string[] } = { favoriteGenres: [], avoidGenres: [] }
  ): { recommendations: Song[], analysis: string } {
    const emotionKeywords = this.matchEmotionKeywords(userInput);
    const situationKeywords = this.matchSituationKeywords(userInput);
    const weatherKeywords = this.matchWeatherKeywords(userInput);
    
    let bestMatch: QuestionData | null = null;
    let bestScore = 0;
    
    // 가장 적합한 질문 찾기
    this.questions.forEach(question => {
      const keywordScore = this.calculateKeywordScore(userInput, question.keywords);
      const emotionScore = emotionKeywords.length > 0 ? 
        emotionKeywords.filter(e => question.tags.emotion.includes(e)).length / emotionKeywords.length : 0;
      const situationScore = situationKeywords.length > 0 ? 
        situationKeywords.filter(s => question.tags.situation.includes(s)).length / situationKeywords.length : 0;
      
      const totalScore = keywordScore * 0.4 + emotionScore * 0.3 + situationScore * 0.3;
      
      if (totalScore > bestScore) {
        bestScore = totalScore;
        bestMatch = question;
      }
    });
    
    if (!bestMatch || bestScore < 0.1) {
      // 기본 추천 (인기곡)
      return {
        recommendations: [
          {
            id: "default-1",
            title: "Dynamite",
            artist: "BTS",
            genre: "K-pop",
            mood: "경쾌함",
            reason: "인기 있고 경쾌한 곡"
          },
          {
            id: "default-2",
            title: "Blinding Lights",
            artist: "The Weeknd",
            genre: "팝",
            mood: "에너지",
            reason: "강렬하고 중독적인 비트"
          }
        ],
        analysis: "구체적인 상황이나 감정을 말씀해주시면 더 정확한 추천을 드릴 수 있어요!"
      };
    }
    
    // bestMatch가 null이 아님을 확인했으므로 안전하게 사용
    const match = bestMatch as QuestionData;
    
    // 사용자 선호도 반영
    const adjustedRecommendations = this.adjustForUserPreferences(
      match.recommendations, 
      userPreferences
    );
    
    // 분석 텍스트 생성
    const analysis = this.generateAnalysis(
      match, 
      emotionKeywords, 
      situationKeywords, 
      weatherKeywords
    );
    
    return {
      recommendations: adjustedRecommendations.slice(0, 5),
      analysis
    };
  }

  // 분석 텍스트 생성
  private generateAnalysis(
    question: QuestionData,
    emotions: string[],
    situations: string[],
    weather: string[]
  ): string {
    let analysis = `분석 결과:\n`;
    
    if (emotions.length > 0) {
      analysis += `- 감정 상태: ${emotions.join(', ')}\n`;
    }
    
    if (situations.length > 0) {
      analysis += `- 상황: ${situations.join(', ')}\n`;
    }
    
    if (weather.length > 0) {
      analysis += `- 날씨/계절: ${weather.join(', ')}\n`;
    }
    
    analysis += `- 추천 방향: ${question.tags.mood.join(', ')}`;
    
    return analysis;
  }

  // 빠른 추천 (인기 질문들)
  public getQuickRecommendations(): { question: string, recommendations: Song[] }[] {
    const popularQuestions = [
      "슬플 때 듣는 노래",
      "운동할 때 듣는 음악", 
      "퇴근길에 듣는 힐링 음악",
      "봄날 산책할 때 듣는 노래"
    ];
    
    return popularQuestions.map(question => {
      const result = this.getRecommendations(question);
      return {
        question,
        recommendations: result.recommendations
      };
    });
  }
} 