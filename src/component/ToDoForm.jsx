import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
} from 'react-native';


export default function ToDoForm({addTask}){


  const [taskText, setTaskText] = React.useState('');

    return(
    <View style={styles.form}>
       <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
        <Pressable
        style={styles.btn}
        onPress={() => {
          addTask(taskText);
          setTaskText('');
        }}
      >
        <Text style={styles.btnText}>Add Task</Text>
      </Pressable>
      </View>
    );
}



const styles = StyleSheet.create({

    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
    btn:{
      backgroundColor: '#FF9D3D',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    btnText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });