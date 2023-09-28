export const INDEX_URL: string = "http://localhost:3000/";

const INDEX_HEADING_SELECTOR: string = "[data-testid=intro-heading]";
const INDEX_IMAGE_SELECTOR: string = "[data-testid=intro-image]";
const INDEX_BUTTON_HUMAN_VS_COMPUTER_SELECTOR: string =
  "[data-testid=intro-button-human-vs-computer]";
const INDEX_BUTTON_COMPUTER_VS_COMPUTER_SELECTOR: string =
  "[data-testid=intro-button-computer-vs-computer]";

describe("Index", () => {
  beforeEach(() => {
    cy.visit(INDEX_URL);
  });

  it("should display the heading", () => {
    cy.get(INDEX_HEADING_SELECTOR).should("contain", "Carta, sasso e forbice");
  });

  it("should display the image", () => {
    cy.get(INDEX_IMAGE_SELECTOR).should("be.visible");
  });

  it("should display the button 'human vs computer'", () => {
    cy.get(INDEX_BUTTON_HUMAN_VS_COMPUTER_SELECTOR).should("be.visible");
  });

  it("should display the button 'computer vs computer'", () => {
    cy.get(INDEX_BUTTON_COMPUTER_VS_COMPUTER_SELECTOR).should("be.visible");
  });

  it("should navigate to route /game when clicking the button 'human vs computer'", () => {
    cy.get(INDEX_BUTTON_HUMAN_VS_COMPUTER_SELECTOR).click();
    cy.location("pathname").should("eq", "/game");
  });

  it("should navigate to route /game when clicking the button 'computer vs computer'", () => {
    cy.get(INDEX_BUTTON_COMPUTER_VS_COMPUTER_SELECTOR).click();
    cy.location("pathname").should("eq", "/game");
  });
});
