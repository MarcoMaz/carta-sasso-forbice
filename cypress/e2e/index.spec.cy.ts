export const INDEX_URL: string = "http://localhost:3000/";

const INDEX_HEADING_ELEMENT: string = "[data-testid=intro-heading]";
const INDEX_IMAGE_ELEMENT: string = "[data-testid=intro-image]";
const INDEX_BUTTON_HUMAN_VS_COMPUTER_ELEMENT: string =
  "[data-testid=intro-button-human-vs-computer]";
const INDEX_BUTTON_COMPUTER_VS_COMPUTER_ELEMENT: string =
  "[data-testid=intro-button-computer-vs-computer]";

describe("Index", () => {
  beforeEach(() => {
    cy.visit(INDEX_URL);
  });
  it("should display the heading", () => {
    cy.get(INDEX_HEADING_ELEMENT).should("contain", "Carta, sasso e forbice");
  });
  it("should display the image", () => {
    cy.get(INDEX_IMAGE_ELEMENT).should("be.visible");
  });
  it("should display the button human vs computer", () => {
    cy.get(INDEX_BUTTON_HUMAN_VS_COMPUTER_ELEMENT).should("be.visible");
  });
  it("should display the button computer vs computer", () => {
    cy.get(INDEX_BUTTON_COMPUTER_VS_COMPUTER_ELEMENT).should("be.visible");
  });
  it("Should navigate to route /game when clicking the button human vs computer", () => {
    cy.get(INDEX_BUTTON_HUMAN_VS_COMPUTER_ELEMENT).click();
    cy.location("pathname").should("eq", "/game");
  });
  it("Should navigate to route /game when clicking the button computer vs computer", () => {
    cy.get(INDEX_BUTTON_COMPUTER_VS_COMPUTER_ELEMENT).click();
    cy.location("pathname").should("eq", "/game");
  });
});
