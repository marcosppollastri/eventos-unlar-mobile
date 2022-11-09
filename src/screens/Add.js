import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableHighlight} from 'react-native';
import EmojiPicker from 'rn-emoji-keyboard';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';


export default function Add() {
    const [isOpen, setIsOpen] = useState(true);
    const [date, setDate] = useState(new Date());
    const [newItem, setNewItem] = useState({
        emoji: '*',
        name: '',
        description: '',
        date: date,
        videocall: {
            url: ''
        },
        createdAt: new Date(),

    });

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        setNewItem({...newItem, date: date});
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
                multiline
                numberOfLines={4}
                placeholder='Descripción breve del evento'
                onChangeText={(text) => setNewItem({...newItem, description: text})}
            />
            <TouchableHighlight style={styles.inputContainer} onPress={showDatepicker}>
                <View >
                <Text>{dayjs(date).format('DD/MM/YYYY')}</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.inputContainer} onPress={showTimepicker}>
                <View >
                <Text>{dayjs(date).format('HH:mm')}</Text>
                </View>
            </TouchableHighlight>
            <TextInput
                style={styles.inputContainer}
                placeholder='Link de videollamada'
                onChangeText={(text) => setNewItem({...newItem, videocall: {url: text}})}
            /> 
            <Text>{JSON.stringify(newItem)}</Text>           
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