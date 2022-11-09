import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Dayjs  from 'dayjs';
import VideocallButton from './VideocallButton';
import {deleteDoc, doc} from 'firebase/firestore';
import {database} from '../config/firebase'

export default function Event({
    id,
    emoji,
    name,
    description,
    date,
    videocall,
    createdAt
}) {
    const onDelete = () => {
        const docRef = doc(database, 'events', id);
        deleteDoc(docRef);
    }
    return(
        <View style={styles.eventContainer}>
            <View style={styles.delete}>
                <Button title='Borrar' color="#d9534f" onPress={onDelete}></Button>
                
            </View>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{Dayjs(new Date(date)).format('DD/MM/YYYY')}</Text>
            <Text style={styles.text}>{Dayjs(new Date(date)).format('HH:mm')}</Text>
            <VideocallButton url={videocall.url}>Unirse a videollamada</VideocallButton>

        </View>
    )
}

const styles = StyleSheet.create({
    eventContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 50,

    },
    name: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 24,
        color: 'gray'
    },
    delete: {
        alignItems: 'flex-end'
    }
})