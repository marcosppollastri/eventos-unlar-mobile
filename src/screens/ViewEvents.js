import * as React from 'react';
import {StyleSheet, View, Image, Button, Text,  SafeAreaView, ScrollView, StatusBar} from 'react-native';
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

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>Eventos</Text>

            {/* <Text>{JSON.stringify(events)}</Text> */}

            {events.map(event => <Event key={event.id}{...event}/>)}
            </ScrollView>
        </SafeAreaView>
            
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
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
  });