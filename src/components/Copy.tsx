import { default as React, useEffect, useState } from "react";
import { Button, ButtonProps, Tooltip } from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";

const Copy = ({
  text,
  loading = false,
  children,
  onCopy,
  ...props
}: React.PropsWithChildren<{
  text: string;
  loading?: boolean;
  onCopy?: () => void;
}> &
  ButtonProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const onCopyPressed = () => {
    setOpen(true);
    onCopy && onCopy();
  };

  return (
    <CopyToClipboard text={text} onCopy={onCopyPressed}>
      <Tooltip
        title="✔ Copied"
        open={open}
        leaveDelay={1000}
        arrow
        placement="top"
      >
        <Button
          variant="text"
          color="primary"
          disabled={loading || !text}
          {...props}
        >
          {children}
        </Button>
      </Tooltip>
    </CopyToClipboard>
  );
};

export default Copy;
