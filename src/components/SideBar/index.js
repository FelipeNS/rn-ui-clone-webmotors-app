import React from "react";
import { Dimensions } from "react-native";

import MenuItem from "./MenuItem";

import {
  Container,
  Menu,
  Profile,
  Avatar,
  Description,
  Section,
  Title,
} from "./styles";

import image from "../../assets/images/webmotors.png";

export default function SideBar({ translateX }) {
  const { width } = Dimensions.get("window");

  return (
    <Container
      style={{
        transform: [
          {
            translateX: translateX.interpolate({
              inputRange: [0, (width - ( width * ( 35 / 100 ) ) )],
              outputRange: [-width, (width - ( width * ( 35 / 100 ) ) )],
              extrapolate: "clamp",
            }),
          },
        ],
      }}
    >
      <Menu>
        <Profile>
          <Avatar source={image} />
          <Description>Entre ou cadastre-se</Description>
        </Profile>
        <Section>
          <MenuItem icon="home" title="Início" />
          <MenuItem icon="directions-car" title="Meu veículo" />
        </Section>
        <Section>
          <Title>COMPRAR</Title>
          <MenuItem icon="search" title="Buscar" />
          <MenuItem icon="youtube-searched-for" title="Últimas buscas" />
          <MenuItem icon="star" title="Buscas salvas" />
          <MenuItem icon="favorite" title="Anúncios salvos" />
          <MenuItem icon="monetization-on" title="Financiamento" />
        </Section>
        <Section>
          <Title>VENDER</Title>
          <MenuItem icon="add-circle" title="Criar novo anúncio" />
          <MenuItem icon="directions-car" title="Meus anúncios" />
          <MenuItem icon="speaker-notes" title="Minhas negociações" />
        </Section>
        <Section>
          <Title>CONSULTAR</Title>
          <MenuItem icon="show-chart" title="tabela FIPE e Webmotors" />
          <MenuItem icon="exposure-zero" title="catálogo 0KM" />
        </Section>
        <Section>
          <Title>CONFIGURAÇÕES</Title>
          <MenuItem icon="settings" title="Ajustes e contato" />
        </Section>
      </Menu>
    </Container>
  );
}
