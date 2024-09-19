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

type ItemData = {
  id: string;
  title: string;
  date: Date;
};

const getItem = (data: ItemData[], index: number): ItemData => data[index];

const getItemCount = (data: ItemData[]) => data.length;

type ItemProps = {
  title: string;
  date: Date;
};

const Item = ({ title, date }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.date}>{date.toLocaleString()}</Text>
  </View>
);

export const TodoList = () => {
  const [todos, setTodos] = useState<ItemData[]>([]);
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
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Add todo"
      />
      <View>
        <Button onPress={() => setShowDatePicker(true)} title="Pick Date" />
        <Button onPress={() => setShowTimePicker(true)} title="Pick Time" />
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
      <Text style={styles.selectedDate}>
        Selected Date and Time: {date.toLocaleString()}
      </Text>
      <Button title="Add Todo" onPress={handleAddTodo} />
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
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  date: {
    fontSize: 16,
    color: '#888',
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