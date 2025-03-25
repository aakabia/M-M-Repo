import { StyleSheet, Image, View } from "react-native";
import MyButton from "../components/button";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const onPress = () => {
    console.log("Button Pressed");
  };

  // Above will be the functionality for each button

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/gifs/shoes.gif")}
          style={styles.gifImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.stickerContainer}>
        <Image
          resizeMode="contain"
          style={styles.mmSticker}
          source={require("../assets/images/mm2025sticker.png")}
        />

        <Image
          style={styles.MMBanner}
          source={require("../assets/images/MM2025BANNER.png")}
        />

        <View style={styles.ButtonContainer}>
          <MyButton text="SCHEDULE" onPress={onPress} />
          <MyButton text="STYLE GUIDE" onPress={onPress} />
          <MyButton text="WHERE TO STAY" onPress={onPress} />
        </View>
      </View>

      <Link asChild href={"https://www.instagram.com/"}>
        <TouchableOpacity style={styles.IconContainer}>
          <MaterialCommunityIcons name="instagram" size={35} color="white" />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default HomeScreen;

// Above is our home page that includes recomended images from the client.
// Also the page includes a  MyButton that will direct users to other pages.
// Last, we use  MaterialCommunityIcons to import the required instagram photo image requested.




const styles: { [key: string]: any } = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#eda201",
  },

  gifImage: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },

  gifImageContainer: {
    width: "100%",
    justifyContent: "center",
  },

  stickerContainer: {
    width: "100%",
    justifyContent: "center",
  },

  mmSticker: {
    height: 150,
    width: 250,
    alignSelf: "center",
  },

  MMBanner: {
    height: 80,
    width: 370,
    alignSelf: "center",
    marginBottom: 50,
  },

  bannerContainer: {
    width: "100%",
    justifyContent: "center",
    marginBottom: 10,
  },

  ButtonContainer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginTop: -20,
  },

  IconContainer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginTop: 30,
  },
});
