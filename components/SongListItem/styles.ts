import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  rightContainer: {
    justifyContent: "center",
    marginLeft: 13,
  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    color: "white",
    fontSize: 21,
  },
  artist: {
    color: "lightgray",
    fontSize: 17,
    marginTop: 5,
  },
});

export default styles;
