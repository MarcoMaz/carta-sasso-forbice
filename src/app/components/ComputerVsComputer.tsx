import { useEffect, useState } from "react";
import { useAppContext } from "../../../pages/_app";
import { getRandomChoice, determineWinner } from "../../../utils/utils";
import Dialog from "./Dialog/Dialog";

interface ComputerVsComputerText {
  user1: string;
  user2: string;
};

const ComputerVsComputer: React.FunctionComponent = () => {
  // Context
  const {
    choices,
    player1score,
    player2score,
    setUser1choice,
    setUser2choice,
    setResult,
  } = useAppContext();

  const computerVsComputerText: ComputerVsComputerText = {
    user1: "Computer",
    user2: "AI",
  };

  const { user1, user2 } = computerVsComputerText;

  const ONE_SECOND_DELAY: number = 1000;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const playComputerVsComputer = () => {
    const computer1Choice = getRandomChoice(choices);
    const computer2Choice = getRandomChoice(choices);
    setUser1choice(computer1Choice);
    setUser2choice(computer2Choice);
    const roundResult = determineWinner(computer1Choice, computer2Choice);
    setResult(roundResult);

    setTimeout(() => {
      setIsDialogOpen(true);
    }, ONE_SECOND_DELAY);
  };

  useEffect(() => {
    playComputerVsComputer();
  });

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h2>
        {user1} <span>{player1score}</span>
      </h2>
      <h2>
        {user2} <span>{player2score}</span>
      </h2>
      <Dialog isOpen={isDialogOpen} onClose={handleDialogClose} />
    </div>
  );
};

export default ComputerVsComputer;
