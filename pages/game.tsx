import React from 'react';
import { useRouter } from 'next/router';

import HumanVsComputer from "../src/app/components/HumanVsComputer"
import ComputerVsComputer from "../src/app/components/ComputerVsComputer"

const Game: React.FunctionComponent = () => {
  const router = useRouter();
  const { mode } = router.query;

  return (
    <section>
      {mode === 'human-vs-computer' && <HumanVsComputer />}
      {mode === 'computer-vs-computer' && <ComputerVsComputer />}
    </section>
  );
};

export default Game;
