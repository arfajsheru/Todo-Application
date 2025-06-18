import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'


const {width } = Dimensions.get('window')
const halfWidth = width * 0.8;
const MyProfile = () => {
  return (
    <View style={{width: halfWidth, backgroundColor:'blue', flex:1,}}>
      <Text>MyProfile</Text>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({})