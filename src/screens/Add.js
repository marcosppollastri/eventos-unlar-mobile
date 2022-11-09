import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import EmojiPicker from 'rn-emoji-keyboard';

export default function Add() {
    const [isOpen, setIsOpen] = React.useState(true);
    const [newItem, setNewItem] = React.useState({
        emoji: '*',
        name: '',
        description: '',
        tags: [],
        date: new Date(),
        videocall: {
            url: ''
        },
        createdAt: new Date(),

    });
    const handlePick = (emojiObject) => {
        setNewItem({
            ...newItem,
            emoji: emojiObject.emoji,
        })
    }
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Agregar un evento</Text>
            <br></br>
            <Text style={styles.emoji}>{newItem.emoji}</Text>
            <EmojiPicker
                onEmojiSelected={handlePick}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <TextInput
                style={styles.inputContainer}
                placeholder='Nombre del evento'
                onChangeText={(text) => setNewItem({...newItem, name: text})}
            />
            <TextInput
                style={styles.inputContainer}
                placeholder='Descripción breve del evento'
                onChangeText={(text) => setNewItem({...newItem, description: text})}
            />
            <TextInput
                style={styles.inputContainer}
                placeholder='Link de videollamada'
                onChangeText={(text) => setNewItem({...newItem, description: text})}
            />
            <TextInput
                style={styles.inputContainer}
                placeholder='Tags'
                onChangeText={(text) => setNewItem({...newItem, tags: text})}
            />
            
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
    },
    emoji:{
        fontSize: 100,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 10,
        marginVertical: 6,

    }
})