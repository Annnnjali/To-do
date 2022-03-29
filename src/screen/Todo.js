import {StyleSheet, Text, FlatList, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import TaskCard from '../components/molecule/TaskCard';
import {useSelector} from 'react-redux';

const Todo = () => {
  const {allTasks} = useSelector(state => state.task);

  const [todoList, settodoList] = useState([]);

  useEffect(() => {
    const filteredTask = allTasks.filter((item) => {
      return item.status === 'todo';
    });
    settodoList(filteredTask);
  }, [allTasks]);

  const renderItem = ({item}) => {
    return (
      <TaskCard item={item} />
    )
    
  };

  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.title}>To-Do</Text>
      </View>
    );
  };

  return (
    <View style={styles.body}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default Todo;

const styles = EStyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '$BACKGROUND',
  },
  title: {
    color: '$TEXT',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 40,
    textAlign: 'center',
  },
});
