import { StyleSheet, Text, TouchableOpacity, ScrollView, View, FlatList, Image } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/FontAwesome'
import TaskCard from '../components/molecule/TaskCard'
import { useSelector } from 'react-redux'


const Home = ({navigation}) => {
   const { allTasks } = useSelector(state => state.task);

  const renderItem = ({item}) => {
    return (
      <TaskCard item={item} />
    )
  }
  

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Today's Task</Text>
        <View style={styles.triangle}>
        </View>
      </View>
    )
  }
  

  const renderFooter = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Task')}>
        <View style={styles.icon}>
          <Icon name='plus-square-o' size={50} color={EStyleSheet.value('$DARK')} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.body}>
      <FlatList
        data={allTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
      />
      {renderFooter()}
    </View>
  )
}

export default Home

const styles = EStyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '$BACKGROUND', 
  },
  header: {
    marginLeft: 10,
    marginTop: 20,
    marginRight: 155,
    backgroundColor : '$PRIMARY',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius : 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  title: {
    color: 'black',
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
    marginLeft: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopLeftRadius : 200,
    borderBottomColor: '$PRIMARY',
    transform: [{ rotate: "90deg" }],
  },
  icon: {
    position : 'absolute',
    right: 30,
    bottom : 20,
  },
})