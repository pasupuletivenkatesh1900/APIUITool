import App from "../../src/App";
describe("Get Request", () => {
  var accessToken =
    "40dbd65be435a8bec260a4add0119454c3053be472908eddf2e42b09ddd2fbdb";
  it("Get Request", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/posts",
      headers: {
        authorization: "Bearer" + accessToken,
      },
    }).then((res) => {
      console.log(res);
      //cy.mount(<App onPrint={res.body} />);
      cy.mount(<App onPrint={JSON.stringify(res.body)} />);
    });
  });
  it("Get Request 2", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/posts",
      headers: {
        authorization: "Bearer" + accessToken,
      },
    }).then((res) => {
      console.log(res.body.length);
      cy.mount(<App onPrint={JSON.stringify(res.body)} />);
    });
  });
});
