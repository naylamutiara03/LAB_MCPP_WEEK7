import React, { useRef, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, Image, Text, Animated } from "react-native";
import userData from './data.json';
import styles from './styles';


const UserList = ({ navigation }) => {
    // Create an array of animated values, one for each user
    const animatedValues = useRef(userData.map(() => new Animated.Value(0))).current;
  
    useEffect(() => {
      // Start a staggered animation
      Animated.stagger(200, // delay between each animation
        animatedValues.map(animatedValue =>
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 500, // animation duration for each item
            useNativeDriver: true,
          })
        )
      ).start();
    }, [animatedValues]);
  
    return (
      <ScrollView>
        {userData.map((user, index) => {
          // Use each animated value to control opacity
          const animatedStyle = {
            opacity: animatedValues[index],
            transform: [
              {
                translateY: animatedValues[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0], // start lower and rise up
                }),
              },
            ],
          };
  
          return (
            <Animated.View style={[styles.userList, animatedStyle]} key={user.name}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("Profile", { user })}
              >
                <Image
                  source={{ uri: user.photo_url }}
                  style={styles.avatar}
                />
                <View>
                  <Text style={styles.boldText}>{user.name}</Text>
                  <Text>{user.email}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </ScrollView>
    );
  };
  
  export default UserList;
  