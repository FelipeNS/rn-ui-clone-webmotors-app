import styled from "styled-components/native";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const cardWidth = (width - 150) / 2;
const cardHeight = (width - 180) / 2;

export const Container = styled.View`
  background: #FFF;
  width: ${cardWidth}px;
  height: ${cardHeight}px;
  border-radius: 10px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 60px;
  margin-bottom: 15px;
`;

export const Shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,

  elevation: 10,
};

export const Title = styled.View``;

export const First = styled.Text`
  font-size: 18px;
`;

export const Second = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
