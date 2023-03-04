
import React, {useEffect, useState} from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  PublicOutlined,
  InfoOutlined,
  ContactPageOutlined,
  SchoolOutlined,
  TerminalOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />
    },
    {
        text: "Personal",
        icon: null
    },
    {
        text: "About me",
        icon: <InfoOutlined />
    },
    {
        text: "Geography",
        icon: <PublicOutlined />
    },
    {
        text: "Contact",
        icon: <ContactPageOutlined />
    },
    {
        text: "Experience",
        icon: null
    },
    {
        text: "Work",
        icon: <HomeOutlined />
    },
    {
        text: "Skills",
        icon: <TerminalOutlined />
    },
    {
        text: "Education",
        icon: <SchoolOutlined />
    },
]


const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();


    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])
    return (
    <Box component="nav">
        {isSidebarOpen && (
            <Drawer
                transitionDuration={9000}
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSizing: "border-box",
                        borderWidth: isNonMobile ? 0 : "2px",
                        width: drawerWidth

                    },
                }}
            >
                 <Box width="100%">
                    <Box m="1.5rem 2rem 2rem 3rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box display="flex" alignItems="center" gap="0.5rem">
                                <Typography variant="h3" fontWeight="bold">
                                    PAVLO NAZARCHUK
                                </Typography>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </Box>
                        </FlexBetween>
                    </Box>
                    <List>
                        {navItems.map(({ text, icon }) => {
                            if (!icon) {
                                return (
                                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem"}}>
                                        {text}
                                    </Typography>
                                )
                            }
                            const lcText = text.toLowerCase();
                            
                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/${lcText}`);
                                            setActive(lcText);
                                        }} 
                                        sx={{
                                            backgroundColor: active === lcText ? theme.palette.secondary[300] : "transparent",
                                            color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100],
                                        }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200],
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto"}} />
                                            )}
                                        </ListItemButton>
                                </ListItem>
                            )
                        })
                        }
                    </List>
                 </Box>
            </Drawer>
        )}
    </Box>
    )
}

export default Sidebar