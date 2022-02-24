import { Box, Link, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import Logo from "./Logo";
import { useTrackInteraction, useTrackPageView } from "./Snowplow";

const Page: FC = ({ children }) => {
  const trackPageView = useTrackPageView();
  const trackInteraction = useTrackInteraction();
  useEffect(() => {
    trackPageView();
  }, [trackPageView]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateAreas: '"header" "content"',
        gridTemplateRows: "auto 1fr",
        backgroundColor: "#F7F7FA",
        minHeight: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: (theme) => theme.palette.common.white,
          backgroundColor: (theme) => theme.palette.primary.main,
          gridArea: "header",
        }}
      >
        <Typography variant="h2" component="h1">
          Iglu Central
        </Typography>
      </Box>

      <Box
        sx={{
          gridArea: "header",
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            target={"_blank"}
            href="https://snowplowanalytics.com"
            onClick={() => trackInteraction("click", "link", "snowplow-home")}
          >
            <Typography variant="h1">
              <Logo />
            </Typography>
          </Link>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Typography sx={{ color: (t) => t.palette.common.white }}>
              <Link
                sx={{ color: (t) => t.palette.common.white }}
                target={"_blank"}
                href={"https://docs.snowplowanalytics.com"}
                onClick={() =>
                  trackInteraction("click", "link", "snowplow-docs")
                }
              >
                Docs
              </Link>{" "}
              |{" "}
              <Link
                sx={{ color: (t) => t.palette.common.white }}
                href={"https://github.com/snowplow"}
                onClick={() =>
                  trackInteraction("click", "link", "snowplow-github")
                }
                target={"_blank"}
              >
                Github
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          gridArea: "content",
          boxShadow: "inset 2px 2px 2px 0px rgba(0, 0, 0, 0.16)",
        }}
      >
        <Box
          sx={{
            maxWidth: "100em",
            margin: "0 auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
