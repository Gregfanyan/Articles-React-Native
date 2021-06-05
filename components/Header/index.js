import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import HeaderLogo from "../Logos/HeaderLogo";
import FooterLogo from "../Logos/FooterLogo";

import Hackernews from "../../assets/logos/Hackernews.svg";

function Header() {
  return (
    <TouchableOpacity style={styles.headerContainer}>
      <HeaderLogo />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Header;
