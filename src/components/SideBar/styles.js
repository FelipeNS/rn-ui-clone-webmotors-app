import styled from "styled-components/native";
import { StyleSheet, Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const containerW = width - (width * ( 35 / 100 ) );

export const Container = styled(Animated.View)`
  top: 0;
  left: -${containerW};
  position: absolute;
  z-index: 15;
  background: #272530;
  width: ${containerW}px;
  height: 100%;
`;

export const Menu = styled.ScrollView.attrs({
  indicatorStyle: "white"
})``;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 25px 15px;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-right: 15px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #FFF;
`;

export const Section = styled.View`
  border-bottom-color: #312E3C;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFF;
  margin: 10px 15px;
`;
