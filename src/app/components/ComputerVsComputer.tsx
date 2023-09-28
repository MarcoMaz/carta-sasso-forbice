import { useEffect, useState } from "react";
import { useAppContext } from "../../../pages/_app";
import { getRandomChoice, determineWinner } from "../../../utils/utils";
import Dialog from "./Dialog/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import styles from './match.module.css';

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
    <>
      <div className={styles.persona}>
        <h2>{user1} <span>{player1score}</span></h2>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faRobot} />
        </div>
      </div>
      <div className={styles.versus}>VS</div>
      <div className={styles.persona}>
        <h2>{user2} <span>{player2score}</span></h2>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPerson} />
        </div>
      </div>
      <Dialog isOpen={isDialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default ComputerVsComputer;
