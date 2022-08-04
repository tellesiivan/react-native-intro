import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, onDelete, id }) {
  return (
    <Pressable
      onPress={() => onDelete(id)}
      android_ripple={{ color: "#fefefe" }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.bxtn}>
        <Text style={styles.bxtnText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bxtnText: {
    color: "#333",
    fontSize: 16,
  },
  bxtn: {
    height: 60,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#ddd",
  },
  pressed: {
    opacity: 0.5,
  },
});
