import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

const backgroundImage = require("./assets/background.png");

export default function UserProfile({ route }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const { id } = route.params;
    fetch(`http://localhost:8080/api_sirid/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require("./assets/back.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("./assets/menu.png")}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.userInfo}>
          <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.lastname}>
            {user.primer_apellido} {user.segundo_apellido}
          </Text>
        </View>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user.division_academica_id}</Text>
            <Text style={styles.statTitle}>Division Academica</Text>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 40,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  userInfo: {
    alignItems: "center",
    marginTop: 70,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  lastname: {
    fontSize: 18,
    marginTop: 5,
    color: "#fff",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  statTitle: {
    fontSize: 16,
    color: "#fff",
  },
});
``
