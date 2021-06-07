import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../../constants/Colors.js";

const styles = StyleSheet.create({
  ButtonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.secondary_text,
    fontSize: 19,
    fontFamily: "open-sans-bold",
  },
});
function MainButton(props) {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.ButtonContainer}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.8}>
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}
export default MainButton;
