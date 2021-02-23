import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { create } from "apisauce";
import baseUrl from "../constants";

export default function Main() {
  const [location, setLocation] = useState(null);
  const [Data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(async () => {
    const api = create({
      baseURL: "",
    });

    try {
      alert("hi");
      let { status } = await Location.requestPermissionsAsync();
      if (status == "granted") {
        let location = await Location.getCurrentPositionAsync({});
        alert(JSON.stringify(location));
        setLocation(location);
        await api
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=b8ec4d1e8d978d78ce5dcd648b16fca7`
          )
          .then((response) => {
            alert(JSON.stringify(response.data.city.name));
            setData(response.data.city.name);
          })
          .catch((e) => alert(`${e}`));
      } else {
        setErrorMsg("Permission to access location was denied");
      }
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <View>
      {location ? (
        <View>
          <Text>{JSON.stringify(location)}</Text>
        </View>
      ) : (
        <View></View>
      )}
      {Data ? (
        <View>
          <Text>{JSON.stringify(Data)}</Text>
        </View>
      ) : (
        <View></View>
      )}
      {errorMsg ? (
        <View>
          <Text>{JSON.stringify(errorMsg)}</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}
