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
      <View>
        <Text style={styles.title}>Today's Task</Text>
      </View>
    )
  }
  

  const renderFooter = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Task')}>
        <View style={styles.icon}>
          <Icon name='plus-square-o' size={50} color={EStyleSheet.value('$TEXT')} />
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
        ListFooterComponent={renderFooter}
        ListHeaderComponent={renderHeader}
      />
    </View>
  )
}

export default Home

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
  icon: {
    marginRight: 40,
    alignItems: 'flex-end',
    marginVertical: 40,
  },
})