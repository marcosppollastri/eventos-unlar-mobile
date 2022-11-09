import * as React from 'react';
import {StyleSheet, View, Image, Button, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { database } from '../config/firebase';
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import Event from '../components/Events'

export default function ViewEvents() {
    const [events, setEvents] = React.useState([]);
    React.useEffect(() => {
        const collectionRef = collection(database, 'events');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));
        const unsuscribe = onSnapshot(q, QuerySnapshot => {
            setEvents(
                QuerySnapshot.docs.map(doc => ({
                    id: doc.id,
                    emoji: doc.data().emoji,
                    name: doc.data().name,
                    description: doc.data().description,
                    date: doc.data().date,
                    videocall: doc.data().videocall,
                    createdAt: doc.data().createdAt,
                }))
            )
        })
        return unsuscribe;
    }, []);

    return (
        <>
            <Text>Events</Text>
            {events.map(event => <Event key={event.id}{...event}/>)}
        </>
    )
}