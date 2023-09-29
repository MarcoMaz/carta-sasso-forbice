import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faRobot } from "@fortawesome/free-solid-svg-icons";

interface IndexText {
  heading: string;
  vs: string;
}

interface ImageSize {
  width: number;
  height: number;
}

interface ImageProps {
  src: string;
  alt: string;
}

const HUMAN_VS_COMPUTER_ROUTE: string = "/game?mode=human-vs-computer";
const COMPUTER_VS_COMPUTER_ROUTE: string = "/game?mode=computer-vs-computer";

const Index: React.FunctionComponent = () => {
  const indexText: IndexText = {
    heading: "Carta, sasso, forbice, lucertola e Spock",
    vs: "vs",
  };
  const { heading, vs } = indexText;

  const TABLET_VIEWPORT: number = 768;
  const DESKTOP_VIEWPORT: number = 1024;

  const IMAGE_MOBILE_SIZE: number = 300;
  const IMAGE_TABLET_SIZE: number = 400;

  const [imageSize, setImageSize] = useState<ImageSize>({
    width: IMAGE_MOBILE_SIZE,
    height: IMAGE_MOBILE_SIZE,
  });

  useEffect(() => {
    const updateImageSize = () => {
      const vw = window.innerWidth;

      const breakpoints = [
        {
          breakpoint: TABLET_VIEWPORT,
          size: { width: IMAGE_TABLET_SIZE, height: IMAGE_TABLET_SIZE },
        },
        {
          breakpoint: DESKTOP_VIEWPORT,
          size: { width: IMAGE_MOBILE_SIZE, height: IMAGE_MOBILE_SIZE },
        },
      ];

      let newSize = { width: IMAGE_MOBILE_SIZE, height: IMAGE_MOBILE_SIZE };
      for (const breakpoint of breakpoints) {
        if (vw >= breakpoint.breakpoint) {
          newSize = breakpoint.size;
        }
      }
      setImageSize(newSize);
    };
    window.addEventListener("resize", updateImageSize);
    updateImageSize();

    return () => {
      window.removeEventListener("resize", updateImageSize);
    };
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.heading} data-testid="intro-heading">
        {heading}
      </h1>
      <div className={styles.image}>
        <Image
          src="/intro_img.svg"
          alt="Intro image app"
          width={imageSize.width}
          height={imageSize.height}
          data-testid="intro-image"
          priority={true}
        />
      </div>
      <div className={styles.buttons}>
        <Link
          href={HUMAN_VS_COMPUTER_ROUTE}
          className={styles.buttonHumanComputer}
        >
          <button data-testid="intro-button-human-vs-computer">
            <FontAwesomeIcon icon={faRobot} />
            <span>{vs}</span>
            <FontAwesomeIcon icon={faPerson} />
          </button>
        </Link>
        <Link
          href={COMPUTER_VS_COMPUTER_ROUTE}
          className={styles.buttonComputerComputer}
        >
          <button data-testid="intro-button-computer-vs-computer">
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
