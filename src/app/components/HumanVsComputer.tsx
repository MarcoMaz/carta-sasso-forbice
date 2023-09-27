import { useEffect, useState } from "react";
import { useAppContext } from "../../../pages/_app";
import { getRandomChoice, determineWinner } from "../../../utils/utils";
import Dialog from "./Dialog/Dialog";

const HumanVsComputer: React.FunctionComponent = () => {
  // Context
  const {
    choices,
    player1score,
    player2score,
    user1choice,
    setUser1choice,
    user2choice,
    setUser2choice,
    setResult,
  } = useAppContext();

  const [isOpened, setIsOpened] = useState<boolean>(false);

  useEffect(() => {
    if (user1choice !== "" && user2choice !== "") {
      const roundResult = determineWinner(user1choice, user2choice);
      setResult(roundResult);
    }
  }, [user1choice, user2choice, setResult]);

  const handleUserChoice = (choice: string) => {
    setUser1choice(choice);
    const randomComputerChoice = getRandomChoice(choices);
    setUser2choice(randomComputerChoice);
    setIsOpened(true);
  };

  const handleDialogClose = () => {
    setIsOpened(false);
  };

  return (
    <div>
      <h2>
        Computer <span>{player1score}</span>
      </h2>
      <h2>
        Tu <span>{player2score}</span>
      </h2>
      <p>Tocca a te:</p>
      <button onClick={() => handleUserChoice("sasso")}>Sasso</button>
      <button onClick={() => handleUserChoice("carta")}>Carta</button>
      <button onClick={() => handleUserChoice("forbice")}>Forbice</button>
      <Dialog isOpened={isOpened} onClose={handleDialogClose} />
    </div>
  );
};

export default HumanVsComputer;
