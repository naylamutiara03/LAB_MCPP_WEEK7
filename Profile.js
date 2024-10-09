import React from "react";
import { Button, Text, View, Image } from "react-native";

const Profile = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: user.photo_url }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={{ fontSize: 24 }}>{user.name}&apos;s Profile</Text>
      <Text style={{ fontSize: 18 }}>{user.email}</Text>
      <Button title="Go Back" onPress={() => navigation.navigate("UserList")} />
    </View>
  );
};

export default Profile;