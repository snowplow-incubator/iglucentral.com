import { render } from "@testing-library/react";
import Loader from "./Loader";

const component = () => <Loader />;

describe("rendering", () => {
  it("should match the snapshot", () => {
    const tree = render(component());
    expect(tree.baseElement).toMatchSnapshot();
  });
});
