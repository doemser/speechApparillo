import React, { useState } from "react";
import useVoices from "../useVoices";
import IconButton from "../../components/icon-button";
import StyledForm from "../../components/form/styled";
import StyledInput from "../../components/input/styled";
import StyledSelect from "../../components/select/styled";
import SvgIcon from "../../components/svg-icon";

const InputForm = () => {
  const [InputValue, setInputValue] = useState("");
  const {
    language,
    setFormLanguage,
    voices,
    speakText,
    addSpokenText
  } = useVoices();

  return (
    <StyledForm
      onSubmit={(event_) => {
        event_.preventDefault();
        speakText(InputValue, language);
        addSpokenText(InputValue, language);
      }}
    >
      <h1 style={{ color: "silver" }}>
        speech apparillo <SvgIcon icon="speak" />
      </h1>
      <StyledInput
        required
        type="text"
        placeholder="Say something.."
        value={InputValue}
        onChange={(event_) => {
          setInputValue(event_.target.value);
        }}
      />
      <StyledSelect
        name="languages"
        value={language}
        onChange={(event_) => {
          setFormLanguage(event_.target.value);
        }}
      >
        <option value=""> -- your default language -- </option>
        {voices.map((voice, index) => {
          return (
            <option value={voice.name} key={index}>
              {voice.name} | {voice.lang}
            </option>
          );
        })}
      </StyledSelect>
      <IconButton type="submit" icon="speak" text="speak dat!" />
    </StyledForm>
  );
};

export default InputForm;
