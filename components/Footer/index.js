import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import FooterLogo from "../Logos/FooterLogo";

function Footer() {
  return (
    <TouchableOpacity style={styles.headerContainer}>
      <FooterLogo />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    paddingVertical: 45,
    backgroundColor: "yellow",
  },
});

export default Footer;
