import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Schema, SelfDescribingSchema } from "../data/types";
import CodePanel from "./CodePanel";
import Copy from "./Copy";
import { useTrackInteraction } from "./Snowplow";
import { generateShareLink } from "../data/schemas";

type SchemaViewProps = {
  rawSchema: SelfDescribingSchema;
  schemaDetails: Schema;
};
const SchemaView: FC<SchemaViewProps> = ({ rawSchema, schemaDetails }) => {
  const trackInteraction = useTrackInteraction();
  const handleOnCopy = () => {
    trackInteraction("click", "button", `${rawSchema.self.name}-copy`);
  };

  const handleOnShare = () => {
    trackInteraction("click", "button", `${rawSchema.self.name}-share`);
  };

  const schemaText = JSON.stringify(rawSchema, null, 2);
  return (
    <Box>
      <Box mb={2} display={"flex"} alignItems={"center"} columnGap={1}>
        <Typography variant="h3semibold">JSON Schema</Typography>
        <Copy onCopy={handleOnCopy} text={schemaText}>
          [Copy schema to clipboard]
        </Copy>
        <Copy onCopy={handleOnShare} text={generateShareLink(schemaDetails)}>
          [Share link to schema]
        </Copy>
      </Box>

      <CodePanel onCopy={handleOnCopy} language={"json"} code={schemaText} />
    </Box>
  );
};

export default SchemaView;
