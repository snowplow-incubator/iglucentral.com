import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import theme from "../theme";
import SchemaList from "./SchemaList";
import { useTrackInteraction } from "./Snowplow";

jest.mock("./Snowplow", () => {
  return {
    ...jest.requireActual<Object>("./Snowplow"),
    useTrackInteraction: jest.fn(),
  };
});

describe("Schema List", () => {
  const defaultProps = {
    schemas: [
      {
        fullName: "com.adjust/install",
        name: "install",
        vendor: "com.adjust",
        version: "1-0-0",
        type: "jsonschema",
      },
      {
        fullName: "com.amazon.aws.cloudfront/wd_access_log",
        name: "wd_access_log",
        type: "jsonschema",
        vendor: "com.amazon.aws.cloudfront",
        version: "1-0-0",
      },
      {
        fullName: "com.amazon.aws.cloudfront/wd_access_log",
        name: "wd_access_log",
        type: "jsonschema",
        vendor: "com.amazon.aws.cloudfront",
        version: "1-0-1",
      },
      {
        fullName: "com.amazon.aws.lambda/s3_notification_event",
        name: "s3_notification_event",
        type: "jsonschema",
        vendor: "com.amazon.aws.lambda",
        version: "1-0-0",
      },
    ],
    filterText: "",
    onFilterTextChanged: jest.fn(),
  };

  beforeEach(() => {
    (useTrackInteraction as jest.Mock).mockReturnValue(() => jest.fn());
  });

  it("should not explode on render", () => {
    const { getByText, getAllByText } = render(
      <MuiThemeProvider theme={createTheme(theme)}>
        <SchemaList {...defaultProps} />
      </MuiThemeProvider>
    );

    expect(getByText("install")).toBeVisible();
    expect(getByText("com.adjust")).toBeVisible();
    expect(getAllByText("1-0-0").length).toEqual(3);
  });

  it("should render correctly given no schemas", () => {
    const { getByText } = render(
      <MuiThemeProvider theme={createTheme(theme)}>
        <SchemaList {...defaultProps} schemas={[]} />
      </MuiThemeProvider>
    );

    expect(getByText("No schemas found")).toBeInTheDocument();
  });

  it("should render filtered schemas", () => {
    const { getAllByText, queryByText } = render(
      <MuiThemeProvider theme={createTheme(theme)}>
        <SchemaList {...defaultProps} filterText="wd_access_log" />
      </MuiThemeProvider>
    );

    expect(queryByText("install")).not.toBeInTheDocument();
    expect(getAllByText("wd_access_log").length).toEqual(2);
  });

  it("should render correctly if no schemas match filter text", () => {
    const { getByText } = render(
      <MuiThemeProvider theme={createTheme(theme)}>
        <SchemaList {...defaultProps} filterText="name_not_in_list" />
      </MuiThemeProvider>
    );

    expect(getByText("No schemas found")).toBeVisible();
  });
});
