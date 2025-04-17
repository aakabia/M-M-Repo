import React, { useState } from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import MyButton from "../components/button";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import * as Linking from "expo-linking";
import { TouchableOpacity } from "react-native";
import PDFVIEW from "../components/PDFVIEW";
import { Asset } from "expo-asset";

const styleGuide = require("../assets/pdfs/styleGuide.pdf");
const venues = require("../assets/pdfs/venues.pdf");
const whereToStayURl = "https://www.marketingandmimosas.com/fun-facts";
// Above are our local pdf files and links for our buttons on the homepage 



const HomeScreen = () => {

  const [pdfPath, setPdfPath] = useState<string | null>(null);
  const [pdfShowing, setPdfShowing] = useState<boolean>(false);

  // Above, we set two variables using state 
  // pdfPath will dynamically choose which pdf we want to use 
  // pdfShowing is a boolean to determine if a pdf is currently in view

  const onPressWhereToStay = () => {
    Linking.openURL(whereToStayURl);
  };

  // Above we use Linking from expo-linking to re route to a url of our choosing.
  

  const onPressVenues = () => {
    const venuesAsset = Asset.fromModule(venues);
    setPdfPath(venuesAsset.uri);
    setPdfShowing(true);
    //console.log(venuesAsset.uri);
  };

  // for our pdf files we use Asset.fromModule to create a object for our imported pdf file 
  // this objects contains the uri of the pdf file which we can use for dynamic rendering
  // we set the pdf path to the venues uri and set pdf showing to true
  // this helps render between our hompage layout and pdf layout
  // the same is done below in onPressStyleGuide 

  const onPressStyleGuide = () => {
    const styleGuideAsset = Asset.fromModule(styleGuide);
    setPdfPath(styleGuideAsset.uri);
    setPdfShowing(true);
    //console.log(styleGuideAsset.uri);
  };

  return (
    <>
      {pdfShowing && pdfPath ? (
        <PDFVIEW
          filePath={pdfPath}
          pdfShowing={pdfShowing}
          setPdfShowing={setPdfShowing}
        />
      ) : (
        <ScrollView style={styles.scrollViewContainer}>
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
                <MyButton
                  text="SCHEDULE"
                  onPress={() => console.log("button pressed")}
                />
                <MyButton text="STYLE GUIDE" onPress={onPressStyleGuide} />
                <MyButton text="WHERE TO STAY" onPress={onPressWhereToStay} />
                <MyButton text="OUR VENUES" onPress={onPressVenues} />
              </View>
            </View>

            <Link
              asChild
              href={"https://www.instagram.com/marketingandmimosas_/"}
            >
              <TouchableOpacity style={styles.IconContainer}>
                <MaterialCommunityIcons
                  name="instagram"
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default HomeScreen;

// Above is our home page that includes recomended images from the client.
// also the page includes a  MyButton that will direct users to other pages.
// next, we use  MaterialCommunityIcons to import the required instagram photo image requested.
// the page displays different content bassed on the values of pdfShowing && pdfPath
// if both pdfShowing && pdfPath are true the PDFVIEW layout will appear on the homepage
// if either one is false then a scrollview consisting of buttons will be shown on the homepage 

const styles: { [key: string]: any } = StyleSheet.create({
  pdfContainer: {
    flex: 1, // Ensures the PDF viewer takes up the full screen
    width: "100%", // Ensures it stretches to the full width of the screen
    height: "100%", // Ensures it stretches to the full height of the screen
  },

  scrollViewContainer: {
    flex: 1,
    backgroundColor: "#eda201",
  },

  container: {
    flex: 1,
    justifyContent: "flex-start",
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
    marginTop: 15,
  },
});
