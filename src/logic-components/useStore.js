import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

const useStore = create(
  persist(
    (set) => {
      return {
        voices: [],
        language: "",
        spokenList: [
          {
            name: "wo finde ich das bitte?",
            edit: false,
            language: "Google Deutsch",
            id: nanoid()
          },
          {
            name:
              "Spaghetti sind deine Lieblingsnudeln oder? Ich mein schau dir deinen Code an.",
            edit: false,
            language: "Google Deutsch",
            id: nanoid()
          }
        ],
        setVoices: (voices) => {
          set(() => ({ voices }));
        },
        setFormLanguage: (language) => {
          set(() => ({ language }));
        },
        setLanguage: (index, language) => {
          set(
            produce((state) => {
              state.spokenList[index].language = language;
            })
          );
        },
        speakText: (text, languageName) => {
          set(
            produce((state) => {
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.voice = state.voices.find(
                (element) => element.name === languageName
              );
              speechSynthesis.speak(utterance);
            })
          );
        },
        addSpokenText: (name, language) => {
          set((state) => {
            set({
              spokenList: [
                ...state.spokenList,
                {
                  name,
                  edit: false,
                  language,
                  id: nanoid()
                }
              ]
            });
          });
        },
        deleteSpokenText: (index) => {
          set(
            produce((state) => {
              state.spokenList.splice(index, 1);
            })
          );
        },
        setEdit: (index) => {
          set(
            produce((state) => {
              state.spokenList[index].edit = !state.spokenList[index].edit;
            })
          );
        },
        setSpokenTextListValue: (index, value) => {
          set(
            produce((state) => {
              state.spokenList[index].name = value;
            })
          );
        }
      };
    },
    { name: "speech apparillo" }
  )
);

export default useStore;
