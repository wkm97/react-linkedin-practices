import { IconButton, MenuItem, MenuList, Switch, Typography } from "@material-ui/core";
import { RotateLeftOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { CustomThemeContext } from "../../../themes/CustomThemeProvider";

interface Props {
    id: string;
    open: boolean;
    handleListKeyDown: (event: React.KeyboardEvent<HTMLUListElement>) => void;
    handleClose: (event: React.MouseEvent<EventTarget>) => void
}

const SettingsMenu  = (props:Props) => {
    const { currentTheme, setTheme } = useContext(CustomThemeContext)
    
    const { id, open, handleListKeyDown, handleClose } = props

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const theme = event.target.checked === true ? "dark":"light"
        setTheme(theme)
    }

    const handleResetButton = (event: React.MouseEvent<EventTarget>) => {
        handleClose(event)
        
    }

    return (
        <>
        <MenuList autoFocusItem={open} id={id} onKeyDown={handleListKeyDown}>
            <MenuItem>
                <IconButton onClick={handleResetButton}>
                    <RotateLeftOutlined />
                </IconButton>
                <div style={{ flexGrow: 1 }}>
                    <Typography align="center">Reset</Typography>
                </div>
            </MenuItem>
            <MenuItem>
                <Switch
                    checked={ currentTheme === "light" ? false: true }
                    onChange={handleSwitchChange}
                    name="dark-theme-switch"
                />
                <Typography>Dark Theme</Typography>
            </MenuItem>
        </MenuList>
        </>
    )
}

export default SettingsMenu;