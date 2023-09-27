import { useEffect, useRef } from "react";
import { useAppContext } from "../../../../pages/_app";
import Link from "next/link";
import { useRouter } from "next/router";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  additionalClass?: string;
}

interface DialogText {
  buttonPlayAgain: string;
  buttonReset: string;
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
    setPlayer1score,
    player1score,
    setPlayer2score,
    player2score,
  } = useAppContext();

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
  const dialogClass = `dialog ${additionalClass ? additionalClass : ""}`;

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
    user1text = "Hai scelto:";
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
    <dialog className={dialogClass} ref={ref}>
      <p>
        {user1text} {user1choice}
      </p>
      <p>
        {user2text} {user2choice}
      </p>
      <strong>{winner}</strong>
      <br />
      <button onClick={handleNewGameButtonClick}>{buttonPlayAgain}</button>
      <Link href="/">
        <button onClick={resetGame}>{buttonReset}</button>
      </Link>
    </dialog>
  );
};

export default Dialog;
