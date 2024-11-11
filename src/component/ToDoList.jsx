import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';

export default function ToDoList({tasks}) {
    return(
    <ScrollView>
        {tasks.map((task,index)=> (
        <View style={[styles.task, styles.incompleted]} key={index}>
          <Pressable>
            <Text style={styles.taskText} >{task}</Text>
          </Pressable>
        </View>
      ))}
      </ScrollView>
);
}


const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 5,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',

    },
    incompleted: {
        backgroundColor: '#FF9D3D',
      },
    taskText: {
      fontSize: 20,
    },
  });
