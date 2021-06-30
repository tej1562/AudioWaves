import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";
import { API, graphqlOperation } from "aws-amplify";
import { getAlbum } from "../src/graphql/queries";
import styles from "../components/SongListItem/styles";

const AlbumScreen = () => {
  const route = useRoute();
  const albumId = route.params.id;

  const [album, setAlbum] = useState(null);

  const fetchAlbumDetails = async () => {
    try {
      const data = await API.graphql(
        graphqlOperation(getAlbum, { id: albumId })
      );
      setAlbum(data.data.getAlbum);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAlbumDetails();
  }, []);

  if (!album) {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#1ED760" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={album.songs.items}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={album} />}
      />
    </View>
  );
};

export default AlbumScreen;
