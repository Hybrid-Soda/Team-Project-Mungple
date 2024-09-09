import {NativeModules} from 'react-native';

const {RNKakaoLogins} = NativeModules;

export interface KakaoLoginModuleInterface {
  login(): Promise<KakaoOAuthToken>;
  login(props: KaKaoLoginWebType): Promise<KakaoOAuthWebToken>;
  
  logout(): Promise<string>;
  logout(tokenWeb: string): Promise<string>;
  
  unlink(): Promise<string>;
  unlink(tokenWeb: string): Promise<string>;
  
  getProfile(): Promise<KakaoProfile>;
  getProfile(tokenWeb: string): Promise<KakaoProfileWebType>;
  
  getAccessToken(): Promise<KakaoAccessTokenInfo>;
  
  loginWithKakaoAccount(): Promise<KakaoOAuthToken>;
  
  shippingAddresses(): Promise<KakaoShippingAddresses>;
  
  serviceTerms(): Promise<KakaoUserServiceTerms>;
}

export type KakaoOAuthToken = {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  accessTokenExpiresAt: Date;
  refreshTokenExpiresAt: Date;
  scopes: string[];
};

export type KakaoAccessTokenInfo = {
  accessToken: string;
  expiresIn: string;
};

export type KakaoProfile = {
  id: number;
  email: string;
  name: string;
  nickname: string;
  profileImageUrl: string;
  thumbnailImageUrl: string;
  phoneNumber: string;
  ageRange: string;
  birthday: string;
  birthdayType: string;
  birthyear: string;
  gender: string;
  isEmailValid: boolean;
  isEmailVerified: boolean;
  isKorean: boolean;
  ageRangeNeedsAgreement?: boolean;
  birthdayNeedsAgreement?: boolean;
  birthyearNeedsAgreement?: boolean;
  emailNeedsAgreement?: boolean;
  genderNeedsAgreement?: boolean;
  isKoreanNeedsAgreement?: boolean;
  phoneNumberNeedsAgreement?: boolean;
  profileNeedsAgreement?: boolean;
};

export type KakaoProfileNoneAgreement = {
  id: string;
};
export type KakaoOAuthWebToken = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
};

export type KaKaoLoginWebType = {
  restApiKeyWeb?: string;
  redirectUrlWeb?: string;
  codeWeb?: string;
};

export type KakaoProfileWebType = {
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
};

export type KakaoShippingAddresses = {
  userId: string;
  needsAgreement: boolean;
  shippingAddresses: KakaoShippingAddress[];
};

export type KakaoShippingAddress = {
  id: string;
  name: string;
  isDefault: boolean;
  updatedAt: string;
  type: string;
  baseAddress: string;
  detailAddress: string;
  receiverName: string;
  receiverPhoneNumber1: string;
  receiverPhoneNumber2: string;
  zoneNumber: string;
  zipCode: string;
};

export declare type KakaoAllowedServiceTerms = {
  tag: string;
  agreedAt: string;
};

export declare type KakaoAppServiceTerms = {
  tag: string;
  createdAt: string;
  updatedAt: string;
};

export declare type KakaoServiceTerms = {
  agreed: string;
  agreedAt?: string;
  required: string;
  revocable: string;
  tag: string;
};

export declare type KakaoUserServiceTerms = {
  userId?: number;
  serviceTerms?: KakaoServiceTerms[];
};

const NativeKakaoLogins: KakaoLoginModuleInterface = {
  login() {
    return RNKakaoLogins.login();
  },
  loginWithKakaoAccount() {
    return RNKakaoLogins.loginWithKakaoAccount();
  },
  logout() {
    return RNKakaoLogins.logout();
  },
  unlink() {
    return RNKakaoLogins.unlink();
  },
  getProfile() {
    return RNKakaoLogins.getProfile();
  },
  getAccessToken() {
    return RNKakaoLogins.getAccessToken();
  },
  shippingAddresses() {
    return RNKakaoLogins.shippingAddresses();
  },
  serviceTerms() {
    return RNKakaoLogins.serviceTerms();
  },
};

export default NativeKakaoLogins;