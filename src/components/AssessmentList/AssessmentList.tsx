import { Container, createStyles, Divider, FormControl, Grid, IconButton, InputLabel, Link, List, ListItem, ListItemText, makeStyles, Paper, Select, TextField, Theme, Typography } from "@material-ui/core"
import { ArrowForward } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AssessmentInfo, getAssessmentInfos } from "../../services/assessment";


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
        },
        assessmentItem: {
            height: "6vh"
        },
        itemListTextSecondary: {
            display: "none",
            [theme.breakpoints.up("md")]: {   // desktop
                display: "flex"
            }
        }

    }),
);

const AssessmentList = () => {
    const classes = useStyles();
    const history = useHistory();
    const [assessments, setAssessments] = useState<Array<AssessmentInfo> | undefined>(undefined);
    const [filterBy, setFilterBy] = useState({search:"", assessmentStatus:""})

    useEffect(() => {
        getAssessmentInfos().then(assessmentInfos => {
            setAssessments(assessmentInfos)
        }).catch(e => alert(e))
    }, [])

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterBy({...filterBy, search: event.target.value})
        // setFilteredAssessments(assessments?.filter(item => item.title?.toLowerCase().includes(event.target.value)))
    }

    const handleAssessmentStatusChange = (event: React.ChangeEvent<{ value: string | unknown }>) => {
        const value = event.target.value || ""
        if(typeof value === "string"){
            setFilterBy({...filterBy, assessmentStatus: event.target.value as string})
            // setFilteredAssessments(assessments?.filter(item => item.assessmentStatus?.toLowerCase().includes(event.target.value as string)))
        }
    }

    const filterAssessmentInfos = () =>{
        return assessments?.filter(item => item.title?.toLowerCase().includes(filterBy.search) && item.assessmentStatus?.toLowerCase().includes(filterBy.assessmentStatus))
    }

    const filteredAssessmentInfos = filterAssessmentInfos();
    


    return (
        <div>
            <div className={classes.upperBgDiv} />
            <div className={classes.btmBgDiv}>
                <Paper elevation={3} style={{ width: "85vw" }}>
                    <div style={{ height: "2vh" }} />
                    <Typography variant="h3" style={{ margin: 16 }}>LinkedIn Assessment Practice List</Typography>
                    <Typography variant="h5" style={{ margin: 16 }}>
                        <Link color="textSecondary" href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes">
                            LinkedIn assessment practices from GitHub
                        </Link>
                    </Typography>
                    <Divider />
                    <Grid container spacing={1}>
                        <Grid item xs={1} />
                        <Grid item xs={6}>
                            <TextField

                                id="outlined-full-width"
                                label="Search"
                                placeholder="type here..."
                                helperText="Search Assessment"
                                onChange={handleSearchChange}
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
                                    onChange={handleAssessmentStatusChange}
                                >
                                    <option aria-label="None" value="" />
                                    <option value="with answer">with answers</option>
                                    <option value="partially answered">partially answered</option>
                                    <option value="answers required">answers required</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>

                    {filteredAssessmentInfos ? <Container maxWidth="sm" style={{ border: "1px solid rgb(212, 212, 212)", borderRadius: 25 }}>
                        <List component="nav">
                            {
                                filteredAssessmentInfos.map((assessment, idx) =>
                                    <React.Fragment key={assessment.title}>
                                        <ListItem divider button disableRipple className={classes.assessmentItem}
                                            style={
                                                idx === 0 ? { borderTopLeftRadius: 15, borderTopRightRadius: 15 } :
                                                    idx === filteredAssessmentInfos.length - 1 ? { borderBottomLeftRadius: 15, borderBottomRightRadius: 15 } :
                                                        { borderRadius: 0 }
                                            }>
                                            <ListItemText inset primary={assessment.title} secondary={<span className={classes.itemListTextSecondary}>{`${assessment.numQuestions} questions ${assessment.assessmentStatus}`}</span>}></ListItemText>

                                            <IconButton onClick={()=> history.push(`/practice/${assessment.title}`)}><ArrowForward /></IconButton>
                                        </ListItem>
                                    </React.Fragment>
                                )
                            }
                        </List>
                    </Container> : null}


                </Paper>
            </div>
        </div>
    )
}

export default AssessmentList;