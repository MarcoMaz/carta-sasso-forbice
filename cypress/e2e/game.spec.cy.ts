export const HUMAN_VS_COMPUTER_URL: string =
  "http://localhost:3000/game?mode=human-vs-computer";

export const COMPUTER_VS_COMPUTER_URL: string =
  "http://localhost:3000/game?mode=computer-vs-computer";

const fixturePaper = 0.1;
const fixtureRock = 0.4;
const fixtureScissors = 0.7;

const HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR = "[data-testid=button-carta]";
const HUMAN_VS_COMPUTER_BUTTON_SASSO_SELECTOR = "[data-testid=button-sasso]";
const HUMAN_VS_COMPUTER_BUTTON_FORBICE_SELECTOR =
  "[data-testid=button-forbice]";

const COMPUTER_VS_COMPUTER_PERSONA1_HEADING_SELECTOR =
  "[data-testid=persona1-heading]";
const COMPUTER_VS_COMPUTER_PERSONA2_HEADING_SELECTOR =
  "[data-testid=persona2-heading]";

const HUMAN_VS_COMPUTER_PERSONA1_HEADING_SELECTOR =
  "[data-testid=persona1-heading]";
const HUMAN_VS_COMPUTER_PERSONA1_SCORE_SELECTOR =
  "[data-testid=persona1-score]";
const HUMAN_VS_COMPUTER_PERSONA2_HEADING_SELECTOR =
  "[data-testid=persona2-heading]";
const HUMAN_VS_COMPUTER_PERSONA2_SCORE_SELECTOR =
  "[data-testid=persona2-score]";
const HUMAN_VS_COMPUTER_VERSUS_SELECTOR = "[data-testid=versus]";
const HUMAN_VS_COMPUTER_CTA_PARAGRAPH_SELECTOR = "[data-testid=cta-paragraph]";

const HUMAN_VS_COMPUTER_DIALOG_SELECTOR = "[data-testid=dialog]";
const HUMAN_VS_COMPUTER_DIALOG_PERSONA1_HEADING_SELECTOR =
  "[data-testid=dialog-persona1-heading]";
const HUMAN_VS_COMPUTER_DIALOG_PERSONA2_HEADING_SELECTOR =
  "[data-testid=dialog-persona2-heading]";

const HUMAN_VS_COMPUTER_BUTTON_PLAY_AGAIN_SELECTOR =
  "[data-testid=button-play-again";
const HUMAN_VS_COMPUTER_BUTTON_RESET_SELECTOR = "[data-testid=button-reset";

const INDEX_BUTTON_HUMAN_VS_COMPUTER_SELECTOR =
  "[data-testid=intro-button-human-vs-computer]";

describe("Comouter vs Computer", () => {
  beforeEach(() => {
    cy.visit(COMPUTER_VS_COMPUTER_URL);
  });

  it("should display the persona1 heading", () => {
    cy.get(COMPUTER_VS_COMPUTER_PERSONA1_HEADING_SELECTOR).should("be.visible");
  });

  it("should display the persona2 heading", () => {
    cy.get(COMPUTER_VS_COMPUTER_PERSONA2_HEADING_SELECTOR).should("be.visible");
  });
});

describe("Human vs Computer", () => {
  beforeEach(() => {
    cy.visit(HUMAN_VS_COMPUTER_URL);
  });

  it("should display the persona1 heading", () => {
    cy.get(HUMAN_VS_COMPUTER_PERSONA1_HEADING_SELECTOR).should("be.visible");
    cy.contains("Computer:").should("be.visible");
  });

  it("should display the persona2 heading", () => {
    cy.get(HUMAN_VS_COMPUTER_PERSONA2_HEADING_SELECTOR).should("be.visible");
    cy.contains("Tu:").should("be.visible");
  });

  it("should display 'VS'", () => {
    cy.get(HUMAN_VS_COMPUTER_VERSUS_SELECTOR).should("be.visible");
    cy.contains("VS").should("be.visible");
  });

  it("should display 'Scegli:'", () => {
    cy.get(HUMAN_VS_COMPUTER_CTA_PARAGRAPH_SELECTOR).should("be.visible");
    cy.contains("Scegli:").should("be.visible");
  });

  it("should display the button 'carta'", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).should("be.visible");
  });

  it("should display the button 'sasso'", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_SASSO_SELECTOR).should("be.visible");
  });

  it("should display the button 'forbice'", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_FORBICE_SELECTOR).should("be.visible");
  });
});

