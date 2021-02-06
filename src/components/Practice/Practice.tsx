import { Button, Container, createStyles, Dialog, DialogContent, DialogContentText, DialogTitle, Fab, List, ListItem, makeStyles, Theme } from "@material-ui/core";
import { PlaylistAddCheck } from "@material-ui/icons";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { PracticeProvider } from "../../contexts/practice-context";
import { AssessmentInfo, getAssessment, getAssessmentInfos, QuestionSet } from "../../services/assessment";

import QuestionComponent from "./QuestionComponent";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        floatingButton: {
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
        }
    }),
);

const Practice = () => {
    const classes = useStyles();
    const { title } = useParams<{ title: string }>();
    const [assessment, setAssessment] = useState<{ assessmentInfo: AssessmentInfo, questionSets: QuestionSet[] }>()
    const [openReview, setOpenReview] = useState(false);
    const questionSetRefs = useMemo(() => {
        return assessment?.questionSets.reduce((acc: { [key: string]: React.RefObject<HTMLLIElement> }, value, idx) => {
            acc["question-" + String(idx)] = React.createRef();
            return acc;
        }, {}) || {};
    }, [assessment?.questionSets])

    const handleTriggerReview = () => {
        setOpenReview(!openReview)
    }

    const handleClick = (id: string) => {
        questionSetRefs[id].current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',

        })
        setOpenReview(!openReview)
    };



    useEffect(() => {
        const localAssessment = localStorage.getItem(title)

        if (localAssessment) {
            setAssessment(JSON.parse(localAssessment))
            console.log("available in local storage")
        } else {
            console.log("not available in local storage")
            getAssessmentInfos().then(assessmentInfos => {
                const assessmentInfo = assessmentInfos?.filter(assessmentInfo => assessmentInfo.title === title)[0]
                if (assessmentInfo) {
                    getAssessment(assessmentInfo).then(assessment => setAssessment(assessment))
                }
                else {
                    alert("Fail to retrieve assessment")
                }
            })
        }


    }, [title])

    return (
        <>
            <PracticeProvider count={1000}>
                <Container style={{ marginTop: "74px" }}>
                    {
                        useMemo(() => {
                            return <List>
                                {assessment?.questionSets.map((questionSet, idx) =>
                                    <ListItem key={idx} style={{ display: "block" }} ref={questionSetRefs["question-" + String(idx)]}>
                                        <QuestionComponent questionSet={questionSet}></QuestionComponent>
                                    </ListItem>)}
                            </List>
                        }, [assessment?.questionSets, questionSetRefs])
                    }

                </Container>
                <Fab variant="extended" onClick={handleTriggerReview} className={classes.floatingButton} color="secondary" aria-label="submit or check">
                    <PlaylistAddCheck />Review
                </Fab>
                <Dialog
                    open={openReview}
                    aria-labelledby="qna-review-title"
                    aria-details="qna-review-details"
                    onClose={handleTriggerReview}
                >
                    <DialogTitle id="qna-review-title">
                        Questions and Answers Review
                </DialogTitle>
                    <DialogContent>
                        <Button variant="contained" onClick={() => { handleClick("question-5") }}>Hello World</Button>
                        <DialogContentText id="qna-review-details">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                </Dialog>
            </PracticeProvider>

        </>
    )
}

export default Practice