import { createStyles, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from "@material-ui/core"
import { AddBox, Info, Brightness4 as DarkButton, Brightness7 as LightButton } from "@material-ui/icons";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CustomThemeContext } from "../../../themes/CustomThemeProvider";
import * as path from "../../../constants/path"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar,
        navDrawer: {
            [theme.breakpoints.up("md")]: {   // desktop
                display: "none"
            }
        }
    }),
);

interface Props {
    openStatus: boolean
    handleCloseDrawer: () => void
}

const NavigationDrawer = (props: Props) => {
    const classes = useStyles()
    const { openStatus, handleCloseDrawer } = props
    const history = useHistory();
    const { currentTheme, setTheme } = useContext(CustomThemeContext)

    const handleOnClick = (path: string) => {
        handleCloseDrawer();
        history.push(path);
    }

    const handleSwitchTheme = (event: React.MouseEvent<EventTarget>) => {
        setTheme(currentTheme === "light" ? "dark" : "light")
    }

    // const handleResetButton = (event: React.MouseEvent<EventTarget>) => {
    // }

    return (
        <Drawer anchor="right" open={openStatus} onClose={handleCloseDrawer} className={classes.navDrawer}>
            <div className={classes.toolbar} />
            <List>
                <Divider />
                <ListItem button key="assessment" onClick={() => handleOnClick(path.ASSESSMENT_LIST)}>
                    <ListItemIcon><AddBox /></ListItemIcon>
                    <ListItemText primary="Assessment List" />
                </ListItem>
                <ListItem button key="about" onClick={() => handleOnClick(path.ABOUT)}>
                    <ListItemIcon><Info /></ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <Divider />
                {/* <ListItem key="reset-button" >
                    <ListItemIcon >
                        <IconButton edge="start" onClick={handleResetButton}>
                            <RotateLeftOutlined />
                        </IconButton>
                    </ListItemIcon>
                    <ListItemText primary="Reset" />
                </ListItem> */}
                <ListItem key="switch-theme" >
                    <ListItemIcon>
                        <IconButton edge="start" onClick={handleSwitchTheme}>
                            {currentTheme === "light" ? <LightButton /> : <DarkButton />}
                        </IconButton>
                    </ListItemIcon>
                    <ListItemText primary="Dark Theme" />
                </ListItem>
            </List>
        </Drawer >
    )
}

export default NavigationDrawer;