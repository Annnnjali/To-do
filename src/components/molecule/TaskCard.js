import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/actions/taskAction';

const TaskCard = ({item}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();
  // const { allTasks, isFetching } = useSelector(state => state.task);

  const handleCheckbox = (value) => {
    const payload = {
      id: item.id,
      status: value === true ? 'completed' : 'todo'
    }

    console.log('daa', payload)
    dispatch(changeStatus(payload));
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.task}>
          <CheckBox
            disabled={false}
            value={item.status === 'completed' ? true : false}
            onValueChange={handleCheckbox}
            style={styles.checkbox_view}
            
          />
        <Text style={styles.task_title}>{item.title}</Text>

        <TouchableOpacity>
          <Icon name="delete" size={30} style={styles.icon} />
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
    borderRadius: 20,
  },
  task : {
    flexDirection: 'row',
    backgroundColor: '$CARD_BACKGROUND',
    borderRadius: 20,
  },
  task_title: {
    color: '$TEXT',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  task_desc: {
    color: '$TEXT',
    fontWeight: 'bold',
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'center',
  },
  checkbox_view: {
    marginLeft: 20,
    marginTop: 20,
  },
  icon: {
    color: '$TEXT',
    marginTop: 20,
    justifyContent: 'space-between'
  },
});
