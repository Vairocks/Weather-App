import * as types from "./type";
import baseUrl from "../constants";
import { create } from "apisauce";
import { Alert } from "react-native";

export const fetchData = () => {
  const api = create({ baseURL: baseUrl });
  try {
    api
      .get("lat=25.5878&lon=83.5783&appid=b8ec4d1e8d978d78ce5dcd648b16fca7")
      .then((response) => alert(JSON.stringify(response)))
      .catch((e) => alert(`${e}`));
  } catch (e) {
    alert(e);
  }
};
