import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import MyPage from "./Components/MyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>

    // <View style={styles.container}>
    //   <Text>Open up App.jshello to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Text style={styles.hold}>Hello</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  hold: {
    color: "#333333",
  },
});
