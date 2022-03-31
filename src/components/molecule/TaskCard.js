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
          tintColors={{true : 'black'}}
        />
        <Text style={styles.task_title}>{item.title}</Text>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="delete" size={20} style={styles.icon} />
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
    marginLeft: 70,
    marginRight: 8,
    backgroundColor: '$CARD_BACKGROUND',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  task: {
    flexDirection: 'row',
    
  },
  task_title: {
    color: '$DARK',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15,
    marginTop: 15,
    flex  : 1,
  },
  task_desc: {
    color: '$DARK',
    fontSize: 14,
    marginBottom : 10,
    marginLeft: 62,
    marginRight: 20,
  },
  checkbox_view: {
    marginLeft: 15,
    marginTop: 15,
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  icon: {
    
    justifyContent : 'space-between', 
    backgroundColor: '$BACKGROUND',
    padding: 7,
    borderBottomLeftRadius: 10,    
    color: '#a64e4e',
  }
});
