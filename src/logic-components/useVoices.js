import useStore from "./useStore";

const useVoices = () => {
  const language = useStore((state) => state.language);
  const setFormLanguage = useStore((state) => state.setFormLanguage);
  const voices = useStore((state) => state.voices);
  const speakText = useStore((state) => state.speakText);
  const addSpokenText = useStore((state) => state.addSpokenText);
  const setLanguage = useStore((state) => state.setLanguage);
  const spokenList = useStore((state) => state.spokenList);
  const deleteSpokenText = useStore((state) => state.deleteSpokenText);
  const setSpokenTextListValue = useStore(
    (state) => state.setSpokenTextListValue
  );
  const setEdit = useStore((state) => state.setEdit);

  return {
    language,
    setFormLanguage,
    voices,
    speakText,
    addSpokenText,
    setLanguage,
    spokenList,
    deleteSpokenText,
    setSpokenTextListValue,
    setEdit
  };
};

export default useVoices;
