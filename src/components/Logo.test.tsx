import { render } from "@testing-library/react";
import Logo from "./Logo";

const component = () => <Logo />;

describe("rendering", () => {
  it("should match the snapshot", () => {
    const { baseElement } = render(component());
    expect(baseElement).toMatchSnapshot();
  });
});
