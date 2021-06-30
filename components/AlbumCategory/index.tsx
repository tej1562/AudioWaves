import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import { AlbumType } from "../../types";
import Album from "../Album";

export type AlbumCategoryProps = {
  title: string;
  albums: AlbumType[];
};

const AlbumCategory = (props: AlbumCategoryProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
    <FlatList
      data={props.albums}
      renderItem={({ item }) => <Album album={item} />}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
      horizontal
    />
  </View>
);

export default AlbumCategory;
