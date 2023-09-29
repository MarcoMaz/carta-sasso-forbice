export const getRandomChoice = (choices: string[]) => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

export const determineWinner = (user1: string, user2: string) => {
  if (user1 === user2) {
    return "Pari!";
  } else if (
    (user1 === "sasso" && (user2 === "forbice" || user2 === "lucertola")) ||
    (user1 === "forbice" && (user2 === "carta" || user2 === "lucertola")) ||
    (user1 === "carta" && (user2 === "sasso" || user2 === "spock")) ||
    (user1 === "spock" && (user2 === "forbice" || user2 === "sasso")) ||
    (user1 === "lucertola" && (user2 === "carta" || user2 === "spock"))
  ) {
    return "Hai vinto!";
  } else {
    return "Vince il computer!";
  }
};


