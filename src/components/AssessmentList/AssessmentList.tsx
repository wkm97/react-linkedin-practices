import { createStyles, Divider, FormControl, Grid, InputLabel, Link, makeStyles, Paper, Select, TextField, Theme, Typography } from "@material-ui/core"
import React from "react";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        upperBgDiv: {
            display: "flex",
            height: "5vh",
            width: "100%",
            backgroundColor: theme.palette.secondary.main,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            justifyContent: "center",
            minHeight: "300px"

        },
        btmBgDiv: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            minHeight: "600px",
            marginTop: -80
        }

    }),
);

const AssessmentList = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.upperBgDiv} />
            <div className={classes.btmBgDiv}>
                <Paper elevation={3} style={{ width: "85vw" }}>
                    <div style={{height:"2vh"}}/>
                    <Typography variant="h3" style={{ margin: 16 }}>LinkedIn Assessment Practice List</Typography>
                    <Typography variant="h5" style={{ margin: 16 }}>
                        <Link color="textSecondary" href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes">
                            LinkedIn assessment practice from GitHub
                        </Link>
                    </Typography>
                    <Divider />
                    <Grid container spacing={1}>
                        <Grid item xs={1} />
                        <Grid item xs={6}>
                            <TextField

                                id="outlined-full-width"
                                label="Label"
                                placeholder="Placeholder"
                                helperText="Full width!"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                style={{ marginLeft: "1%" }}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl variant="outlined" margin="normal" style={{ width: "90%" }}>
                                <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
                                <Select
                                    native
                                    label="Status"
                                    inputProps={{
                                        name: 'age',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>

                </Paper>
            </div>
        </div>
    )
}

export default AssessmentList;