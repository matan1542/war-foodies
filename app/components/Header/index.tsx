import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Auth0UserContext } from "@/types/userContext";

const drawerWidth = 240;

const menuItemsTemplate = [
  {
    name: "דף הבית",
    href: "/",
  },
  {
    name: "התחבר",
    href: "/login",
  },
  {
    name: "פרופיל",
    href: "/profile",
  },
];

const menuItemsAfterLogin = [
  {
    name: "התנתק",
    href: "/api/auth/logout",
  },
];

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const [menuItems, setMenuItems] = React.useState(menuItemsTemplate);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user } = useUser() as auth0UserContext;

  React.useEffect(() => {
    let menuItemsCopy = [...menuItemsTemplate];
    if (user) {
      const loginIdx = menuItemsCopy.findIndex(
        (item) => item.href === "/login"
      );
      if (loginIdx !== -1) menuItemsCopy.splice(loginIdx, 1);

      setMenuItems([...menuItemsCopy, ...menuItemsAfterLogin]);
    }
  }, [user]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        open={open}
        sx={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <img src="/images/bars.svg" alt="bars menu" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={item.name}
                    sx={{ textAlign: "right" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
