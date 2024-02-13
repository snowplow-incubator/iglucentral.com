import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Schema } from "../data/types";
import { getSchemas } from "../data/schemas";
import Page from "../components/Page";
import SchemaList from "../components/SchemaList";
import Loader from "../components/Loader";
import SchemaModal from "../components/SchemaModal";

const SchemasPage = () => {
  const params = new URLSearchParams(window.location.search);
  const [schemas, setSchemas] = useState<Schema[] | undefined>(undefined);
  const [filterText, setFilterText] = useState(params.get("q") || "");
  const [selectedSchema, setSelectedSchema] = useState<Schema>();

  const handleShowSchema = (schema: Schema) => setSelectedSchema(schema);

  const handleCloseSchema = () => setSelectedSchema(undefined);

  const handleFilterChanged = (filterText: string) => {
    setFilterText(filterText);
    window.history.replaceState("", "", `?q=${filterText}`);
  };

  const handleDeepLink = (schemas: Schema[], linkedSchema: string) => {
    const deepLinked = schemas.find((s) => s.fullPath === linkedSchema);
    if (deepLinked) {
      setSelectedSchema(deepLinked);
      handleFilterChanged(deepLinked.name);
    } else {
      handleFilterChanged("");
    }
  };

  useEffect(() => {
    getSchemas()
      .then((schemas) => {
        setSchemas(schemas);
        const deepLinkedSchema = params.get("dl");
        if (deepLinkedSchema) {
          handleDeepLink(schemas, deepLinkedSchema);
        }
      })
      .catch(() => setSchemas([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          onFilterTextChanged={handleFilterChanged}
          schemas={schemas}
          onSelectSchema={handleShowSchema}
        />
      )}
      <SchemaModal schema={selectedSchema} onClose={handleCloseSchema} />
    </Page>
  );
};

export default SchemasPage;
