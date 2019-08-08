import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Title, First, Second, Shadow } from "./styles";

export default function Card({ icon, first, second }) {
  return (
    <Container style={Shadow}>
      <Icon name={icon} size={32} />
      <Title>
        <First>{first}</First>
        <Second>{second}</Second>
      </Title>
    </Container>
  );
}
