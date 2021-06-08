import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import FooterLogo from "../Logos/FooterLogo";
import Colors from "../../constants/Colors";

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
    backgroundColor: Colors.primary,
    width: "100%",
  },
});

export default Footer;
