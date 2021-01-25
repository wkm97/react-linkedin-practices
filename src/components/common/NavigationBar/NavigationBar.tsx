import React, { useState } from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { MenuOpen } from "@material-ui/icons";
import { createStyles, IconButton, makeStyles, Tabs, Tab, Theme } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import NavigationDrawer from './NavigationDrawer';
import SettingsComposition from './SettingsComposition';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tabItems: {
            display: "none",
            textTransform: "none",
            [theme.breakpoints.up("md")]: {   // desktop
                display: "flex"
            }
        },
        navDrawerButton: {
            [theme.breakpoints.up("md")]: { // desktop
                display: "none"
            }
        }
    }),
);


function NavigationBar() {
    const history = useHistory();
    const classes = useStyles();

    const [selectedTab, setSelectedTab] = useState(0);
    const [openNavDrawer, setOpenNavDrawer] = useState(false);

    const handleChangeTabs = (_: React.ChangeEvent<{}>, newValue: number) => {
        setSelectedTab(newValue);
    };

    const toggleNavDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent,) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setOpenNavDrawer(open)
    }

    const trigger = useScrollTrigger();


    return (
        <React.Fragment>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">LinkedIn Practice Assessment</Typography>
                        <div style={{ flexGrow: 1 }} />
                        <Tabs value={selectedTab} onChange={handleChangeTabs} className={classes.tabItems}>
                            <Tab label="Assessment List" onClick={() => history.push("/assessment-list")} />
                            <Tab label="Sessions" onClick={() => history.push("/sessions")} />
                            <Tab label="About Me" onClick={() => history.push("/about-me")} />
                        </Tabs>

                        <SettingsComposition />
                        <IconButton className={classes.navDrawerButton} onClick={toggleNavDrawer(true)} ><MenuOpen /></IconButton>
                        <NavigationDrawer openStatus={openNavDrawer} handleCloseDrawer={() => setOpenNavDrawer(false)} />


                    </Toolbar>
                </AppBar>
            </Slide>
        </React.Fragment>
    );
}

export default NavigationBar;