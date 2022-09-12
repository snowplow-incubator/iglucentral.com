import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Schema } from "../data/types";
import { getSchemas } from "../data/schemas";
import Page from "../components/Page";
import SchemaList from "../components/SchemaList";
import Loader from "../components/Loader";

const SchemasPage = () => {
  const [schemas, setSchemas] = useState<Schema[] | undefined>(undefined);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    getSchemas()
      .then((schemas) => setSchemas(schemas))
      .catch(() => setSchemas([]));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFilterText(params.get("q") || "");
  }, []);

  return (
    <Page>
      {!schemas ? (
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Loader />
        </Box>
      ) : (
        <SchemaList
          filterText={filterText}
          onFilterTextChanged={(f) => {
            setFilterText(f);
            window.history.replaceState("", "", `?q=${f}`);
          }}
          schemas={schemas}
        />
      )}
    </Page>
  );
};

export default SchemasPage;
