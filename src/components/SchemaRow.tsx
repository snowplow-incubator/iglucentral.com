import {
  Box,
  Link,
  Typography,
  TableRow,
  TableCell,
  TableHead,
  Alert,
  AlertTitle,
} from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Schema } from "../data/types";
import { useTrackInteraction } from "./Snowplow";
import GitHubIcon from "@mui/icons-material/GitHub";
import SourceIcon from "@mui/icons-material/Source";

export const SchemaHeaderRow = () => (
  <TableHead
    sx={{
      textTransform: "uppercase",
      display: {
        xs: "none",
        lg: "revert",
      },
    }}
  >
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Vendor</TableCell>
      <TableCell>Version</TableCell>
      <TableCell>View</TableCell>
    </TableRow>
  </TableHead>
);

export const SchemaEmptyRow: FC = () => (
  <TableRow
    sx={{
      display: {
        xs: "block",
        lg: "revert",
      },
      padding: 2,
    }}
  >
    <TableCell
      sx={{
        display: {
          xs: "block",
          lg: "revert",
        },
        border: 0,
      }}
      colSpan={5}
    >
      <Alert severity="info">
        <AlertTitle>No schemas found</AlertTitle>No schemas found with the
        current query.
      </Alert>
    </TableCell>
  </TableRow>
);

const SchemaCell: FC<PropsWithChildren<{ label: string }>> = ({
  label,
  children,
}) => {
  return (
    <TableCell
      sx={{
        padding: {
          xs: 0,
          lg: 2,
        },
        display: {
          xs: "grid",
          lg: "revert",
        },
        gridTemplateColumns: "25% 1fr",
        marginBottom: {
          xs: 1,
          lg: "revert",
        },
        borderBottomWidth: {
          xs: 0,
          lg: "1px",
        },
      }}
    >
      <Typography
        variant={"subtitle1"}
        sx={{
          textTransform: "uppercase",
          display: {
            xs: "block",
            lg: "none",
          },
        }}
      >
        {label}
      </Typography>
      {children}
    </TableCell>
  );
};

type SchemaRowProps = {
  schema: Schema;
};

const SchemaRow: FC<SchemaRowProps> = ({ schema }) => {
  const trackInteraction = useTrackInteraction();
  return (
    <TableRow
      sx={{
        display: {
          xs: "block",
          lg: "revert",
        },
        padding: 2,
      }}
    >
      <SchemaCell label={"Name"}>
        <Typography variant={"body1"}>{schema.name}</Typography>
      </SchemaCell>

      <SchemaCell label={"Vendor"}>
        <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
          <Typography
            sx={{
              overflowWrap: "break-word",
            }}
            variant={"body1"}
          >
            {schema.vendor}
          </Typography>
        </Box>
      </SchemaCell>

      <SchemaCell label={"Version"}>
        <Typography variant={"body1"}>{schema.version}</Typography>
      </SchemaCell>

      <SchemaCell label={"View"}>
        <Box display={"flex"} sx={{ columnGap: 3 }}>
          <Link
            href={`https://github.com/snowplow/iglu-central/tree/master/schemas/${schema.fullName}/${schema.type}/${schema.version}`}
            target={"_blank"}
            onClick={() =>
              trackInteraction("click", "link", `${schema.name}-github`)
            }
          >
            <Box display={"flex"} alignItems={"center"} sx={{ columnGap: 1 }}>
              <GitHubIcon />
              Github
            </Box>
          </Link>
          <Link
            href={`/schemas/${schema.fullName}/${schema.type}/${schema.version}`}
            target={"_blank"}
            onClick={() =>
              trackInteraction("click", "link", `${schema.name}-raw`)
            }
          >
            <Box display={"flex"} alignItems={"center"} sx={{ columnGap: 1 }}>
              <SourceIcon />
              Raw
            </Box>
          </Link>
        </Box>
      </SchemaCell>
    </TableRow>
  );
};

export default SchemaRow;
