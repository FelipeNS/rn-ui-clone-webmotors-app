import React from "react";
import { StatusBar, Animated, Dimensions, TouchableOpacity } from "react-native";

import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Menu from "../../components/Menu";

import { Container, Effect } from "./styles";

const { width } = Dimensions.get("window");

export default function Main() {
  const translateX = new Animated.Value(0);
  let opened = false;

  _toggleSideBar = () => {
    Animated.timing(translateX, {
      toValue: opened ? 0 : (width - ( width * ( 35 / 100 ) ) ),
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      opened = !opened;
      console.log(opened);
    });
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#FF0035" />
      <TouchableOpacity onPress={_toggleSideBar}>
        <Header />
      </TouchableOpacity>
      <SubHeader />
      <Menu />
      <SideBar translateX={translateX} />
    </Container>
  );
}
