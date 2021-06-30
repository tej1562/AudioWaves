import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, FlatList } from "react-native";
import albumCategories from "../data/albumCategories";
import AlbumCategory from "../components/AlbumCategory";

import { API, graphqlOperation } from "aws-amplify";
import { listAlbumCategorys } from "../src/graphql/queries";
import { useEffect, useState } from "react";

export default function TabOneScreen() {
  const [categories, setCategories] = useState([]);
  const fetchAlbumCategories = async () => {
    try {
      const data = await API.graphql(graphqlOperation(listAlbumCategorys));
      console.log(data);
      setCategories(data.data.listAlbumCategorys.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAlbumCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums.items} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
