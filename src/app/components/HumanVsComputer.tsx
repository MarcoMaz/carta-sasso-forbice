import { useEffect, useState } from "react";
import { useAppContext } from "../../../pages/_app";
import { getRandomChoice, determineWinner } from "../../../utils/utils";
import Dialog from "./Dialog/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faHandBackFist,
  faHandScissors,
  faRobot,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./match.module.css";

interface HumanVsComputerText {
  user1: string;
  user2: string;
  CTA: string;
  choiceCarta: string;
  choiceSasso: string;
  choiceForbice: string;
}

const HumanVsComputer: React.FunctionComponent = () => {
  // Context
  const {
    choices,
    player1score,
    player2score,
    user1choice,
    user2choice,
    setUser1choice,
    setUser2choice,
    setResult,
  } = useAppContext();

  const humanVsComputerText: HumanVsComputerText = {
    user1: "Computer: ",
    user2: "Tu: ",
    CTA: "Scegli:",
    choiceCarta: "carta",
    choiceSasso: "sasso",
    choiceForbice: "forbice",
  };

  const { user1, user2, CTA, choiceCarta, choiceSasso, choiceForbice } =
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
    <div className={styles.container}>
      <div className={`${styles.persona} ${styles.persona1}`}>
        <h2>
          {user1} <span data-testid="persona1-score">{player1score}</span>
        </h2>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faRobot} />
        </div>
      </div>
      <div className={styles.versus}>VS</div>
      <div className={`${styles.persona} ${styles.persona2}`}>
        <h2>
          {user2} <span data-testid="persona2-score">{player2score}</span>
        </h2>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPerson} />
        </div>
      </div>
      <div className={styles.cta}>
        <p>{CTA}</p>
        <div className={styles.buttons}>
          <button
            onClick={() => handleUserChoice(choiceCarta)}
            data-testid="button-carta"
          >
            <FontAwesomeIcon icon={faHand} />
          </button>
          <button
            onClick={() => handleUserChoice(choiceSasso)}
            data-testid="button-sasso"
          >
            <FontAwesomeIcon icon={faHandBackFist} />
          </button>
          <button
            onClick={() => handleUserChoice(choiceForbice)}
            data-testid="button-forbice"
          >
            <FontAwesomeIcon icon={faHandScissors} />
          </button>
        </div>
      </div>
      <Dialog isOpen={isDialogOpen} onClose={handleDialogClose} />
    </div>
  );
};

export default HumanVsComputer;
