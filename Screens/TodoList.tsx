import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type TodoItem = {
  id: string;
  title: string;
  date: Date;
};

const getItem = (data: TodoItem[], index: number): TodoItem => data[index];

const getItemCount = (data: TodoItem[]) => data.length;

type TodoProps = {
  title: string;
  date: Date;
};

const Item = ({ title, date }: TodoProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.date}>{date.toLocaleString()}</Text>
  </View>
);

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [text, onChangeText] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const addTodo = (title: string, date: Date) => {
    const newTodo = { id: Math.random().toString(12).substring(0), title, date };
    setTodos([...todos, newTodo]);
  };

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text, date);
      onChangeText('');
      setDate(new Date());
    }
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    }
  };

  const onChangeTime = (event: any, selectedTime?: Date) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const currentTime = selectedTime || date;
      const newDate = new Date(date);
      newDate.setHours(currentTime.getHours());
      newDate.setMinutes(currentTime.getMinutes());
      setDate(newDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
            <Text style={styles.selectedDate}>
        Selected Date and Time: {date.toLocaleString()}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Add todo"
      />
      <View style={styles.container}>
        <Button onPress={() => setShowDatePicker(true)} title="Pick Date" />
        <Button onPress={() => setShowTimePicker(true)} title="Pick Time" />
        <Button title="Add Todo" onPress={handleAddTodo} />
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          display="default"
          onChange={onChangeTime}
        />
      )}

      <VirtualizedList
        data={todos}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} date={item.date} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    gap: 5,
    padding: 20,
  },
  item: {
    backgroundColor: 'gray',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
  date: {
    fontSize: 16,
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  selectedDate: {
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 12,
  },
});