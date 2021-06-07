import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { mapTime } from "../../utils/mapTime";

function Detail({ time }) {
  return (
    <View>
      <Text>
        <Ionicons name="time-outline" size={20} color="black" />
        &nbsp; {mapTime(time)} ago | 50 comments
      </Text>
    </View>
  );
}

export default Detail;
