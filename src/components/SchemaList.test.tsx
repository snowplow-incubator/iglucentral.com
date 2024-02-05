import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
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
        fullPath: "",
      },
      {
        fullName: "com.amazon.aws.cloudfront/wd_access_log",
        name: "wd_access_log",
        type: "jsonschema",
        vendor: "com.amazon.aws.cloudfront",
        version: "1-0-0",
        fullPath: "",
      },
      {
        fullName: "com.amazon.aws.cloudfront/wd_access_log",
        name: "wd_access_log",
        type: "jsonschema",
        vendor: "com.amazon.aws.cloudfront",
        version: "1-0-1",
        fullPath: "",
      },
      {
        fullName: "com.amazon.aws.lambda/s3_notification_event",
        name: "s3_notification_event",
        type: "jsonschema",
        vendor: "com.amazon.aws.lambda",
        version: "1-0-0",
        fullPath: "",
      },
    ],
    filterText: "",
    onFilterTextChanged: jest.fn(),
  };

  beforeEach(() => {
    (useTrackInteraction as jest.Mock).mockReturnValue(() => jest.fn());
  });

  it("should not explode on render", () => {
    render(
      <MuiThemeProvider theme={createTheme(theme)}>
        <SchemaList {...defaultProps} onSelectSchema={jest.fn()} />
      </MuiThemeProvider>
    );

    expect(screen.getByText("install")).toBeVisible();
    expect(screen.getByText("com.adjust")).toBeVisible();
    expect(screen.getAllByText("1-0-0").length).toEqual(3);
  });

  it("should render correctly given no schemas", () => {
    render(
      <MuiThemeProvider theme={createTheme(theme)}>
        <SchemaList {...defaultProps} schemas={[]} onSelectSchema={jest.fn()} />
      </MuiThemeProvider>
    );

    expect(screen.getByText("No schemas found")).toBeInTheDocument();
  });

  it("should render filtered schemas", () => {
    render(
      <MuiThemeProvider theme={createTheme(theme)}>
        <SchemaList
          {...defaultProps}
          filterText="wd_access_log"
          onSelectSchema={jest.fn()}
        />
      </MuiThemeProvider>
    );

    expect(screen.queryByText("install")).not.toBeInTheDocument();
    expect(screen.getAllByText("wd_access_log").length).toEqual(2);
  });

  it("should render correctly if no schemas match filter text", () => {
    render(
      <MuiThemeProvider theme={createTheme(theme)}>
        <SchemaList
          {...defaultProps}
          filterText="name_not_in_list"
          onSelectSchema={jest.fn()}
        />
      </MuiThemeProvider>
    );

    expect(screen.getByText("No schemas found")).toBeVisible();
  });
});
