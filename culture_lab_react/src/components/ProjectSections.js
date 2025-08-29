import * as React from "react";
import { Container, Grid, Box, Typography, Divider, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// Renders a list of project sections with optional images in a responsive, stable layout.
// - If an image is present, it's shown alongside the text (alternating left/right on desktop).
// - If no image is present, the text spans the full width without awkward gaps.
export default function ProjectSections({
  sections = [],
  maxImageWidth = 560,
  maxImageHeight = 440,
  alternate = true, // controls alternating layout across sections
  startWithImageLeft = true, // if alternating, determines which side the first image appears on (md+)
  enableLightbox = true, // clicking image opens a larger preview dialog
}) {
  const [lightbox, setLightbox] = React.useState({ open: false, src: "", caption: "", alt: "" });

  const openLightbox = (src, caption, alt) => {
    if (!enableLightbox) return;
    setLightbox({ open: true, src, caption: caption || "", alt: alt || "Preview" });
  };
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      {sections.map((section, index) => {
        const hasImage = Boolean(section?.image);
        // Compute ordering for alternating layout on md+ screens (only when an image exists)
        const isOdd = index % 2 === 1;
        const flip = alternate ? (startWithImageLeft ? isOdd : !isOdd) : false;
        const imageOrderMd = hasImage && flip ? 2 : 1;
        const textOrderMd = hasImage && flip ? 1 : 2;

        return (
          <Box key={`${section.title || "section"}-${index}`} sx={{ mb: 6 }}>
            <Grid
              container
              spacing={4}
              sx={{
                alignItems: { xs: "flex-start", md: hasImage ? "center" : "flex-start" },
              }}
            >
              {/* Image column (optional) */}
              {hasImage && (
                <Grid
                  item
                  xs={12}
                  md={5}
                  sx={{ order: { xs: 1, md: imageOrderMd } }}
                >
                  <Box
                    component="img"
                    src={section.image}
                    alt={section.imageAlt || section.title || "Project section image"}
                    sx={{
                      width: "100%",
                      maxWidth: maxImageWidth,
                      maxHeight: maxImageHeight,
                      height: "auto",
                      borderRadius: 2,
                      boxShadow: 1,
                      display: "block",
                      mx: { xs: "auto", md: 0 },
                      cursor: enableLightbox ? "zoom-in" : "default",
                    }}
                    onClick={() => openLightbox(section.image, section.imageCaption, section.imageAlt || section.title)}
                  />
                  {section.imageCaption ? (
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        color: "text.secondary",
                        textAlign: "center",
                        mt: 1.5,
                        px: 1,
                      }}
                    >
                      {section.imageCaption}
                    </Typography>
                  ) : null}
                </Grid>
              )}

              {/* Text column */}
              <Grid
                item
                xs={12}
                md={hasImage ? 7 : 12}
                sx={{ order: { xs: hasImage ? 2 : 1, md: textOrderMd } }}
              >
                {section.title ? (
                  <Typography variant="h4" sx={{ fontWeight: 300, color: "#333", mb: 1 }}>
                    {section.title}
                  </Typography>
                ) : null}

                {/* Support either an array of strings or a single string */}
                {Array.isArray(section.content) ? (
                  <Box component="ul" sx={{ pl: 3, m: 0, color: "#555" }}>
                    {section.content.map((item, idx) => (
                      <Box component="li" key={idx} sx={{ mb: 1 }}>
                        <Typography variant="body1">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                ) : section.content ? (
                  <Typography variant="body1" sx={{ color: "#555" }}>
                    {section.content}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>

            {/* Divider between sections */}
            {index < sections.length - 1 ? (
              <Divider sx={{ mt: 6 }} />
            ) : null}
          </Box>
        );
      })}

      {/* Lightbox Dialog */}
      {enableLightbox && (
        <Dialog open={lightbox.open} onClose={closeLightbox} maxWidth="lg" fullWidth>
          <IconButton
            onClick={closeLightbox}
            sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
            aria-label="Close"
          >
            <CloseRoundedIcon />
          </IconButton>
          <DialogContent sx={{ p: { xs: 1.5, sm: 3 } }}>
            {lightbox.src ? (
              <Box
                component="img"
                src={lightbox.src}
                alt={lightbox.alt}
                sx={{ width: "100%", height: "auto", display: "block", borderRadius: 1 }}
              />
            ) : null}
            {lightbox.caption ? (
              <Typography variant="caption" sx={{ color: "text.secondary", display: "block", mt: 1 }}>
                {lightbox.caption}
              </Typography>
            ) : null}
          </DialogContent>
        </Dialog>
      )}
    </Container>
  );
}
