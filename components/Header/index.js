import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import HeaderLogo from "../Logos/HeaderLogo";
function Header() {
  return (
    <TouchableOpacity style={styles.headerContainer}>
      <HeaderLogo />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    paddingVertical: 45,
  },
});

export default Header;
