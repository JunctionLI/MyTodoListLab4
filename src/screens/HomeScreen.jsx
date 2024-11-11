import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import Main from '../Main';


function HomeScreen({ navigation }) {


    return (

        <MainLayout>
            <Main/>
            <View style={styles.btnContainer}>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
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


export default HomeScreen;
