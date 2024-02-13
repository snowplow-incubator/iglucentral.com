import { FC, useEffect, useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Skeleton,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { CloseIcon } from "./icons";
import ModalTransition from "./ModalTransition";
import { Schema } from "../data/types";
import GeneralInformation from "./GeneralInformation";
import SchemaView from "./SchemaView";
import { getSchema } from "../data/schemas";

type SchemaModalProps = {
  onClose: () => void;
  schema: Schema | undefined;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type CloseIconButtonProps = {
  onClose?: (e?: any, r?: any) => void;
};

type LoadingSchemaProps = {
  title: string;
};

const StyledDialog = styled(Dialog)(({ theme }) => ({
  ".MuiDialog-paper": {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
    },
  },
  "& .MuiDialog-paperScrollPaper": {
    [theme.breakpoints.down("sm")]: {
      maxHeight: "100%",
    },
  },
  "& .MuiDialogContent-root": {
    [theme.breakpoints.down("sm")]: {
      padding: "24px",
    },
  },
  "& .MuiDialogTitle-root": {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "24px",
    },
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  background: "#6638B8",
  borderRadius: "4px",
  transition: "none",
  padding: "10px",
  "&:hover": {
    background: "#6638B8",
    boxShadow:
      "inset 0px -2px 0px rgba(0, 0, 0, 0.15), inset 0px 48px 0px rgba(255, 255, 255, 0.15)",
  },
}));

const CloseIconButton: FC<CloseIconButtonProps> = ({ onClose }) => (
  <Box alignSelf="flex-start">
    <StyledIconButton
      aria-label="Close modal"
      data-testid={"dialog-close-button"}
      onClick={onClose}
      color={"primary"}
    >
      <CloseIcon fontSize="small" />
    </StyledIconButton>
  </Box>
);

const TabPanel: FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <Box mb={2} role="tabpanel" hidden={value !== index}>
      {value === index && <Box pt={3}>{children}</Box>}
    </Box>
  );
};

const LoadingSchema: FC<LoadingSchemaProps> = ({ title }) => (
  <>
    <DialogTitle>
      <Box sx={{ display: "flex", columnGap: 3 }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          maxWidth="100%"
          width={"20em"}
        >
          <Typography variant={"h4semibold"} gutterBottom>
            {title}
          </Typography>
          <Typography>
            <Skeleton />
          </Typography>
        </Box>
      </Box>
    </DialogTitle>
    <DialogContent>
      <Box>
        <Box width="20em" maxWidth="100%">
          <Skeleton variant="text" height="50px" />
        </Box>
        <Typography variant="h2" my={3}>
          <Skeleton />
        </Typography>
        <Box width="100%">
          <Skeleton variant="rectangular" height="500px" />
        </Box>
      </Box>
    </DialogContent>
  </>
);

const SchemaModal: FC<SchemaModalProps> = ({ schema, onClose }) => {
  const [tab, setTab] = useState(0);
  const [rawSchema, setRawSchema] = useState<any>();
  const [error, setError] = useState<false>();
  useEffect(() => {
    setError(false);
    setRawSchema(undefined);
    if (schema) {
      getSchema(schema.fullName, schema.type, schema.version).then((s) => {
        setRawSchema(s);
      });
    }
  }, [schema]);

  return (
    <StyledDialog
      onClose={onClose}
      open={!!schema}
      TransitionComponent={ModalTransition}
      fullWidth
      maxWidth="lg"
    >
      {!rawSchema || !schema ? (
        <LoadingSchema title={"Loading"} />
      ) : (
        <>
          {!error ? (
            <>
              <DialogTitle>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{ columnGap: 5 }}
                >
                  <Box sx={{ display: "flex", columnGap: 3 }}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                    >
                      <Typography
                        variant={"h4semibold"}
                        gutterBottom={Boolean(rawSchema.description || false)}
                      >
                        {schema.name}
                      </Typography>
                      {rawSchema.description ? (
                        <Typography component="div">
                          {rawSchema.description}
                        </Typography>
                      ) : null}
                    </Box>
                  </Box>
                  <CloseIconButton onClose={onClose} />
                </Box>
              </DialogTitle>
              <DialogContent>
                <Box>
                  <Tabs
                    value={tab}
                    onChange={(_e: any, v: number) => setTab(v)}
                  >
                    <Tab label="JSON Schema" value={0} />
                    <Tab label="General Information" value={1} />
                  </Tabs>
                  <TabPanel value={tab} index={0}>
                    <SchemaView rawSchema={rawSchema} schemaDetails={schema} />
                  </TabPanel>

                  <TabPanel value={tab} index={1}>
                    <GeneralInformation rawSchema={rawSchema} />
                  </TabPanel>
                </Box>
              </DialogContent>
            </>
          ) : (
            <>
              <DialogTitle>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{ columnGap: 5 }}
                >
                  <Box sx={{ display: "flex", columnGap: 3 }}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                    >
                      <Typography variant={"h4semibold"}>
                        Error fetching schema
                      </Typography>
                    </Box>
                  </Box>

                  <CloseIconButton onClose={onClose} />
                </Box>
              </DialogTitle>
              <DialogContent>
                <Alert severity="error">
                  <AlertTitle>Could not load schema</AlertTitle>
                </Alert>
              </DialogContent>
            </>
          )}
        </>
      )}
    </StyledDialog>
  );
};

export default SchemaModal;
