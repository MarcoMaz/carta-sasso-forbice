import { useEffect, useRef } from "react";
import { useAppContext } from "../../../../pages/_app";
import Link from "next/link";
import { useRouter } from "next/router";

interface DialogProps {
  isOpened: boolean;
  onClose: () => void;
  additionalClass?: string;
}

const Dialog: React.FunctionComponent<DialogProps> = ({
  isOpened,
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

  const router = useRouter();
  const { mode } = router.query;

  let text1 = "";
  let text2 = "";
  let winner = "";

  const ref = useRef<HTMLDialogElement>(null);
  const dialogClass = `dialog ${additionalClass ? additionalClass : ""}`;

  const handleNewGameButtonClick = () => {
    if (result === "Vince il computer!") {
      setPlayer1score(player1score + 1);
    } else if (result === "Hai vinto!") {
      setPlayer2score(player2score + 1);
    }

    // Close the dialog
    onClose();
  };

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpened]);

  const resetGame = () => {
    setPlayer1score(0);
    setPlayer2score(0);
  };

  if (mode === "human-vs-computer") {
    text1 = "Hai scelto:";
    text2 = "Il computer ha scelto:";
    winner = result;
  } else {
    text1 = "L'AI ha scelto:";
    text2 = "Il computer ha scelto:";

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
        {text1} {user1choice}
      </p>
      <p>
        {text2} {user2choice}
      </p>
      <strong>{winner}</strong>
      <br />
      <button onClick={handleNewGameButtonClick}>Play again</button>
      <Link href="/">
        <button onClick={resetGame}>Reset</button>
      </Link>
    </dialog>
  );
};

export default Dialog;
