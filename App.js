import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [value, setValue] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add new Goal"
        color="#3aaa"
        onPress={() => setModalIsVisible(true)}
      />
      <GoalInput
        value={value}
        setGoals={setGoals}
        setValue={setValue}
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />
      <View style={styles.goalsContainer}>
        {goals.length > 0 ? (
          <FlatList
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelete={deleteGoal}
                  id={itemData.item.id}
                />
              );
            }}
          />
        ) : (
          <Text>Start adding goals...</Text>
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

  goalsContainer: {
    paddingHorizontal: 5,
    flex: 5,
  },
});
