import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { SelfDescribingSchema } from "../data/types";
import Copy from "./Copy";

type GeneralInformationProps = {
  rawSchema: SelfDescribingSchema;
};
const GeneralInformation: FC<GeneralInformationProps> = ({ rawSchema }) => {
  const uri = `iglu:${rawSchema.self.vendor}/${rawSchema.self.name}/${rawSchema.self.format}/${rawSchema.self.version}`;

  return (
    <>
      <Typography variant="h3" mb={2} sx={{ fontWeight: 500 }}>
        General Information
      </Typography>

      <Box>
        <Box mb={2}>
          <Typography variant="h4" gutterBottom>
            Version
          </Typography>
          <Typography variant="body1">{rawSchema.self.version}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h4" gutterBottom>
            Name
          </Typography>
          <Typography variant="body1">{rawSchema.self.name}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h4" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1">{rawSchema.description}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h4" gutterBottom>
            Vendor
          </Typography>
          <Typography variant="body1">{rawSchema.self.vendor}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h4">Schema tracking URL</Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography
              variant="body1"
              sx={{
                wordBreak: "break-word",
              }}
            >
              {uri}
            </Typography>
            <Box sx={{ fontSize: "22px" }}>
              <Copy text={uri}>[Copy URL]</Copy>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GeneralInformation;
