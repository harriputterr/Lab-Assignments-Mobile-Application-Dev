import React from 'react';
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView
  } from 'react-native';



function ToDoList() {
  return (
        <ScrollView style={[styles.center]}>
            <Pressable>
            <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Finsh WebDev Assignment</Text>
            </View>
            </Pressable>
            <Pressable>
            <View style={[styles.task]}>
                <Text style={styles.taskText}>Finsh OOPS Assignment</Text>
            </View>
            </Pressable>
            <Pressable>
            <View style={[styles.task, styles.completed]}>
              
                <Text style={styles.taskText}>Study for Midterms</Text>
            </View>
            </Pressable>
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
  