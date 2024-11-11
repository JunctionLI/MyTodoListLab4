import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';


function AboutScreen({ navigation }) {

    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString();
        setCurrentDate(formattedDate);
      }, []);


    return (

        <MainLayout>
            <Text>
                My Todo List - Junxian Li
            </Text>
            <Text>{currentDate}</Text>
            <View style={styles.btnContainer}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    btnContainer:{
        margin:20,
    },
});



export default AboutScreen;
