export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  recommendations?: Song[];
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  mood: string;
  reason: string;
}

export interface KeywordTag {
  emotion: string[];
  situation: string[];
  genre: string[];
  mood: string[];
}

export interface QuestionData {
  id: number;
  question: string;
  keywords: string[];
  tags: KeywordTag;
  recommendations: Song[];
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  userPreferences: {
    favoriteGenres: string[];
    favoriteArtists: string[];
    avoidGenres: string[];
  };
} 