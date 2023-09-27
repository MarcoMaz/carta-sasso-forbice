import { useEffect, useState } from "react";
import { useAppContext } from "../../../pages/_app";
import { getRandomChoice, determineWinner } from "../../../utils/utils";
import Dialog from "./Dialog/Dialog";

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

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const playComputerVsComputer = () => {
    const computer1Choice = getRandomChoice(choices);
    const computer2Choice = getRandomChoice(choices);

    setUser1choice(computer1Choice);
    setUser2choice(computer2Choice);

    const roundResult = determineWinner(computer1Choice, computer2Choice);

    setResult(roundResult);

    setTimeout(() => {
      setIsOpened(true);
    }, 1000);
  };

  useEffect(() => {
    playComputerVsComputer();
  });

  const handleDialogClose = () => {
    setIsOpened(false);
  };

  return (
    <div>
      <h2>
        Computer <span>{player1score}</span>
      </h2>
      <h2>
        AI <span>{player2score}</span>
      </h2>
      <Dialog isOpened={isOpened} onClose={handleDialogClose} />
    </div>
  );
};

export default ComputerVsComputer;
