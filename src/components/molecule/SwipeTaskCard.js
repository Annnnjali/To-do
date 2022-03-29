import { StyleSheet, Text, Animated, View, TouchableOpacity } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandler } from 'expo'

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange : [0, 100],
    outputRange : [0,1],
    extrapolate : 'clamp'
  })
  return (
    <View style={styles.view_leftAction}>
      <Animated.Text style={[styles.text_leftAction, { transform : [{scale}]}]}> Completed </Animated.Text>
    </View>
  )
}

const RightActions = ( progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange : [ -100, 0 ],
    outputRange : [1, 0],
    extrapolate: 'clamp'
  })
  return (
    <View style={styles.view_rightAction}>
      <Animated.Text style={[styles.text_rightAction, { transform : [{scale}]}]}> Delete </Animated.Text>
    </View>
  )
}

const TaskCard = ({item , onSwipeRight }) => {
  return (
    <Swipeable 
      renderLeftActions={LeftActions}
      renderRightActions={RightActions}
      >
      <View style={styles.task}>
        <Text style={styles.task_title}>{item.title}</Text>
        <Text style={styles.task_desc}>{item.description}</Text>
      </View>
    </Swipeable>
  )
}

export default TaskCard

const styles = EStyleSheet.create({
    task: {
        marginTop: 20,
        marginHorizontal: 30,
        backgroundColor: '$CARD_BACKGROUND',
        borderRadius : 20,
      },
      task_title: {
        color: '$TEXT',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
      },
      task_desc: {
        color: '$TEXT',
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 10,
        textAlign: 'center',
      },
      view_leftAction : {
        marginTop: 20,
        marginHorizontal: 30,
        borderRadius : 20,
        backgroundColor : '#388e3c',
        justifyContent : 'center',
        flex : 1,
      },
      text_leftAction : {
        color : '#fff',
        fontWeight: '600',
        padding : 20,
        paddingLeft : 40,
        fontSize: 20,
      },
      view_rightAction: {
        marginTop: 20,
        marginHorizontal: 30,
        borderRadius : 20,
        backgroundColor : '$ERROR',
        justifyContent : 'center',
        flex: 1,
      },
      text_rightAction: {
        color : '#fff',
        fontWeight: '600',
        padding : 20,
        paddingRight : 40,
        fontSize: 20,
        textAlign: 'center'
      }
})