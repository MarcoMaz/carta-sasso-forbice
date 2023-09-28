import { useEffect, useRef } from "react";
import { useAppContext } from "../../../../pages/_app";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faHand,
  faHandBackFist,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./dialog.module.css";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  additionalClass?: string;
}

interface DialogText {
  buttonPlayAgain: string;
  buttonReset: string;
}

interface DialogIcons {
  carta: IconDefinition;
  sasso: IconDefinition;
  forbice: IconDefinition;
}

const Dialog: React.FunctionComponent<DialogProps> = ({
  isOpen,
  onClose,
  additionalClass,
}) => {
  // Context
  const {
    user1choice,
    user2choice,
    result,
    player1score,
    player2score,
    setPlayer1score,
    setPlayer2score,
  } = useAppContext();

  const choiceIcons: DialogIcons = {
    carta: faHand,
    sasso: faHandBackFist,
    forbice: faHandScissors,
  };

  const dialogText: DialogText = {
    buttonPlayAgain: "Gioca di nuovo",
    buttonReset: "Reset",
  };
  const { buttonPlayAgain, buttonReset } = dialogText;

  const router = useRouter();
  const { mode } = router.query;

  let user1text: string = "";
  let user2text: string = "";
  let winner: string = "";

  const ref = useRef<HTMLDialogElement>(null);

  const handleNewGameButtonClick = (): void => {
    if (result === "Vince il computer!") {
      setPlayer1score(player1score + 1);
    } else if (result === "Hai vinto!") {
      setPlayer2score(player2score + 1);
    }

    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  const resetGame = () => {
    setPlayer1score(0);
    setPlayer2score(0);
  };

  if (mode === "human-vs-computer") {
    user1text = "Tu hai scelto:";
    user2text = "Il computer ha scelto:";
    winner = result;
  } else {
    user1text = "L'AI ha scelto:";
    user2text = "Il computer ha scelto:";

    if (result === "Vince il computer!") {
      winner = "Il Computer ha vinto!";
    } else if (result === "Hai vinto!") {
      winner = "L'AI ha vinto!";
    } else {
      winner = result;
    }
  }

  return (
    <dialog className={styles.container} ref={ref} data-testid="dialog">
      <div className={styles.wrapper}>
        <div
          className={`${styles.personaResult} ${styles.personaResult1}`}
          data-testid="persona1-heading"
        >
          {user2text}
          {user2choice && (
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={choiceIcons[user2choice as keyof DialogIcons]}
              />
            </div>
          )}
        </div>
        <div
          className={`${styles.personaResult} ${styles.personaResult2}`}
          data-testid="persona2-heading"
        >
          {user1text}
          {user1choice && (
            <div className={styles.icon}>
              <FontAwesomeIcon
                icon={choiceIcons[user1choice as keyof DialogIcons]}
              />
            </div>
          )}
        </div>
        <div className={styles.winner}>{winner}</div>
        <div className={styles.cta}>
          <button data-testid="button-play-again" onClick={handleNewGameButtonClick}>
            {buttonPlayAgain}
          </button>
          <Link href="/" data-testid="button-reset">
            <button onClick={resetGame}>{buttonReset}</button>
          </Link>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
