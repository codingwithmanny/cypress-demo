/**
 * Login - Successes
 */
context("Login", () => {
  /**
   * Validates Window Location
   */
  it("should redirect to login page if not logged in", () => {
    cy.visit("/");
    cy.location("pathname").should("include", "login");
  });

  /**
   * Incorrect creds
   */
  it("should show error message with incorrect credentials", function () {
    cy.get(
      ".row > .col-4 > form > .form-group:nth-child(1) > .form-control"
    ).click();

    cy.get(
      ".row > .col-4 > form > .form-group:nth-child(1) > .form-control"
    ).type("wrong@user.com");

    cy.get(
      ".row > .col-4 > form > .form-group:nth-child(2) > .form-control"
    ).type("password");

    cy.get(".row > .col-4 > form > .form-group > .btn").click();

    cy.get(".row > .col-4 > form > .form-group > .alert").click();
  });

  /**
   *  Copied from Chrome extension
   */
  it("should login correctly and logout", function () {
    // cy.viewport(1920, 978);

    cy.visit("/login");

    cy.get(
      ".row > .col-4 > form > .form-group:nth-child(1) > .form-control"
    ).click();

    cy.get(
      ".row > .col-4 > form > .form-group:nth-child(1) > .form-control"
    ).type("test@test.com");

    cy.get(
      ".row > .col-4 > form > .form-group:nth-child(2) > .form-control"
    ).type("asdf1234");

    cy.get(".row > .col-4 > form > .form-group > .btn").click();

    cy.get("div > .container > .row > .col-8 > .btn").click();
  });
});
