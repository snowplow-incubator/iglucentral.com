import { FC } from "react";
import { Box, styled } from "@mui/material";
import Highlight, { defaultProps } from "prism-react-renderer";
import shadesOfPurple from "prism-react-renderer/themes/shadesOfPurple";
import { CopyIcon } from "./icons";
import Copy from "./Copy";

const StyledLine = styled("div")(() => ({
  display: "table-row",
}));

const StyledLineContent = styled("div")(() => ({
  display: "table-cell",
}));

const StyledLineNumber = styled("div")(({ theme }) => ({
  whiteSpace: "nowrap",
  display: "table-cell",
  paddingRight: theme.spacing(2),
  userSelect: "none",
  textAlign: "right",
}));

const StyledCopyButton = styled(Box)(() => ({
  position: "absolute",
  right: "16px",
  bottom: "16px",
  "$fixHeight + &": { right: "32px" },
}));

const StyledPre = styled("pre", {
  shouldForwardProp: (prop) =>
    prop !== "fixHeight" &&
    prop !== "wideLines" &&
    prop !== "paragraph" &&
    prop !== "showCopy",
})<{
  fixHeight?: { maxHeight?: string; minHeight?: string };
  wideLines?: boolean;
  paragraph?: boolean;
  showCopy?: boolean;
}>(({ theme, fixHeight, wideLines, paragraph, showCopy }) => {
  const fixHeightStyles = fixHeight
    ? ({
        maxHeight: "40em",
        overflowY: "scroll",
      } as any)
    : {};
  const wideLinesStyles = wideLines
    ? ({
        lineHeight: 1.6,
        "& $lineContent": { paddingBottom: theme.spacing(2) },
      } as any)
    : {};
  const paragraphStyles = paragraph
    ? ({
        margin: theme.spacing(0, 0, 2),
      } as any)
    : {};
  const showCopyStyles = showCopy ? { paddingRight: "115px" } : {};
  return {
    fontFamily:
      "'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: theme.typography.body2.fontSize,
    padding: theme.spacing(2),

    margin: theme.spacing(2, 0),
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    minHeight: "68px",
    ...fixHeightStyles,
    ...wideLinesStyles,
    ...paragraphStyles,
    ...showCopyStyles,
  };
});

type CodePanelProps = {
  /** The syntax highlighting to apply to the code */
  language: "javascript" | "sql" | "markup" | "json";
  /** The code or markup to show in the panel */
  code: string;
  onCopy?: () => void;
  fixHeight?: { maxHeight?: string; minHeight?: string };
  /** If true, will show line numbers. */
  lineNumbers?: boolean;
  /** If true, will increase the margin on the lines and increase the spacing. */
  wideLines?: boolean;
  paragraph?: boolean;
  /** If true, will show a copy button in the bottom right hand corner. */
  showCopy?: boolean;
};

const CodePanel: FC<CodePanelProps> = ({
  language,
  code,
  onCopy,
  fixHeight,
  lineNumbers = true,
  wideLines = false,
  paragraph = false,
  showCopy = true,
}) => {
  const height = fixHeight || {};
  return (
    <Highlight
      {...defaultProps}
      theme={shadesOfPurple}
      code={code}
      language={language}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <Box position={"relative"}>
          <StyledPre
            fixHeight={fixHeight}
            wideLines={wideLines}
            paragraph={paragraph}
            showCopy={showCopy}
            style={{ ...style, ...height }}
          >
            {tokens.map((line, i) => (
              <StyledLine {...getLineProps({ line, key: i })}>
                {lineNumbers && <StyledLineNumber>{i + 1}</StyledLineNumber>}
                <StyledLineContent>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </StyledLineContent>
              </StyledLine>
            ))}
          </StyledPre>
          {showCopy && (
            <StyledCopyButton>
              <Copy
                text={code}
                variant="contained"
                color="primary"
                onCopy={onCopy}
                startIcon={<CopyIcon fontSize="inherit" />}
              >
                Copy
              </Copy>
            </StyledCopyButton>
          )}
        </Box>
      )}
    </Highlight>
  );
};

export default CodePanel;
