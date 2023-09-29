import { useEffect, useState } from "react";

import styles from "./match.module.css";

import { useAppContext } from "../../../pages/_app";
import { getRandomChoice, determineWinner } from "../../../utils/utils";

import Dialog from "./Dialog/Dialog";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faPerson } from "@fortawesome/free-solid-svg-icons";

interface ComputerVsComputerText {
  user1: string;
  user2: string;
  vs: string;
}

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
    vs: "VS",
  };

  const { user1, user2, vs } = computerVsComputerText;

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
    <div className={styles.container}>
      <div className={`${styles.persona} ${styles.persona1}`}>
        <h2 data-testid="persona1-heading">
          {user1} <span>{player1score}</span>
        </h2>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faRobot} />
        </div>
      </div>
      <div className={styles.versus}>{vs}</div>
      <div className={`${styles.persona} ${styles.persona2}`}>
        <h2 data-testid="persona2-heading">
          {user2} <span>{player2score}</span>
        </h2>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPerson} />
        </div>
      </div>
      <Dialog isOpen={isDialogOpen} onClose={handleDialogClose} />
    </div>
  );
};

export default ComputerVsComputer;
