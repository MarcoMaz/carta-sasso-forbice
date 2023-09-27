import Link from "next/link";

const HUMAN_VS_COMPUTER_ROUTE = "/game?mode=human-vs-computer";
const COMPUTER_VS_COMPUTER_ROUTE = "/game?mode=computer-vs-computer";

const Index: React.FunctionComponent = () => {
  const indexText = {
    heading: "Carta, sasso e forbice",
    buttonHumanComputer: "Umano contro Computer",
    buttonComputerComputer: "Computer contro Computer",
  };

  const { heading, buttonHumanComputer, buttonComputerComputer } = indexText;

  return (
    <div>
      <h1>{heading}</h1>
      <Link href={HUMAN_VS_COMPUTER_ROUTE}>
        <button>{buttonHumanComputer}</button>
      </Link>
      <Link href={COMPUTER_VS_COMPUTER_ROUTE}>
        <button>{buttonComputerComputer}</button>
      </Link>
    </div>
  );
};

export default Index;
