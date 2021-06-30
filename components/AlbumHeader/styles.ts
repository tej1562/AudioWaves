import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  image: {
    width: 190,
    height: 190,
    margin: 10,
  },
  name: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 5,
  },
  creator: {
    color: "lightgray",
    margin: 5,
    fontSize: 16,
  },
  likes: {
    color: "lightgray",
    margin: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1ED760",
    width: 140,
    height: 43,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default styles;
