import "./styles.css";
import React, { useEffect } from "react";
import InputForm from "./logic-components/input-form";
import SpokenList from "./logic-components/spoken-list";
import useStore from "./logic-components/useStore";
import StyledFlex from "./components/flex/styled";

const App = () => {
  useEffect(() => {
    function handleVoicesChanged() {
      const voices = speechSynthesis.getVoices();
      useStore.getState().setVoices(voices);
    }
    speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
    };
  }, []);

  return (
    <StyledFlex>
      <InputForm />
      <SpokenList />
    </StyledFlex>
  );
};

export default App;
