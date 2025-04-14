import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Sitemark from "./SitemarkIcon";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Menu } from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  backgroundColor: theme.vars
    ? "#065171"
    : alpha(theme.palette.background.default),
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorProjectEl, setanchorProjectAnchorEl] = React.useState(null);
  const open_ = Boolean(anchorEl);
  const open_project = Boolean(anchorProjectEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProjectClick = (event) => {
    setanchorProjectAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProjectClose = () => {
    setanchorProjectAnchorEl(null);
  }

  return (
    <AppBar
      position="sticky"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        backgroundColor: "#065171",
        // backgroundImage: `url("${process.env.PUBLIC_URL}/bg.webp")`,
        alignItems: "end",
      }}
    >
      <Container maxWidth="lg" style={{ alignItems: "center", zIndex: "1" }}>
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              px: 0,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{display:"flex", alignItems:"center"}}>
              <Box
                component="img"
                src="logo.svg" // Replace with your image path
                alt="Mission"
                sx={{
                  width: { xs: "30%", md: "30%" },
                  maxWidth: "50%",
                  borderRadius: 2, // Optional styling for image
                }}
              />
              <Typography
                style={{
                  color: "aliceblue",
                  cursor: "pointer", // Add this line for hand symbol
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginLeft: "10%"
                }}
                onClick={() => navigate("/")}
              >
                SAMA
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{
                  color: "aliceblue",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                onClick={() => navigate("/")}
              >
                Home
              </Button>

              <Button
                variant="text"
                color="info"
                size="small"
                sx={{
                  color: "aliceblue",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                onClick={() => navigate("/people")}
              >
                People
              </Button>
              
              <>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{
                  color: "aliceblue",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                onClick={handleProjectClick}
              >
                Projects
              </Button>
              <Menu
                  anchorEl={anchorProjectEl}
                  open={open_project}
                  onClose={handleProjectClose}
                  MenuListProps={{
                    'aria-labelledby': 'resources-button',
                  }}
                >
                  <MenuItem onClick={() => navigate("/project/cy")}>Culturally Yours</MenuItem>
                  <MenuItem onClick={() => navigate("/project/mm")}>Missing Melodies</MenuItem>
                  <MenuItem onClick={() => navigate("/project/ey")}>Moral Machines</MenuItem>
                  <MenuItem onClick={() => navigate("/project/sc")}>Culture Constructs</MenuItem>
                </Menu>
                </>

              <Button
                variant="text"
                size="small"
                sx={{
                  color: "aliceblue",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                onClick={() => navigate("/publication")}
              >
                Publications
              </Button>
              <>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  onClick={handleClick}
                  sx={{
                    color: "aliceblue",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                >
                  Resources
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open_}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'resources-button',
                  }}
                >
                  <MenuItem onClick={() => navigate("/resources/demos")}>Demos</MenuItem>
                  <MenuItem onClick={() => navigate("/resources/tools")}>Tools</MenuItem>
                  <MenuItem onClick={() => navigate("/resources/datasets")}>Datasets</MenuItem>
                  <MenuItem onClick={() => navigate("/resources/models")}>Models</MenuItem>
                </Menu>
              </>

              <Button
                variant="text"
                color="info"
                size="small"
                sx={{
                  color: "aliceblue",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}

                onClick={() => navigate("/joinus")}
              >
                Join Us
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {/* <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button> */}
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem>People</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Publications</MenuItem>
                <MenuItem>Resources - Tools</MenuItem>
                <MenuItem>Resources - Datasets</MenuItem>
                <MenuItem>Resources - Models</MenuItem>
                <MenuItem>Resources - Demos</MenuItem>
                <MenuItem>Join Us</MenuItem>
                <Divider sx={{ my: 3 }} />
                {/* <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem> */}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
