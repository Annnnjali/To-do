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
      <View style={styles.header}>
        <Text style={styles.title}>To-Do</Text>
        <View style={styles.triangle}>
        </View>
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
  header: {
    marginLeft: 10,
    marginTop: 20,
    marginRight: 190,
    backgroundColor : '$PRIMARY',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius : 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  title: {
    color: '$DARK',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 80,
    marginLeft: 47,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopLeftRadius : 200,
    borderBottomColor: '$PRIMARY',
    transform: [{ rotate: "90deg" }],
  },
});
