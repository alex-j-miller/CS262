import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity, FlatList } from "react-native";
import { globalStyles } from "../styles/global";

export default function details({ route, navigation }) {
  const [data, setData] = useState([]);

  fetch("https://cs262-webservice.azurewebsites.net/players/")
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error));

  return (
    <View style={globalStyles.container}>
      {/* Display the fields of the received movie object. */}
      <Text style={globalStyles.title}>{route.params.name}</Text>
      <Text>{route.params.email}</Text>
      <Text>{route.params.id}</Text>
    </View>
  );
}
