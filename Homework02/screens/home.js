import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity, FlatList } from "react-native";
import { globalStyles } from "../styles/global";

export default function home({ navigation }) {
  /* Hardcode a "database"/list of movies. */
  const [reviews, setReviews] = useState([
    {
      title: "Fellowship of the Ring",
      rating: 8.8,
      key: "1",
      description: "Some hobbits begin a quest.",
    },
    {
      title: "Two Towers",
      rating: 8.7,
      key: "2",
      description: "Some dark lords try to take over the world.",
    },
    {
      title: "Return of the King",
      rating: 8.9,
      key: "3",
      description: "The dark lords are defeated, to much rejoicing.",
    },
  ]);

  const [data, setData] = useState([]);

  fetch("https://cs262-webservice.azurewebsites.net/players/")
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error));

  return (
    <View style={globalStyles.container}>
      {/* Get rid of that ugly button and, instead, display our list of movies. */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text style={globalStyles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
