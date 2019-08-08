import React from "react";

import Card from "./Card";

import { Container } from "./styles";

export default function Menu() {
  return (
    <Container>
      <Card icon="directions-car" first="Quero" second="comprar" />
      <Card icon="attach-money" first="Quero" second="vender" />
      <Card icon="star" first="Quero" second="sonhar" />
      <Card icon="monetization-on" first="Quero" second="financiar" />
      <Card icon="directions-car" first="Meu" second="veículo" />
      <Card icon="show-chart" first="Ver a" second="tabela fipe" />
      <Card icon="favorite-border" first="Anúncios" second="salvos" />
      <Card icon="directions-car" first="Meus" second="anúncios" />
    </Container>
  );
}
