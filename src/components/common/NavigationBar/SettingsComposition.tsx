// REFERENCE: https://material-ui.com/components/menus/#menulist-composition
import { ClickAwayListener, createStyles, Grow, IconButton, makeStyles, MenuItem, MenuList, Paper, Popper, Switch, Theme, Typography } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React, { useContext } from "react";
import { CustomThemeContext } from "../../../themes/CustomThemeProvider";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        settingButton: {
            display: "none",
            textTransform: "none",
            [theme.breakpoints.up("md")]: {   // desktop
                display: "flex"
            }
        },
    }),
);

const SettingsComposition = () => {
    const classes = useStyles();
    const { currentTheme, setTheme } = useContext(CustomThemeContext)
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const theme = event.target.checked === true ? "dark":"light"
        setTheme(theme)
    }

    // const handleResetButton = (event: React.MouseEvent<EventTarget>) => {
    //     handleClose(event)
        
    // }

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <React.Fragment>
            <IconButton
                ref={anchorRef}
                aria-controls={open ? 'settings-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.settingButton}
            >
                <Settings />
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.settingButton}>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="settings-list-grow" onKeyDown={handleListKeyDown}>
                                    {/* <MenuItem disableRipple style={{ backgroundColor: 'transparent' }}>
                                        <IconButton onClick={handleResetButton}>
                                            <RotateLeftOutlined />
                                        </IconButton>
                                        <div style={{ flexGrow: 1 }}>
                                            <Typography align="center">Reset</Typography>
                                        </div>
                                    </MenuItem> */}
                                    <MenuItem disableRipple style={{ backgroundColor: 'transparent' }}>
                                        <Switch
                                            checked={currentTheme === "light" ? false : true}
                                            onChange={handleSwitchChange}
                                            name="dark-theme-switch"
                                        />
                                        <Typography>Dark Theme</Typography>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    )
}

export default SettingsComposition;