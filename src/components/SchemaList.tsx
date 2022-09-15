import {
  Box,
  Button,
  InputAdornment,
  Table,
  TableBody,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useMemo, useState, memo } from "react";
import { Schema } from "../data/types";
import { useTrackInteraction } from "./Snowplow";
import SchemaRow, { SchemaHeaderRow, SchemaEmptyRow } from "./SchemaRow";
import { useDebounce } from "use-debounce";
import { SearchIcon } from "./icons";

const DEFAULT_NUMBER_TO_RENDER = 50;
const PAGE_SIZE = 50;

const SchemaTable: FC<{ schemas: Schema[] }> = ({ schemas }) => (
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
        "&>tr:nth-of-type(even)": {
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
      {schemas.length === 0 ? (
        <SchemaEmptyRow />
      ) : (
        schemas.map((s) => (
          <SchemaRow key={`${s.fullName}${s.version}`} schema={s} />
        ))
      )}
    </TableBody>
  </Table>
);

const MemoizedSchemaTable = memo(SchemaTable);

type SchemaListProps = {
  schemas: Schema[];
  filterText: string;
  onFilterTextChanged: (filterText: string) => void;
};
const SchemaList: FC<SchemaListProps> = ({
  schemas,
  filterText,
  onFilterTextChanged,
}) => {
  const [filter] = useDebounce(filterText, 200);
  const [renderCount, setRenderCount] = useState(DEFAULT_NUMBER_TO_RENDER);
  const trackInteraction = useTrackInteraction();

  const filteredSchemas = useMemo(
    () =>
      schemas.filter((s) =>
        filter.length === 0
          ? true
          : s.fullName.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, schemas]
  );

  const slicedSchemas = useMemo(
    () => filteredSchemas.slice(0, renderCount),
    [filteredSchemas, renderCount]
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
          paddingX: {
            xl: 0,
            xs: 1,
            sm: 1,
            md: 1,
          },
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
            value={filterText}
            onFocus={() => trackInteraction("focus", "textbox", "search")}
            onChange={({ target: { value } }) => {
              onFilterTextChanged(value);
            }}
            sx={{
              width: "100%",
              backgroundColor: (theme) => theme.palette.common.white,
            }}
            placeholder="Search for a schema (Eg. Marketing automation, eCommerce)"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    fontSize="small"
                    sx={{ color: (t) => t.palette.primary.main }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: "#475467",
            marginTop: {
              xs: 2,
              md: 0,
            },
          }}
        >
          Showing {Math.min(renderCount, filteredSchemas.length)} of{" "}
          {filteredSchemas.length} schemas
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: {
            lg: "white",
          },
          padding: {
            lg: 3,
          },
          borderRadius: {
            lg: "4px",
          },
          boxShadow: {
            lg: "0px 0px 2px 0px rgb(0 0 0 / 16%)",
          },
        }}
      >
        <Typography
          sx={{
            marginLeft: {
              xs: 2,
              lg: 0,
            },
            marginBottom: 2,
          }}
          variant="h3"
        >
          Schema list
        </Typography>
        <MemoizedSchemaTable schemas={slicedSchemas} />
      </Box>
      {filteredSchemas.length > renderCount && (
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
