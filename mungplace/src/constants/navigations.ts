const mainNavigations = {
  HOME: 'Home',
  MAP: 'Map',
  RECORD: 'Record',
  RANKING: 'Ranking',
  MYPAGE: 'MyPage',
} as const;

const authNavigations = {
  AUTH_HOME: 'AuthHome',
  KAKAO: 'Kakao',
  NAVER: 'Naver',
  GOOGLE: 'Google',
} as const;

const walkingNavigations = {
  HOME: 'Home',
  WALKING: 'Walking',
} as const;

export {
  mainNavigations,
  authNavigations,
  walkingNavigations,
};
