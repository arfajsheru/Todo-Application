import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deletTodo, toggleTodo, editTodo } from "../Store/todoSlice";
import { TrashIcon } from "react-native-heroicons/solid";
import {
  PencilSquareIcon,
  CheckCircleIcon,
} from "react-native-heroicons/outline";
import ConfirmationBox from "../components/ConfirmationBox";
import BottomNvigation from "../navigation/BottomNvigation";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Global/Navbar";

const HomeScreen = () => {
  const [task, setTask] = useState("");
  const [editMode, setEditMode] = useState(null); // task id being edited
  const [visible, setVisible] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const confirmAction = (action, todo) => {
    setCurrentAction(action);
    setSelectedTodo(todo);
    setVisible(true);
  };

  const handleAddTodo = () => {
    if (task.trim() === "") return;
    dispatch(addTodo(task.trim()));
    setTask("");
  };

  const handleDelete = (id) => {
    dispatch(deletTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (id, currentTitle) => {
    setEditMode(id);
    setTask(currentTitle);
  };

  const handleConfirm = () => {
    if (!selectedTodo) return;

    if (currentAction === "delete") {
      dispatch(deletTodo(selectedTodo.id));
    } else if (currentAction === "toggle") {
      dispatch(toggleTodo(selectedTodo.id));
    } else if (currentAction === "edit") {
      setEditMode(selectedTodo.id);
      setTask(selectedTodo.title);
    }

    setVisible(false);
    setCurrentAction(null);
    setSelectedTodo(null);
  };

  const handleSaveEdit = () => {
    if (task.trim() !== "") {
      dispatch(editTodo({ id: editMode, newTitle: task.trim() }));
      setEditMode(null);
      setTask("");
    }
  };

  const renderTodo = ({ item, index }) => (
    <View style={styles.todoItem}>
      <Text
        style={[
          styles.todoText,
          item.completed && { textDecorationLine: "line-through" },
        ]}
      >
        {index + 1} {item.title}
      </Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => confirmAction("edit", item)}
        >
          <PencilSquareIcon size={20} color="green" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => confirmAction("toggle", item)}
        >
          <CheckCircleIcon size={20} color="blue" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => confirmAction("delete", item)}
        >
          <TrashIcon size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>My Todo List</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a task..."
            value={task}
            onChangeText={(text) => setTask(text)}
          />

          {editMode ? (
            <TouchableOpacity style={styles.addButton} onPress={handleSaveEdit}>
              <Text style={styles.addButtonText}>Update</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTodo}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No tasks yet.</Text>
          }
          contentContainerStyle={{ paddingBottom: 60 }}
        />
        <ConfirmationBox
          visible={visible}
          title={`Confirm ${currentAction?.toUpperCase()}`}
          description={`Are you sure you want to ${currentAction} this task?`}
          onCancel={() => setVisible(false)}
          onConfirm={handleConfirm}
        />
      </View>

      <BottomNvigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 16,
    textAlign: "center",
  },
  main: {
    flex: 1,
    backgroundColor: "#ffff",
    ...Platform.select({
      android: {
        paddingTop: 0,
      },
    }),
  },
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: "#FFADAD",
    borderWidth: 1.5,
    borderRadius: 5,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "#809bce",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 8,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 18,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  iconBtn: {
    borderWidth: 1.5,
    borderColor: "black",
    padding: 2,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#eee",
    backgroundColor: "#ffd6a5",
    marginBottom: 4,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#FFADAD",
    padding: 10,
  },
  todoText: {
    fontSize: 20,
    flexShrink: 1,
    fontWeight: "400",
    color: "#454545",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
    color: "#999",
    fontSize: 40,
  },
});

export default HomeScreen;
