import React from 'react';
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView
  } from 'react-native';



function ToDoList({tasks}) {
   
  return (
        <ScrollView style={[styles.center]}>
              {tasks.map((task, index) => (
                <Pressable key={index}>
                  <View>
                      <Text>{task}</Text>
                  </View>
                </Pressable>
              ))}
        </ScrollView>  
  )
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    taskText: {
      fontSize: 16,
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    center: {
      
    }
    
  });
  
export default ToDoList;
  