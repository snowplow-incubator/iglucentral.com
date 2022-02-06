import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Schema } from "../data/types";
import { getSchemas } from "../data/schemas";
import Page from "../components/Page";
import SchemaList from "../components/SchemaList";
import Loader from "../components/Loader";

const SchemasPage = () => {
  const [schemas, setSchemas] = useState<Schema[] | undefined>(undefined);

  useEffect(() => {
    getSchemas()
      .then((schemas) => setSchemas(schemas))
      .catch(() => setSchemas([]));
  }, []);

  return (
    <Page>
      {!schemas ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </Box>
      ) : (
        <SchemaList schemas={schemas} />
      )}
    </Page>
  );
};

export default SchemasPage;
