import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Title } from "./styles";

export default function Header() {
  return (
    <Container>
      <Icon name="menu" size={26} color="#FFF" />
      <Title>Home</Title>
    </Container>
  );
}
