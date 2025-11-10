import React from 'react';
import {  View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../styles/globalStyles';
import SearchBar from '../components/SearchBar';

export default function HomeScreen() {

  const getFormattedDate = ()=> {
    const date = new Date()
    const options = {
      weekday: "long",
      day: "numeric",
      month: "short",
    };
    const formattedDate = new Intl.DateTimeFormat("es-ES", options).format(date);

    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

   
    
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>{getFormattedDate()}</Text>
            <Text style={styles.subtitle}>Buenos dias 😊 </Text>
        </View>
        <SearchBar/>

      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    fontFamily: "Inter"
  },
  subtitle: {
    fontSize: 18,
  }
  
  
});
