import React from "react";
import useVoices from "../useVoices";
import IconButton from "../../components/icon-button";
import StyledInput from "../../components/input/styled";
import StyledSelect from "../../components/select/styled";
import StyledSpan from "../../components/span/styled";
import StyledUl from "../../components/ul/styled";
import StyledLi from "../../components/li/styled";
import StyledButtonGroup from "../../components/button-group/styled";

const SpokenList = () => {
  const {
    setLanguage,
    voices,
    speakText,
    spokenList,
    deleteSpokenText,
    setSpokenTextListValue,
    setEdit
  } = useVoices();

  return (
    <StyledUl>
      {spokenList.map((spokenText, index) => {
        return (
          <StyledLi key={index}>
            <StyledButtonGroup>
              <IconButton
                icon="speak"
                onClick={() => {
                  speakText(spokenText.name, spokenText.language);
                }}
              />
            </StyledButtonGroup>
            {!spokenText.edit ? (
              <StyledSpan>{spokenText.name}</StyledSpan>
            ) : (
              <>
                <StyledInput
                  type="text"
                  value={spokenText.name}
                  onChange={(event_) => {
                    setSpokenTextListValue(index, event_.target.value);
                  }}
                />
                <StyledSelect
                  value={spokenText.language}
                  onChange={(event_) => {
                    setLanguage(index, event_.target.value);
                  }}
                >
                  <option value="">-- your default language --</option>
                  {voices.map((voice) => {
                    return (
                      <option value={voice.name} key={voice.name}>
                        {voice.name} | {voice.lang}
                      </option>
                    );
                  })}
                </StyledSelect>
              </>
            )}
            <StyledButtonGroup>
              <IconButton
                icon={spokenText.edit ? "save" : "edit"}
                onClick={() => {
                  setEdit(index);
                }}
              />
              <IconButton
                icon="delete"
                onClick={() => {
                  deleteSpokenText(index);
                }}
              />
            </StyledButtonGroup>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};

export default SpokenList;
