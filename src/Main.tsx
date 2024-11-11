/**
 * My To Do List App
 *
 * @format
 */

'use client'
import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './component/ToDoList';
import ToDoForm from './component/ToDoForm';



function Main() {

  const[tasks,setTasks] = useState (
    ['Do laundry',
  'Go to gym',
  'Walk dog']
);

  const addTask = (taskText: string) => {
    //check taskText is empty string or duplicate text
    if (taskText === '') {
      Alert.alert('Empty Task', 'Please add detail in your task!');
      return;
    }
    if (tasks.includes(taskText)) {
      Alert.alert('Duplicate Task', 'This task already exists!');
      return;
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask = {addTask}/>
    </SafeAreaView>
  );
}



export default Main;