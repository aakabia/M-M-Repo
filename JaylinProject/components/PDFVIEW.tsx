import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Pdf from "react-native-pdf";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type PDFVIEWProps = {
  filePath: string; // The path to the PDF file
  pdfShowing: boolean; // Boolean to control if the PDF is shown
  setPdfShowing: React.Dispatch<React.SetStateAction<boolean>>; // Function to set PDF visibility
};

// Above we create a type for our component PDFVIEW's props 
// it says pdf will accept a filePath of prop string 
// a pdfShowing of type boolean 
// and a setPdfShowing prop of type React.Dispatch and generic type React.SetStateAction that has a generic type of boolean




const PDFVIEW: React.FC<PDFVIEWProps> = ({
  filePath,
  pdfShowing,
  setPdfShowing,
}) => {

    // above we destructure the props passed into PDFVIEW

  const handleOnpress = () => {
    setPdfShowing(false);
  };

  // handleOnpress is used to update the state of pdfShowing,

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={handleOnpress}>
        <MaterialCommunityIcons name="close" size={40} color="white" />
      </TouchableOpacity>

      <Pdf
        source={{ uri: filePath, cache: true}}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onError={(error) => {
          console.log("PDF render error:", error);
        }}
        style={styles.pdf}
      />
    </SafeAreaView>
  );
};

export default PDFVIEW;

// PDFVIEW is responsible for displaying a pdf file 
// it is dynamic and can accept different pdf files
// we have a TouchableOpacity button to exit the pdf file and take us back to our regular layout 
// we use "react-native-pdf" to create our pdf and use our passed in filepath as the source
// make sure to set a height and width in css before pdf is shown 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  pdf: {
    flex: 1,
    marginTop: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  closeButton: {
    marginTop: 20,
    width: 50, // Ensure the button has a larger clickable area
    height: 50, // Same here
    alignItems: "center",
    backgroundColor: "#eda201", // Optional: Adds a background behind the button
    borderRadius: 20,
    padding: 5,
  },
});
