import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faRobot } from "@fortawesome/free-solid-svg-icons";
import styles from './index.module.css';
import Image from 'next/image';

import Link from "next/link";

const HUMAN_VS_COMPUTER_ROUTE = "/game?mode=human-vs-computer";
const COMPUTER_VS_COMPUTER_ROUTE = "/game?mode=computer-vs-computer";

const Index: React.FunctionComponent = () => {
  const indexText = {
    heading: "Carta, sasso e forbice",
    vs: "vs",
  };

  const { heading, vs } = indexText;

  return (
    <section>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.image}>
        <Image
          src="/intro_img.svg"
          alt="Intro image app"
          width={200} 
          height={200}
        />
      </div>
      <div className={styles.buttons}>
        <Link href={HUMAN_VS_COMPUTER_ROUTE} className={styles.buttonHumanComputer}>
          <button>
            <FontAwesomeIcon icon={faRobot} />
            <span>{vs}</span>
            <FontAwesomeIcon icon={faPerson} />
          </button>
        </Link>
        <Link href={COMPUTER_VS_COMPUTER_ROUTE} className={styles.buttonComputerComputer}>
          <button>
            <FontAwesomeIcon icon={faRobot} />
            <span>{vs}</span>
            <FontAwesomeIcon icon={faRobot} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Index;
