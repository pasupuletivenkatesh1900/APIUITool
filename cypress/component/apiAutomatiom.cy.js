import App from "../../src/App";
describe("Get Request", () => {
  it("Get Request", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((res1) => {
      cy.request({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      }).then((res2) => {
        let statusValue = expect(res1.status).to.equal(res2.status);
        expect(res1.body).to.deep.equal(res2.body);
        cy.mount(
          <App
            onPrint1={JSON.stringify(res1.body)}
            onPrint2={JSON.stringify(res2.body)}
            someValue={statusValue.__flags.object}
          />
        );
      });
    });
  });
});
