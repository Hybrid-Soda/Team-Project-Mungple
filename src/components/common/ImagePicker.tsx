import React from 'react';
import { PressableProps } from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '@/constants';
import useModal from '@/hooks/useModal';
import { useUserStore } from '@/state/useUserStore';
import useImagePicker from '@/hooks/useImagePicker';
import EditProfileImageOption from '@/components/setting/EditProfileImageOption';
import { ResponsePetProfile } from '@/types';

interface ImagePickerProps extends PressableProps {
  petData?: ResponsePetProfile;
}

const ImagePicker = ({ petData }: ImagePickerProps) => {
  const imageOption = useModal();
  const { imageName } = useUserStore((state) => state.userData);
  const image = petData ? petData.photo : imageName;

  // 이미지 선택 기능을 위한 커스텀 훅
  const imagePicker = useImagePicker({
    petId: petData && petData.id,
    image: image ? `http://j11e106.p.ssafy.io:9000/images/${image}` : '',
    onSettled: imageOption.hide,
  });

  return (
    <Container>
      {/* 프로필 이미지 영역 */}
      <ProfileContainer>
        <ImageContainer onPress={() => imageOption.show()}>
          {imagePicker.imageName === '' ? (
            <Ionicons name="camera-outline" size={40} color={colors.GRAY_400} />
          ) : (
            <MyImage source={{ uri: imagePicker.imageName }} resizeMode="cover" />
          )}
        </ImageContainer>
      </ProfileContainer>

      {/* 프로필 이미지 수정 모달 옵션 */}
      <EditProfileImageOption
        isVisible={imageOption.isVisible} // 모달이 보이는지 여부
        hideOption={imageOption.hide} // 모달 숨기기 함수
        onChangeImage={imagePicker.handleChange} // 이미지 선택 후 동작 함수
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  padding: 20px;
  justify-content: center;
  background-color: ${colors.WHITE};
`;

const ProfileContainer = styled.View`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const MyImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

const ImageContainer = styled.Pressable`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  justify-content: center;
  align-items: center;
  border-color: ${colors.GRAY_300};
  border-width: 1px;
  overflow: hidden;
`;

export default ImagePicker;
