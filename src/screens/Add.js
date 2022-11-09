import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import EmojiPicker from 'rn-emoji-keyboard';

export default function Add() {
    const [isOpen, setIsOpen] = useState(true);
    const [date, setDate] = useState(new Date(1598051730000));
    const [newItem, setNewItem] = useState({
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

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        });
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

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
            <Button onPress={showDatepicker} title="Show date picker!" />
            <Button onPress={showTimepicker} title="Show time picker!" />
            <Text>selected: {date.toLocaleString()}</Text>
            
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