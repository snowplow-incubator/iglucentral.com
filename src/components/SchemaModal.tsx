import { FC, useState } from "react";
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
import { SelfDescribingSchema } from "../data/types";
import CodePanel from "./CodePanel";
import GeneralInformation from "./GeneralInformation";

type SchemaModalProps = {
  isOpen: boolean;
  title: string;
  rawSchema: SelfDescribingSchema | null;
  onClose?: (e?: any, r?: any) => void;
  loading: boolean;
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

const SchemaModal: FC<SchemaModalProps> = ({
  isOpen = false,
  title,
  rawSchema,
  onClose,
  loading,
}) => {
  const [tab, setTab] = useState(0);

  const schema = {
    $schema: rawSchema?.$schema,
    self: rawSchema?.self,
    type: rawSchema?.type,
    properties: rawSchema?.properties,
  };

  return (
    <StyledDialog
      onClose={onClose}
      open={isOpen}
      TransitionComponent={ModalTransition}
      fullWidth
      maxWidth="lg"
    >
      {loading ? (
        <LoadingSchema title={title} />
      ) : (
        <>
          {rawSchema ? (
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
                        {title}
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
                    onChange={(_e: any, v: number) => {
                      setTab(v);
                    }}
                  >
                    <Tab disableRipple label="JSON Schema" value={0} />
                    <Tab disableRipple value={1} label="General Information" />
                  </Tabs>
                  <TabPanel value={tab} index={0}>
                    <Box mb={2}>
                      <Typography variant="h3semibold">JSON Schema</Typography>
                    </Box>
                    <CodePanel
                      language={"json"}
                      code={JSON.stringify(schema, null, 2)}
                    />
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
                      <Typography variant={"h4semibold"}>{title}</Typography>
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
