import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import EStyleSheet from 'react-native-extended-stylesheet'

const Images = () => {
  return (
    <View>
      <Icon name="list-alt" style={styles.icon} size={35} />
    </View>
  )
}

export default Images

const styles = EStyleSheet.create({
    icon: {
        marginTop: 10,
        height: 35,
        width: 40,
        borderRadius: 7,
        color: '$DARK',
     },
})