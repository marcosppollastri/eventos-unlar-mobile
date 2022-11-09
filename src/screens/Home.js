import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width:200,
      height: 180,
      alignItems: 'center'
    },
  });

export default function Home() {
    const navigation = useNavigation();
    return (
        <>
        <View style={styles.container}>
            <Image source={{uri: 'https://guarani.unlar.edu.ar/graf/logo-unlar.png'}} style={styles.logo}></Image>
            <Button title='Ver eventos' onPress={() => navigation.navigate('ViewEvents')}>Crear evento</Button>
            <Button title='Crear evento' onPress={() => navigation.navigate('Add')}>Crear evento</Button>
        </View>
            
        </>
    )
}