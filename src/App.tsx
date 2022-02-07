import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Collector, SnowplowProvider } from "./components/Snowplow";
import SchemasPage from "./containers/SchemasPage";

const collector: Collector = {
  name: "ops1",
  endpoint: "collector.snowplowanalytics.com",
  cookieName: "_sp5_",
};

const App = () => {
  return (
    <SnowplowProvider appId={"iglu-central"} collectors={[collector]}>
      <ThemeProvider theme={theme}>
        <SchemasPage />
      </ThemeProvider>
    </SnowplowProvider>
  );
};

export default App;
