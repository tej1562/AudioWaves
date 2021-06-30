import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171717",
    width: "100%",
    position: "absolute",
    bottom: 47,
    borderWidth: 1,
    borderColor: "black",
  },
  rowContainer: {
    flexDirection: "row",
  },
  progress: {
    height: 2.5,
    backgroundColor: "#bcbcbc",
    marginBottom: 0.3,
  },
  image: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 50,
    margin: 7,
    backgroundColor: "#C1C1C1",
  },
  artist: {
    color: "#C1C1C1",
    fontSize: 15,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    width: 85,
    justifyContent: "space-around",
  },
});

export default styles;
