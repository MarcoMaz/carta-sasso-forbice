export const getRandomChoice = (choices: string[]) => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

export const determineWinner = (user1: string, user2: string) => {
  if (user1 === user2) {
    return "Pari!";
  } else if (
    (user1 === "sasso" && user2 === "forbice") ||
    (user1 === "forbice" && user2 === "carta") ||
    (user1 === "carta" && user2 === "sasso")
  ) {
    return "Hai vinto!";
  } else {
    return "Vince il computer!";
  }
};


