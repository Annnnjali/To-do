import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {changeStatus, deleteTask} from '../../redux/actions/taskAction';

const TaskCard = ({item}) => {
  const dispatch = useDispatch();

  const handleCheckbox = value => {
    const payload = {
      id: item.id,
      status: value === true ? 'completed' : 'todo',
    };
    dispatch(changeStatus(payload));
  };

  const handleDelete = () => {
    const payload = {
      id: item.id,
    };
    dispatch(deleteTask(payload));
  };

  return (
    <View style={styles.container}>
      <View style={styles.task} >
        <CheckBox
          disabled={false}
          value={item.status === 'completed' ? true : false}
          onValueChange={handleCheckbox}
          style={styles.checkbox_view}
        />
        <Text style={styles.task_title}>{item.title}</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="delete" size={30} style={{marginTop : 15, justifyContent : 'space-between', marginRight : 20}} />
         </TouchableOpacity>
      </View>
      <Text style={styles.task_desc}>{item.description}</Text>
    </View>
  );
};

export default TaskCard;

const styles = EStyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: '$CARD_BACKGROUND',
    borderRadius: 15,
  },
  task: {
    flexDirection: 'row',
    
  },
  task_title: {
    color: '$TEXT',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 30,
    marginTop: 15,
    flex  : 1,
  },
  task_desc: {
    color: '$TEXT',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom : 10,
    textAlign: 'center',
  },
  checkbox_view: {
    marginLeft: 20,
    marginVertical: 15,
  },
});
