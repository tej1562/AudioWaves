import React, { useContext, useEffect } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import { SongType } from "../../types";
import { AppContext } from "../../AppContext";

export type SongListItemProps = {
  song: SongType;
};

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;

  const { setSongId } = useContext(AppContext);

  const onPlay = () => {
    setSongId(song.id);
  };

  return (
    <TouchableWithoutFeedback onPress={onPlay}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: song.imageUri }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SongListItem;
