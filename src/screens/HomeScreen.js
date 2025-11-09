import React from 'react';
import {  View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen() {

    const date = new Date().toString();
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <View>
            <Text>{date}</Text>
        </View>

      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  
  
});
