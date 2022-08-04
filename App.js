import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.addcontainer}>
        <View style={styles.addInput}>
          <TextInput
            placeholder="Goal"
            style={styles.input}
            placeholderTextColor="#eee"
            value={value}
            onChangeText={(value) => setValue(value)}
          />
          <Button
            title="Add"
            onPress={() => {
              if (value.trim() !== "") {
                setGoals((prev) => [
                  { text: value, id: Math.random().toString() },
                  ...prev,
                ]);
                setValue("");
              }
            }}
          />
        </View>
      </View>
      <View style={styles.goalsContainer}>
        {goals.length > 0 ? (
          <FlatList
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
            data={goals}
            renderItem={(itemData) => {
              return (
                <View style={styles.bxtn}>
                  <Text style={styles.bxtnText}>{itemData.item.text}</Text>
                </View>
              );
            }}
          />
        ) : (
          <Text s>Start adding goals...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
  },
  addcontainer: {
    flex: 2,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginBottom: 8,
  },
  addInput: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 8,
    backgroundColor: "#111",
  },
  input: {
    color: "#fff",
    width: "80%",
    height: "100%",
  },
  bxtn: {
    height: 60,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
  },
  goalsContainer: {
    paddingHorizontal: 5,
    flex: 5,
  },
  bxtnText: {
    color: "#333",
    fontSize: 16,
  },
});
