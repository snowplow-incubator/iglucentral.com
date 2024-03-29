import { FC, PropsWithChildren } from "react";
import {
  Box,
  Link,
  Typography,
  TableRow,
  TableCell,
  TableHead,
  Alert,
  AlertTitle,
  Button,
} from "@mui/material";
import { Schema } from "../data/types";
import { ExternalLinkIcon, EyeIcon, ShareIcon } from "./icons";
import { useTrackInteraction } from "./Snowplow";
import Copy from "./Copy";
import { generateShareLink } from "../data/schemas";

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
      <TableCell>Actions</TableCell>
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
  onSelectSchema: (schema: Schema) => void;
};

const SchemaRow: FC<SchemaRowProps> = ({ schema, onSelectSchema }) => {
  const trackInteraction = useTrackInteraction();
  return (
    <>
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
          <Link
            sx={{ cursor: "pointer" }}
            onClick={() => onSelectSchema(schema)}
          >
            <Typography variant={"body1"}>{schema.name}</Typography>
          </Link>
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
          <Box display={"flex"} sx={{ columnGap: 1 }}>
            <Button
              startIcon={<ExternalLinkIcon fontSize="medium" />}
              href={`https://github.com/snowplow/iglu-central/tree/master/schemas/${schema.fullName}/${schema.type}/${schema.version}`}
              target={"_blank"}
              onClick={() =>
                trackInteraction("click", "link", `${schema.name}-github`)
              }
            >
              Github
            </Button>
            <Button
              startIcon={<EyeIcon fontSize="medium" />}
              onClick={() => {
                trackInteraction("click", "link", `${schema.name}-view`);
                onSelectSchema(schema);
              }}
            >
              View
            </Button>
            <Copy
              text={generateShareLink(schema)}
              startIcon={<ShareIcon fontSize="medium" />}
              onCopy={() => {
                trackInteraction("click", "link", `${schema.name}-share`);
              }}
            >
              Share
            </Copy>
          </Box>
        </SchemaCell>
      </TableRow>
    </>
  );
};

export default SchemaRow;
