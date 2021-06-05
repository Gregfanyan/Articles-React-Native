import React from "react";
import { StyleSheet, Text, View } from "react-native";

import HeaderLogo from "../Logos/HeaderLogo";
import FooterLogo from "../Logos/FooterLogo";

import Hackernews from "../../assets/logos/Hackernews.svg";

function Header() {
  return (
    <View>
      <HeaderLogo />
    </View>
  );
}

export default Header;