describe("Game", () => {
  beforeEach(() => {
    cy.visit(HUMAN_VS_COMPUTER_URL);
  });

  it("should result in a tie between 'carta' and 'carta'", () => {
    cy.window().then((win) => {
      win.Math.random = () => fixturePaper;
    });
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.contains("Pari!").should("be.visible");
  });

  it("should result in 'sasso' losing to 'carta'", () => {
    cy.window().then((win) => {
      win.Math.random = () => fixturePaper;
    });
    cy.get(HUMAN_VS_COMPUTER_BUTTON_SASSO_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.contains("Vince il computer!").should("be.visible");
  });

  it("should result in 'forbice' winning to 'carta'", () => {
    cy.window().then((win) => {
      win.Math.random = () => fixturePaper;
    });
    cy.get(HUMAN_VS_COMPUTER_BUTTON_FORBICE_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.contains("Hai vinto!").should("be.visible");
  });

  it("should result in 'carta' winning to 'sasso'", () => {
    cy.window().then((win) => {
      win.Math.random = () => fixtureRock;
    });
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.contains("Hai vinto!").should("be.visible");
  });

  it("should result in a tie between 'sasso' and 'sasso'", () => {
    cy.window().then((win) => {
      win.Math.random = () => fixtureRock;
    });
    cy.get(HUMAN_VS_COMPUTER_BUTTON_SASSO_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.contains("Pari!").should("be.visible");
  });

  it("should result in 'forbice' losing to 'sasso'", () => {
    cy.window().then((win) => {
      win.Math.random = () => fixtureRock;
    });
    cy.get(HUMAN_VS_COMPUTER_BUTTON_FORBICE_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.contains("Vince il computer!").should("be.visible");
  });

  it("should result in 'carta' losing to 'forbice'", () => {
    cy.window().then((win) => {
      win.Math.random = () => fixtureScissors;
    });
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.contains("Vince il computer!").should("be.visible");
  });

  it("should result in 'sasso' winning to 'forbice'", () => {
    cy.window().then((win) => {
      win.Math.random = () => fixtureScissors;
    });
    cy.get(HUMAN_VS_COMPUTER_BUTTON_SASSO_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.contains("Hai vinto!").should("be.visible");
  });

  it("should result in a tie between 'forbice' and 'forbice'", () => {
    cy.window().then((win) => {
      win.Math.random = () => fixtureScissors;
    });
    cy.get(HUMAN_VS_COMPUTER_BUTTON_FORBICE_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.contains("Pari!").should("be.visible");
  });
});

describe("Dialog", () => {
  beforeEach(() => {
    cy.visit(HUMAN_VS_COMPUTER_URL);
  });

  it("should display the persona1 heading", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.get(HUMAN_VS_COMPUTER_DIALOG_PERSONA1_HEADING_SELECTOR).should(
      "contain.text",
      "Il computer ha scelto:"
    );
  });

  it("should display the persona2 heading", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.get(HUMAN_VS_COMPUTER_DIALOG_PERSONA2_HEADING_SELECTOR).should(
      "contain.text",
      "Tu hai scelto:"
    );
  });

  it("should display the button 'gioca di nuovo'", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.get(HUMAN_VS_COMPUTER_BUTTON_PLAY_AGAIN_SELECTOR).should("be.visible");
  });

  it("should navigate to route /game when clicking the button 'gioca di nuovo'", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.get(HUMAN_VS_COMPUTER_BUTTON_PLAY_AGAIN_SELECTOR).click();
    cy.location("pathname").should("eq", "/game");
  });

  it("should display the button 'reset'", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.get(HUMAN_VS_COMPUTER_BUTTON_RESET_SELECTOR).should("be.visible");
  });

  it("should navigate to route / when clicking the button 'reset'", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.get(HUMAN_VS_COMPUTER_BUTTON_RESET_SELECTOR).click();
    cy.location("pathname").should("eq", "/");
  });

  it("should reset the score when hitting 'reset'", () => {
    cy.get(HUMAN_VS_COMPUTER_BUTTON_CARTA_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_DIALOG_SELECTOR).should("be.visible");
    cy.get(HUMAN_VS_COMPUTER_BUTTON_RESET_SELECTOR).click();
    cy.location("pathname").should("eq", "/");
    cy.get(INDEX_BUTTON_HUMAN_VS_COMPUTER_SELECTOR).click();
    cy.get(HUMAN_VS_COMPUTER_PERSONA1_SCORE_SELECTOR).should(
      "contain.text",
      "0"
    );
    cy.get(HUMAN_VS_COMPUTER_PERSONA2_SCORE_SELECTOR).should(
      "contain.text",
      "0"
    );
  });
});
