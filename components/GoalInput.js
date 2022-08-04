import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Text,
  Pressable,
  Image,
} from "react-native";

export default function GoalInput({
  value,
  setGoals,
  setValue,
  modalIsVisible,
  setModalIsVisible,
}) {
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.addcontainer}>
        <Image source={require("../assets/bg.jpg")} style={styles.img} />
        <View style={styles.addInput}>
          <TextInput
            autoFocus={modalIsVisible}
            placeholder="Goal"
            style={styles.input}
            placeholderTextColor="#333"
            value={value}
            onChangeText={(value) => setValue(value)}
          />
          <Button
            title="Add"
            color="#222"
            onPress={() => {
              if (value.trim() !== "") {
                setGoals((prev) => [
                  { text: value, id: Math.random().toString() },
                  ...prev,
                ]);
                setValue("");
              }
              setModalIsVisible(false);
            }}
          />
        </View>
        <View style={styles.closeContainer}>
          <Pressable onPress={() => setModalIsVisible(false)}>
            <View>
              <Text style={styles.closeContainerText}>X</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  addInput: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#fff",
  },
  input: {
    color: "#000",
    width: "88%",
    height: "100%",
  },
  img: {
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
    width: "100%",
  },
  addcontainer: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  closeContainer: {
    height: 50,
    width: 50,
    borderRadius: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 8,
    right: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  closeContainerText: {
    fontSize: 17,
  },
});
