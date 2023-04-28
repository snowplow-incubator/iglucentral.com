import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { SelfDescribingSchema } from "../data/types";
import CodePanel from "./CodePanel";

type SchemaViewProps = {
  rawSchema: SelfDescribingSchema;
};
const SchemaView: FC<SchemaViewProps> = ({ rawSchema }) => {
  return (
    <Box>
      <Typography mb={2} variant="h3semibold">
        JSON Schema
      </Typography>

      <CodePanel language={"json"} code={JSON.stringify(rawSchema, null, 2)} />
    </Box>
  );
};

export default SchemaView;
