import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Title } from "./styles";

export default function MenuItem({ icon, title }) {
  return (
    <Container onpress={() => {}}>
      <Icon name={icon} size={22} color="#FFF" />
      <Title>{title}</Title>
    </Container>
  );
}
