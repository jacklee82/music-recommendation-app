import { QuestionData } from '../types';

export const questionsData: QuestionData[] = [
  {
    id: 1,
    question: "가슴이 벅차오를 때 들으면 좋은 노래",
    keywords: ["벅차오름", "설렘", "감동", "희망"],
    tags: {
      emotion: ["설렘", "감동", "희망"],
      situation: ["일상", "특별한 순간"],
      genre: ["발라드", "팝", "K-pop"],
      mood: ["설렘", "감동"]
    },
    recommendations: [
      {
        id: "1-1",
        title: "Malibu Nights",
        artist: "LANY",
        genre: "팝",
        mood: "설렘",
        reason: "따뜻한 감성과 설렘을 담은 곡"
      },
      {
        id: "1-2",
        title: "Stars",
        artist: "Rothy",
        genre: "K-pop",
        mood: "희망",
        reason: "희망찬 메시지와 아름다운 멜로디"
      },
      {
        id: "1-3",
        title: "Me After You",
        artist: "Paul Kim",
        genre: "발라드",
        mood: "감동",
        reason: "따뜻한 감정을 담은 발라드"
      },
      {
        id: "1-4",
        title: "Candy",
        artist: "NCT DREAM",
        genre: "K-pop",
        mood: "설렘",
        reason: "상큼하고 경쾌한 분위기"
      },
      {
        id: "1-5",
        title: "Glimpse of Us",
        artist: "Joji",
        genre: "인디",
        mood: "감동",
        reason: "몽환적이고 아름다운 감성"
      }
    ]
  },
  {
    id: 2,
    question: "허무할 때 마음을 채워줄 음악",
    keywords: ["허무", "공허", "위로", "힐링"],
    tags: {
      emotion: ["허무", "공허", "위로"],
      situation: ["우울", "고민"],
      genre: ["힐링", "발라드", "인디"],
      mood: ["위로", "힐링"]
    },
    recommendations: [
      {
        id: "2-1",
        title: "Me After You",
        artist: "Paul Kim",
        genre: "발라드",
        mood: "위로",
        reason: "따뜻한 위로를 담은 발라드"
      },
      {
        id: "2-2",
        title: "Thunderous",
        artist: "Stray Kids",
        genre: "K-pop",
        mood: "에너지",
        reason: "강렬한 에너지로 기분 전환"
      },
      {
        id: "2-3",
        title: "Yellow",
        artist: "Coldplay",
        genre: "팝",
        mood: "희망",
        reason: "희망찬 메시지와 아름다운 멜로디"
      },
      {
        id: "2-4",
        title: "Peaches",
        artist: "Justin Bieber",
        genre: "팝",
        mood: "경쾌함",
        reason: "상큼하고 경쾌한 분위기"
      },
      {
        id: "2-5",
        title: "Travel",
        artist: "Bolbbalgan4",
        genre: "인디",
        mood: "힐링",
        reason: "자연스럽고 따뜻한 감성"
      }
    ]
  },
  {
    id: 3,
    question: "혼란스러운 마음을 차분하게 해주는 노래",
    keywords: ["혼란", "차분함", "안정", "평온"],
    tags: {
      emotion: ["혼란", "안정", "평온"],
      situation: ["스트레스", "고민"],
      genre: ["잔잔한", "인디", "클래식"],
      mood: ["평온", "안정"]
    },
    recommendations: [
      {
        id: "3-1",
        title: "Talking to the Moon",
        artist: "Bruno Mars",
        genre: "팝",
        mood: "평온",
        reason: "잔잔하고 평온한 분위기"
      },
      {
        id: "3-2",
        title: "Me After You",
        artist: "Paul Kim",
        genre: "발라드",
        mood: "안정",
        reason: "따뜻하고 안정적인 멜로디"
      },
      {
        id: "3-3",
        title: "Travel",
        artist: "Bolbbalgan4",
        genre: "인디",
        mood: "평온",
        reason: "자연스럽고 차분한 감성"
      },
      {
        id: "3-4",
        title: "That Girl",
        artist: "Jung Yong Hwa",
        genre: "K-pop",
        mood: "안정",
        reason: "부드럽고 안정적인 사운드"
      },
      {
        id: "3-5",
        title: "Square",
        artist: "Baek Yerin",
        genre: "인디",
        mood: "평온",
        reason: "몽환적이고 차분한 분위기"
      }
    ]
  },
  {
    id: 4,
    question: "운동할 때 듣는 음악",
    keywords: ["운동", "에너지", "동기부여", "파워풀"],
    tags: {
      emotion: ["에너지", "동기부여"],
      situation: ["운동", "피트니스"],
      genre: ["댄스", "팝", "힙합"],
      mood: ["파워풀", "에너지"]
    },
    recommendations: [
      {
        id: "4-1",
        title: "Thunderous",
        artist: "Stray Kids",
        genre: "K-pop",
        mood: "파워풀",
        reason: "강렬한 비트와 에너지 넘치는 사운드"
      },
      {
        id: "4-2",
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "팝",
        mood: "에너지",
        reason: "중독적인 비트와 강렬한 멜로디"
      },
      {
        id: "4-3",
        title: "Dynamite",
        artist: "BTS",
        genre: "K-pop",
        mood: "경쾌함",
        reason: "상큼하고 경쾌한 분위기"
      },
      {
        id: "4-4",
        title: "Physical",
        artist: "Dua Lipa",
        genre: "팝",
        mood: "파워풀",
        reason: "강렬한 비트와 운동에 최적화된 리듬"
      },
      {
        id: "4-5",
        title: "Kick It",
        artist: "NCT 127",
        genre: "K-pop",
        mood: "에너지",
        reason: "강렬하고 파워풀한 사운드"
      }
    ]
  },
  {
    id: 5,
    question: "봄날 산책할 때 듣는 노래",
    keywords: ["봄", "산책", "햇살", "경쾌함", "자연", "거닐기", "걷기"],
    tags: {
      emotion: ["경쾌함", "설렘"],
      situation: ["산책", "야외", "거닐기", "걷기"],
      genre: ["인디", "팝", "K-pop"],
      mood: ["경쾌함", "자연스러움"]
    },
    recommendations: [
      {
        id: "5-1",
        title: "Spring Day",
        artist: "BTS",
        genre: "K-pop",
        mood: "설렘",
        reason: "봄날의 따뜻함과 설렘을 담은 곡"
      },
      {
        id: "5-2",
        title: "Cherry Blossom Ending",
        artist: "Busker Busker",
        genre: "인디",
        mood: "자연스러움",
        reason: "벚꽃과 봄날의 아름다움"
      },
      {
        id: "5-3",
        title: "Travel",
        artist: "Bolbbalgan4",
        genre: "인디",
        mood: "자연스러움",
        reason: "자연스럽고 따뜻한 감성"
      },
      {
        id: "5-4",
        title: "Beautiful",
        artist: "Crush",
        genre: "K-pop",
        mood: "경쾌함",
        reason: "봄날의 아름다움을 노래한 곡"
      },
      {
        id: "5-5",
        title: "Blossom",
        artist: "IU",
        genre: "K-pop",
        mood: "설렘",
        reason: "봄날의 설렘과 아름다움"
      }
    ]
  },
  {
    id: 6,
    question: "퇴근길에 듣는 힐링 음악",
    keywords: ["퇴근", "힐링", "안정", "휴식", "위로"],
    tags: {
      emotion: ["안정", "위로"],
      situation: ["퇴근", "이동"],
      genre: ["힐링", "발라드", "인디"],
      mood: ["힐링", "안정"]
    },
    recommendations: [
      {
        id: "6-1",
        title: "Me After You",
        artist: "Paul Kim",
        genre: "발라드",
        mood: "위로",
        reason: "따뜻한 위로를 담은 발라드"
      },
      {
        id: "6-2",
        title: "Travel",
        artist: "Bolbbalgan4",
        genre: "인디",
        mood: "힐링",
        reason: "자연스럽고 따뜻한 감성"
      },
      {
        id: "6-3",
        title: "Square",
        artist: "Baek Yerin",
        genre: "인디",
        mood: "안정",
        reason: "몽환적이고 차분한 분위기"
      },
      {
        id: "6-4",
        title: "That Girl",
        artist: "Jung Yong Hwa",
        genre: "K-pop",
        mood: "안정",
        reason: "부드럽고 안정적인 사운드"
      },
      {
        id: "6-5",
        title: "Talking to the Moon",
        artist: "Bruno Mars",
        genre: "팝",
        mood: "평온",
        reason: "잔잔하고 평온한 분위기"
      }
    ]
  },
  {
    id: 7,
    question: "이별 후 마음 정리할 때 듣는 노래",
    keywords: ["이별", "마음정리", "치유", "성장", "위로"],
    tags: {
      emotion: ["슬픔", "치유", "성장"],
      situation: ["이별", "고민"],
      genre: ["발라드", "인디", "힐링"],
      mood: ["치유", "위로"]
    },
    recommendations: [
      {
        id: "7-1",
        title: "You, Clouds, Rain",
        artist: "Heize",
        genre: "K-pop",
        mood: "치유",
        reason: "이별의 아픔을 아름답게 표현한 곡"
      },
      {
        id: "7-2",
        title: "Through the Night",
        artist: "IU",
        genre: "K-pop",
        mood: "위로",
        reason: "따뜻한 위로와 공감"
      },
      {
        id: "7-3",
        title: "Glimpse of Us",
        artist: "Joji",
        genre: "인디",
        mood: "치유",
        reason: "몽환적이고 아름다운 감성"
      },
      {
        id: "7-4",
        title: "All of Me",
        artist: "John Legend",
        genre: "팝",
        mood: "위로",
        reason: "깊은 감정과 치유의 메시지"
      },
      {
        id: "7-5",
        title: "Someone Like You",
        artist: "Adele",
        genre: "팝",
        mood: "치유",
        reason: "이별의 아픔과 치유를 담은 곡"
      }
    ]
  },
  {
    id: 8,
    question: "파티에서 신나는 음악",
    keywords: ["파티", "신남", "에너지", "댄스", "경쾌함"],
    tags: {
      emotion: ["신남", "에너지"],
      situation: ["파티", "축하"],
      genre: ["댄스", "팝", "K-pop"],
      mood: ["경쾌함", "에너지"]
    },
    recommendations: [
      {
        id: "8-1",
        title: "Dynamite",
        artist: "BTS",
        genre: "K-pop",
        mood: "경쾌함",
        reason: "상큼하고 경쾌한 분위기"
      },
      {
        id: "8-2",
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "팝",
        mood: "에너지",
        reason: "강렬하고 중독적인 비트"
      },
      {
        id: "8-3",
        title: "Peaches",
        artist: "Justin Bieber",
        genre: "팝",
        mood: "경쾌함",
        reason: "상큼하고 경쾌한 분위기"
      },
      {
        id: "8-4",
        title: "Thunderous",
        artist: "Stray Kids",
        genre: "K-pop",
        mood: "파워풀",
        reason: "강렬한 에너지와 파워풀한 사운드"
      },
      {
        id: "8-5",
        title: "Physical",
        artist: "Dua Lipa",
        genre: "팝",
        mood: "에너지",
        reason: "강렬한 비트와 댄스에 최적화"
      }
    ]
  },
  {
    id: 9,
    question: "한강거닐며 듣는 음악",
    keywords: ["한강", "거닐기", "걷기", "야외", "자연", "평온", "힐링"],
    tags: {
      emotion: ["평온", "힐링", "자연스러움"],
      situation: ["한강", "거닐기", "걷기", "야외"],
      genre: ["인디", "발라드", "K-pop"],
      mood: ["평온", "자연스러움", "힐링"]
    },
    recommendations: [
      {
        id: "9-1",
        title: "Travel",
        artist: "Bolbbalgan4",
        genre: "인디",
        mood: "자연스러움",
        reason: "자연스럽고 따뜻한 감성으로 한강 산책에 최적"
      },
      {
        id: "9-2",
        title: "Cherry Blossom Ending",
        artist: "Busker Busker",
        genre: "인디",
        mood: "평온",
        reason: "자연의 아름다움을 담은 곡으로 한강변 산책에 어울림"
      },
      {
        id: "9-3",
        title: "Beautiful",
        artist: "Crush",
        genre: "K-pop",
        mood: "힐링",
        reason: "따뜻하고 아름다운 멜로디로 한강 산책에 완벽"
      },
      {
        id: "9-4",
        title: "Square",
        artist: "Baek Yerin",
        genre: "인디",
        mood: "평온",
        reason: "몽환적이고 차분한 분위기로 한강 산책에 적합"
      },
      {
        id: "9-5",
        title: "That Girl",
        artist: "Jung Yong Hwa",
        genre: "K-pop",
        mood: "자연스러움",
        reason: "부드럽고 자연스러운 사운드로 한강 산책에 어울림"
      }
    ]
  },
  {
    id: 10,
    question: "공원에서 산책할 때 듣는 음악",
    keywords: ["공원", "산책", "야외", "자연", "평온", "힐링", "걷기"],
    tags: {
      emotion: ["평온", "힐링", "자연스러움"],
      situation: ["공원", "산책", "야외", "걷기"],
      genre: ["인디", "발라드", "K-pop"],
      mood: ["평온", "자연스러움", "힐링"]
    },
    recommendations: [
      {
        id: "10-1",
        title: "Spring Day",
        artist: "BTS",
        genre: "K-pop",
        mood: "설렘",
        reason: "봄날 공원 산책에 어울리는 따뜻한 감성"
      },
      {
        id: "10-2",
        title: "Travel",
        artist: "Bolbbalgan4",
        genre: "인디",
        mood: "자연스러움",
        reason: "자연스럽고 따뜻한 감성으로 공원 산책에 최적"
      },
      {
        id: "10-3",
        title: "Blossom",
        artist: "IU",
        genre: "K-pop",
        mood: "설렘",
        reason: "공원의 아름다움을 노래한 곡"
      },
      {
        id: "10-4",
        title: "Cherry Blossom Ending",
        artist: "Busker Busker",
        genre: "인디",
        mood: "평온",
        reason: "자연의 아름다움을 담은 곡으로 공원 산책에 어울림"
      },
      {
        id: "10-5",
        title: "Beautiful",
        artist: "Crush",
        genre: "K-pop",
        mood: "힐링",
        reason: "따뜻하고 아름다운 멜로디로 공원 산책에 완벽"
      }
    ]
  },
  {
    id: 11,
    question: "카페에서 마시는 음악",
    keywords: ["카페", "커피", "휴식", "여유", "분위기", "조용함", "힐링"],
    tags: {
      emotion: ["여유", "힐링", "평온"],
      situation: ["카페", "휴식", "여유"],
      genre: ["인디", "재즈", "로파이"],
      mood: ["여유", "분위기", "조용함"]
    },
    recommendations: [
      {
        id: "11-1",
        title: "Square",
        artist: "Baek Yerin",
        genre: "인디",
        mood: "평온",
        reason: "몽환적이고 차분한 분위기로 카페 분위기에 완벽"
      },
      {
        id: "11-2",
        title: "That Girl",
        artist: "Jung Yong Hwa",
        genre: "K-pop",
        mood: "여유",
        reason: "부드럽고 안정적인 사운드로 카페에서 듣기 좋음"
      },
      {
        id: "11-3",
        title: "Talking to the Moon",
        artist: "Bruno Mars",
        genre: "팝",
        mood: "평온",
        reason: "잔잔하고 평온한 분위기로 카페 분위기에 어울림"
      },
      {
        id: "11-4",
        title: "Travel",
        artist: "Bolbbalgan4",
        genre: "인디",
        mood: "힐링",
        reason: "자연스럽고 따뜻한 감성으로 카페에서 듣기 좋음"
      },
      {
        id: "11-5",
        title: "Beautiful",
        artist: "Crush",
        genre: "K-pop",
        mood: "여유",
        reason: "따뜻하고 아름다운 멜로디로 카페 분위기에 완벽"
      }
    ]
  },
  {
    id: 12,
    question: "지하철에서 듣는 음악",
    keywords: ["지하철", "출퇴근", "이동", "바쁨", "집중", "배경음악"],
    tags: {
      emotion: ["집중", "바쁨"],
      situation: ["지하철", "이동", "출퇴근"],
      genre: ["팝", "K-pop", "인디"],
      mood: ["집중", "배경음악"]
    },
    recommendations: [
      {
        id: "12-1",
        title: "Dynamite",
        artist: "BTS",
        genre: "K-pop",
        mood: "경쾌함",
        reason: "상큼하고 경쾌한 분위기로 지하철 이동에 어울림"
      },
      {
        id: "12-2",
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "팝",
        mood: "에너지",
        reason: "강렬하고 중독적인 비트로 지하철에서 듣기 좋음"
      },
      {
        id: "12-3",
        title: "Peaches",
        artist: "Justin Bieber",
        genre: "팝",
        mood: "경쾌함",
        reason: "상큼하고 경쾌한 분위기로 지하철 이동에 완벽"
      },
      {
        id: "12-4",
        title: "Thunderous",
        artist: "Stray Kids",
        genre: "K-pop",
        mood: "파워풀",
        reason: "강렬한 에너지로 지하철에서 듣기 좋음"
      },
      {
        id: "12-5",
        title: "Physical",
        artist: "Dua Lipa",
        genre: "팝",
        mood: "에너지",
        reason: "강렬한 비트로 지하철 이동에 어울림"
      }
    ]
  },
  {
    id: 13,
    question: "바닷가에서 듣는 음악",
    keywords: ["바닷가", "바다", "여름", "휴양", "자유로움", "평온", "자연"],
    tags: {
      emotion: ["자유로움", "평온", "휴양"],
      situation: ["바닷가", "바다", "휴양"],
      genre: ["인디", "팝", "K-pop"],
      mood: ["자유로움", "평온", "자연스러움"]
    },
    recommendations: [
      {
        id: "13-1",
        title: "Spring Day",
        artist: "BTS",
        genre: "K-pop",
        mood: "설렘",
        reason: "따뜻한 감성으로 바닷가 분위기에 어울림"
      },
      {
        id: "13-2",
        title: "Travel",
        artist: "Bolbbalgan4",
        genre: "인디",
        mood: "자연스러움",
        reason: "자연스럽고 따뜻한 감성으로 바닷가에 완벽"
      },
      {
        id: "13-3",
        title: "Beautiful",
        artist: "Crush",
        genre: "K-pop",
        mood: "힐링",
        reason: "따뜻하고 아름다운 멜로디로 바닷가 분위기에 어울림"
      },
      {
        id: "13-4",
        title: "Cherry Blossom Ending",
        artist: "Busker Busker",
        genre: "인디",
        mood: "평온",
        reason: "자연의 아름다움을 담은 곡으로 바닷가에 완벽"
      },
      {
        id: "13-5",
        title: "Blossom",
        artist: "IU",
        genre: "K-pop",
        mood: "설렘",
        reason: "바닷가의 아름다움을 노래한 곡"
      }
    ]
  },
  {
    id: 14,
    question: "드라이브할 때 듣는 음악",
    keywords: ["드라이브", "운전", "자동차", "자유로움", "여행", "에너지"],
    tags: {
      emotion: ["자유로움", "에너지"],
      situation: ["드라이브", "운전", "자동차"],
      genre: ["팝", "K-pop", "댄스"],
      mood: ["자유로움", "에너지"]
    },
    recommendations: [
      {
        id: "14-1",
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "팝",
        mood: "에너지",
        reason: "강렬하고 중독적인 비트로 드라이브에 최적"
      },
      {
        id: "14-2",
        title: "Dynamite",
        artist: "BTS",
        genre: "K-pop",
        mood: "경쾌함",
        reason: "상큼하고 경쾌한 분위기로 드라이브에 어울림"
      },
      {
        id: "14-3",
        title: "Physical",
        artist: "Dua Lipa",
        genre: "팝",
        mood: "에너지",
        reason: "강렬한 비트로 드라이브에 완벽"
      },
      {
        id: "14-4",
        title: "Thunderous",
        artist: "Stray Kids",
        genre: "K-pop",
        mood: "파워풀",
        reason: "강렬한 에너지로 드라이브에 어울림"
      },
      {
        id: "14-5",
        title: "Peaches",
        artist: "Justin Bieber",
        genre: "팝",
        mood: "경쾌함",
        reason: "상큼하고 경쾌한 분위기로 드라이브에 완벽"
      }
    ]
  },
  {
    id: 15,
    question: "캠핑할 때 듣는 음악",
    keywords: ["캠핑", "야외", "자연", "모험", "자유로움", "평온"],
    tags: {
      emotion: ["모험", "자유로움", "평온"],
      situation: ["캠핑", "야외", "자연"],
      genre: ["인디", "포크", "K-pop"],
      mood: ["자유로움", "자연스러움", "모험"]
    },
    recommendations: [
      {
        id: "15-1",
        title: "Travel",
        artist: "Bolbbalgan4",
        genre: "인디",
        mood: "자연스러움",
        reason: "자연스럽고 따뜻한 감성으로 캠핑에 완벽"
      },
      {
        id: "15-2",
        title: "Cherry Blossom Ending",
        artist: "Busker Busker",
        genre: "인디",
        mood: "평온",
        reason: "자연의 아름다움을 담은 곡으로 캠핑에 어울림"
      },
      {
        id: "15-3",
        title: "Beautiful",
        artist: "Crush",
        genre: "K-pop",
        mood: "힐링",
        reason: "따뜻하고 아름다운 멜로디로 캠핑 분위기에 완벽"
      },
      {
        id: "15-4",
        title: "Spring Day",
        artist: "BTS",
        genre: "K-pop",
        mood: "설렘",
        reason: "따뜻한 감성으로 캠핑 분위기에 어울림"
      },
      {
        id: "15-5",
        title: "Blossom",
        artist: "IU",
        genre: "K-pop",
        mood: "설렘",
        reason: "자연의 아름다움을 노래한 곡으로 캠핑에 완벽"
      }
    ]
  }
];

// 더 많은 질문 데이터는 필요에 따라 추가... 