import { createContext } from "react";
import "./App.css";
import Images from "./components/Images";
import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

export const ImageContext = createContext();

function App() {

  const accessKey = "3-KTHPxFInixxRLquFSSaimKzsXtRslyzK_KdhM69PI";
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=office&client_id=${accessKey}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData
  }
  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
