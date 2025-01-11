// import * as React from 'react';
import React from 'react'
import { useState, useEffect } from 'react'

import { StyleSheet, Text, View } from 'react-native';
import { NativeSkeletonView, NativeSkeletonViewWrapper } from 'react-native-native-skeleton';

export default function App() {
  const [isVisible, setIsVisible]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsVisible(false)
    },3000)
  },[])
// #ffffff

  return (
    <View style={styles.container}>
      <NativeSkeletonViewWrapper 
      // initBackgroundColor={'#000'} secondaryBackgroundColor={'#ffffff'} 
      visible={isVisible} style={styles.box}>
        <View>
          <Text style={styles.itemTitle}>
            This is native skeleton! 
          </Text>
        </View>
        </NativeSkeletonViewWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'gray'
  },
  box: {
    backgroundColor:'green',
    borderRadius:10,
    overflow:'hidden',
  },
  itemTitle:{
    textAlign:'center',
    color: 'black',
    marginVertical: 100,
    marginHorizontal: 100,
  }
});
