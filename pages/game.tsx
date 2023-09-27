import { useRouter } from 'next/router';
import React from 'react';

import HumanVsComputer from "../src/app/components/HumanVsComputer"
import ComputerVsComputer from "../src/app/components/ComputerVsComputer"

const Game: React.FunctionComponent = () => {
  const router = useRouter();
  const { mode } = router.query;

  return (
    <div>
      {mode === 'human-vs-computer' && <HumanVsComputer />}
      {mode === 'computer-vs-computer' && <ComputerVsComputer />}
    </div>
  );
};

export default Game;
