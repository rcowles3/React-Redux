import { renderComponent, expect } from "../test_helper";
import App from "../../src/components/app";

// Use 'describe' to group together simliar test, what we are testing
describe("App", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  // Use 'it' to test a single attribute of a target, what we are testing
  // ComponentBox component test
  it("Shows the CommentBox component.", () => {
    expect(component.find(".CommentBox")).to.exist;
  });

  // CommentList component test!
  it("Shows the CommentList component", () => {
    expect(component.find(".CommentList")).to.exist;
  });
});
