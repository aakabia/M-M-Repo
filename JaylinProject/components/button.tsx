import { StyleSheet, Text, TouchableHighlight} from "react-native";
import {
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "expo-font"; // Import the useFonts hook

interface MyButtonProps {
  text: string;
  onPress: () => void;
}

// Above is a type interface for our MyButton component. 

const MyButton = ({ text, onPress }: MyButtonProps) => {
    // MyButton takes a string and a function that returns nothing as props.

  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  // Above we use "useFonts" from "expo-font" to load ur fonts from  "@expo-google-fonts/montserrat

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  // Above is to check and make sure our fonts are loaded before use them in our StyleSheet. 

  return (
    <TouchableHighlight
      style={styles.button}
      onPress={onPress}
      underlayColor="#e3c51c"
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

export default MyButton;

const styles: { [style: string]: any } = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
    width: "70%",
    marginBottom: 10,
  },
  text: {
    color: "#eda201",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
  },
});
