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
                      <Text style={styles.taskText}>{index + 1}. {task}</Text>
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
      fontSize: 20,
      margin: 12,

    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    center: {
      
    }
  });
  
export default ToDoList;
  