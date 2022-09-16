import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import theme from "../theme";
import Page from "./Page";
import { useTrackInteraction, useTrackPageView } from "./Snowplow";

jest.mock("./Snowplow", () => {
  return {
    ...jest.requireActual<Object>("./Snowplow"),
    useTrackInteraction: jest.fn(),
    useTrackPageView: jest.fn(),
  };
});

describe("Page", () => {
  beforeEach(() => {
    (useTrackInteraction as jest.Mock).mockReturnValue(() => jest.fn());
    (useTrackPageView as jest.Mock).mockReturnValue(() => jest.fn());
  });

  it("should not explode on render", () => {
    render(
      <MuiThemeProvider theme={createTheme(theme)}>
        <Page />
      </MuiThemeProvider>
    );

    expect(screen.getByText("Iglu Central")).toBeVisible();
  });
});
