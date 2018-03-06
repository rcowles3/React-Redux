import { renderComponent, expect } from "../test_helper";
import CommentBox from "../../src/components/commentBox";

// Use 'describe' to group together simliar test, what we are testing
describe("CommentBox", () => {
  let component; // CommentBox

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it("Has the correct class, CommentBox", () => {
    // const component = renderComponent(CommentBox);
    expect(component).to.have.class("CommentBox");
  });
  // Use 'it' to test a single attribute of a target, what we are testing
  it("Has text area.", () => {
    // Create and instance of App component
    // const component = renderComponent(CommentBox);
    // // Use 'expect' to make an 'aasertion' about a target, what we are testing
    expect(component.find("textarea")).to.exist;
  });

  it("Has a button.", () => {
    // Create and instance of App component
    // const component = renderComponent(CommentBox);

    // Use 'expect' to make an 'aasertion' about a target, what we are testing
    expect(component.find("button")).to.exist;
  });

  describe("Entering data into textarea", () => {
    beforeEach(() => {
      component.find("textarea").simulate("change", "new comment");
    });

    it("Text has been entered", () => {
      expect(component.find("textarea")).to.have.value("new comment");
    });

    it("Clears input on Submit", () => {
      component.simulate("submit");
      expect(component.find("textarea")).to.have.value("");
    });
  });
});
