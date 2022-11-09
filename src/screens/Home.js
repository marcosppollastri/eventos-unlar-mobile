import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import * as RN from 'react-native';

const styles = RN.StyleSheet.create({
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
        <RN.View style={styles.container}>
            <RN.Image source={{uri: 'https://guarani.unlar.edu.ar/graf/logo-unlar.png'}} style={styles.logo}></RN.Image>
            <RN.Button title='Crear evento' onPress={() => navigation.navigate('Add')}>Crear evento</RN.Button>
        </RN.View>
            
        </>
    )
}