import { Link, Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found!" }} />
      <View style={styles.container}>
        <Link href="/"  style={styles.button}>Go to home screen</Link>
      </View>
    </>
  );
}
const styles: {[style : string ]: any } = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#25292e",
    justifyContent: 'center',
    alignItems: 'center',
  },

  button:{
    fontSize:20,
    textDecorationLine: "underline",
    color: "#fff"
  }
});

// Above is our not found page for any non specified routes.