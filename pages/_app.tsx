import React, { createContext, useContext, useState } from "react";
import { AppProps } from "next/app";

interface AppContextType {
  choices: string[];
  user1choice: string;
  user2choice: string;
  result: string;
  player1score: number;
  player2score: number;
  setUser1choice: React.Dispatch<React.SetStateAction<string>>;
  setUser2choice: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
  setPlayer1score: React.Dispatch<React.SetStateAction<number>>;
  setPlayer2score: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppContextType>({
  choices: [],
  user1choice: "",
  user2choice: "",
  result: "",
  player1score: 0,
  player2score: 0,
  setUser1choice: () => {},
  setUser2choice: () => {},
  setResult: () => {},
  setPlayer1score: () => {},
  setPlayer2score: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

function MyApp({ Component, pageProps }: AppProps) {
  const choices: string[] = ["sasso", "carta", "forbice"];

  const [user1choice, setUser1choice] = useState<string>("");
  const [user2choice, setUser2choice] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [player1score, setPlayer1score] = useState<number>(0);
  const [player2score, setPlayer2score] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{
        choices,
        user1choice,
        user2choice,
        result,
        player1score,
        player2score,
        setUser1choice,
        setUser2choice,
        setResult,
        setPlayer1score,
        setPlayer2score,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
