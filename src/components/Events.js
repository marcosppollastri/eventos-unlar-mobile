import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {database} from '../config/firebase';
import {deleteDoc, doc, updateDoc} from 'firebase/firestore';

export default function Event({
    id,
    emoji,
    name,
    description,
    date,
    videocall,
    createdAt
}) {
    return(
        <View style={styles.productContainer}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{date}</Text>
            <Text style={styles.text}>{videocall.url}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 100,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 24,
        color: 'gray'
    }
})