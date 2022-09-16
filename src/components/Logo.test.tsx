import { render } from "@testing-library/react";
import Logo from "./Logo";

const component = () => <Logo />;

describe("rendering", () => {
  it("should match the snapshot", () => {
    const tree = render(component());
    expect(tree.baseElement).toMatchSnapshot();
  });
});
