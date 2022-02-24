import {
  Box,
  TextField,
  Typography,
  Button,
  Table,
  TableBody,
} from "@mui/material";
import { FC, useState } from "react";
import { Schema } from "../data/types";
import { useTrackInteraction } from "./Snowplow";
import SchemaRow, { SchemaHeaderRow } from "./SchemaRow";

const DEFAULT_NUMBER_TO_RENDER = 50;
const PAGE_SIZE = 50;

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
      : s.fullName.toLowerCase().includes(filter.toLowerCase())
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
          paddingX: 1,
          paddingY: 3,
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
      <Table
        sx={{
          maxWidth: "100%",
          overflow: "hidden",
          display: {
            xs: "block",
            lg: "revert",
          },
        }}
      >
        <SchemaHeaderRow />
        <TableBody
          sx={{
            "&>tr:nth-of-type(odd)": {
              backgroundColor: {
                xs: "#F0EBF8",
                lg: "revert",
              },
            },
            display: {
              xs: "block",
              lg: "revert",
            },
          }}
        >
          {renderedSchemas.slice(0, renderCount).map((s) => (
            <SchemaRow key={`${s.fullName}${s.version}`} schema={s} />
          ))}
        </TableBody>
      </Table>

      {renderedSchemas.length > renderCount && (
        <Box
          sx={{
            marginBottom: 2,
            paddingTop: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
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
