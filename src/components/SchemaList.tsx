import { Link, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import { Schema } from "../data/types";

type SchemaItemProps = {
  schema: Schema;
};

const SchemaItem: FC<SchemaItemProps> = ({ schema }) => {
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
      >
        {schema.name}
      </Link>
      <Typography variant={"subtitle1"}>Version</Typography>
      <Typography gutterBottom>{schema.version}</Typography>
    </Box>
  );
};

type SchemaListProps = {
  schemas: Schema[];
};

const SchemaList: FC<SchemaListProps> = ({ schemas }) => {
  const [filter, setFilter] = useState("");
  const [renderCount, setRenderCount] = useState(21);
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
            variant={"contained"}
            onClick={() => setRenderCount(renderCount + 21)}
          >
            View more
          </Button>
        </Box>
      )}
    </>
  );
};

export default SchemaList;
