import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { AlbumType } from "../../types";

export type AlbumHeaderProps = {
  album: AlbumType;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: album.imageUri }} />
      <Text style={styles.name}>{album.name}</Text>
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>by {album.by}</Text>
        <Text style={styles.likes}>{album.numberOfLikes} likes</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
