import { useEffect, useState } from "react";
import { useAppContext } from "../../../pages/_app";
import { getRandomChoice, determineWinner } from "../../../utils/utils";
import Dialog from "./Dialog/Dialog";

interface HumanVsComputerText {
  user1: string;
  user2: string;
  CTA: string;
  buttonSasso: string;
  buttonCarta: string;
  buttonForbice: string;
};

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

  const humanVsComputerText: HumanVsComputerText = {
    user1: "Computer",
    user2: "Tu",
    CTA: "Tocca a te:",
    buttonSasso: "sasso",
    buttonCarta: "carta",
    buttonForbice: "forbice",
  };

  const { user1, user2, CTA, buttonSasso, buttonCarta, buttonForbice } =
    humanVsComputerText;

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleUserChoice = (choice: string) => {
    setUser1choice(choice);
    const randomComputerChoice = getRandomChoice(choices);
    setUser2choice(randomComputerChoice);
    setIsDialogOpen(true);
  };

  const handleDialogClose = (): void => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (user1choice !== "" && user2choice !== "") {
      const roundResult = determineWinner(user1choice, user2choice);
      setResult(roundResult);
    }
  }, [user1choice, user2choice, setResult]);

  return (
    <div>
      <h2>
        {user1} <span>{player1score}</span>
      </h2>
      <h2>
        {user2} <span>{player2score}</span>
      </h2>
      <p>{CTA}</p>
      <button onClick={() => handleUserChoice(buttonSasso)}>
        {buttonSasso}
      </button>
      <button onClick={() => handleUserChoice(buttonCarta)}>
        {buttonCarta}
      </button>
      <button onClick={() => handleUserChoice(buttonForbice)}>
        {buttonForbice}
      </button>
      <Dialog isOpen={isDialogOpen} onClose={handleDialogClose} />
    </div>
  );
};

export default HumanVsComputer;
