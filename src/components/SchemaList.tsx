import { Link, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { Schema } from "../data/types";
import { useTrackInteraction } from "./Snowplow";

type SchemaItemProps = {
  schema: Schema;
};

const DEFAULT_NUMBER_TO_RENDER = 99;
const PAGE_SIZE = 66;

const SchemaItem: FC<SchemaItemProps> = ({ schema }) => {
  const trackInteraction = useTrackInteraction();
  return (
    <Box
      sx={{
        padding: "8px",
        backgroundColor: "#fff",
        borderRadius: "4px",
        overflow: "hidden",
        maxWidth: "100%",
      }}
    >
      <Typography variant={"subtitle1"}>Name</Typography>
      <Link
        sx={{ wordWrap: "break-word", overflowWrap: "break-word" }}
        href={`https://github.com/snowplow/iglu-central/tree/master/schemas/${schema.name}/${schema.type}/${schema.version}`}
        target={"_blank"}
        onClick={() =>
          trackInteraction("click", "link", `${schema.name}-github`)
        }
      >
        {schema.name}
      </Link>
      <Box sx={{ marginTop: 1 }}>
        <Typography variant={"subtitle1"}>Version</Typography>
        <Typography gutterBottom>{schema.version}</Typography>
      </Box>
    </Box>
  );
};

type SchemaListProps = {
  schemas: Schema[];
};

const SchemaList: FC<SchemaListProps> = ({ schemas }) => {
  const [filter, setFilter] = useState("");
  const [renderCount, setRenderCount] = useState(DEFAULT_NUMBER_TO_RENDER);
  const trackInteraction = useTrackInteraction();
  const renderedSchemas = schemas.filter((s) =>
    filter.length === 0
      ? true
      : s.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          justifyContent: {
            md: "flex-end",
          },
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "100%",
            paddingRight: {
              xs: 0,
              md: 4,
            },
          }}
        >
          <TextField
            value={filter}
            onFocus={() => trackInteraction("focus", "textbox", "search")}
            onChange={(e) => setFilter(e.target.value)}
            sx={{
              width: "100%",
              backgroundColor: (theme) => theme.palette.common.white,
            }}
            id="outlined-basic"
            label="Search for a schema"
            variant="outlined"
          />
        </Box>
        <Typography
          variant="h3"
          sx={{
            marginTop: {
              xs: 2,
              md: 0,
            },
          }}
        >
          Showing {Math.min(renderCount, renderedSchemas.length)} of{" "}
          {renderedSchemas.length} schemas
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr 1fr",
          },
          columnGap: 3,
          rowGap: 3,
        }}
      >
        {renderedSchemas.slice(0, renderCount).map((s) => (
          <SchemaItem key={`${s.name}${s.version}`} schema={s} />
        ))}
      </Box>

      {renderedSchemas.length > renderCount && (
        <Box sx={{ paddingTop: 2, display: "flex", justifyContent: "center" }}>
          <Button
            size="large"
            variant={"contained"}
            onClick={() => {
              trackInteraction("click", "button", "view-more");
              setRenderCount(renderCount + PAGE_SIZE);
            }}
          >
            View more
          </Button>
        </Box>
      )}
    </>
  );
};

export default SchemaList;
