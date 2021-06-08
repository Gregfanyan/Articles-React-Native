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
    marginTop: 50,
  },
});

export default Header;
