import { render } from "@testing-library/react";
import Loader from "./Loader";

const component = () => <Loader />;

describe("rendering", () => {
  it("should match the snapshot", () => {
    const { baseElement } = render(component());
    expect(baseElement).toMatchSnapshot();
  });
});
