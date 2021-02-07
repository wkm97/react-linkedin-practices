import { Container, createStyles, Dialog, DialogContent, DialogTitle, Fab, List, ListItem, makeStyles, Theme } from "@material-ui/core";
import { PlaylistAddCheck } from "@material-ui/icons";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { usePracticeDispatch } from "../../contexts/practice-context";
import { Assessment, getAssessment, getAssessmentInfos } from "../../services/assessment";

import QuestionComponent from "./QuestionComponent";
import ReviewQuestions from "./ReviewQuestions";

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
    const [assessment, setAssessment] = useState<Assessment>()
    const [openReview, setOpenReview] = useState(false);
    const dispatchPractice = usePracticeDispatch();
    const questionSetRefs = useMemo(() => {
        return assessment?.questionSets.reduce((acc: { [key: string]: React.RefObject<HTMLLIElement> }, value, idx) => {
            acc["question-" + String(idx)] = React.createRef();
            return acc;
        }, {}) || {};
    }, [assessment?.questionSets])

    const handleTriggerReview = () => {
        setOpenReview(!openReview)
    }

    const handleGotoQuestion = (id: string) => {
        setOpenReview(!openReview)
        window.scrollTo({
            top: questionSetRefs[id].current?.offsetTop,
            behavior:"smooth",
        })
        // questionSetRefs[id].current?.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'center',

        // })
        
    };

    const memoQuestions = useMemo(() => {
        return <List>
            {assessment?.questionSets.map((questionSet, idx) =>
                <ListItem key={idx} style={{ display: "block" }} ref={questionSetRefs["question-" + String(idx)]}>
                    <QuestionComponent questionNum={idx} questionSet={questionSet}></QuestionComponent>
                </ListItem>)}
        </List>
    }, [assessment?.questionSets, questionSetRefs])






    useEffect(() => {
        const localAssessmentString = localStorage.getItem(title)

        if (localAssessmentString) {
            const localAssessment = JSON.parse(localAssessmentString) as Assessment
            setAssessment(localAssessment)
            dispatchPractice({ type: "changePractice", questionSets: localAssessment?.questionSets || [] })
            console.log("available in local storage")
        } else {
            console.log("not available in local storage")
            getAssessmentInfos().then(assessmentInfos => {
                const assessmentInfo = assessmentInfos?.filter(assessmentInfo => assessmentInfo.title === title)[0]
                if (assessmentInfo) {
                    getAssessment(assessmentInfo).then(assessment => {
                        setAssessment(assessment)
                        dispatchPractice({ type: "changePractice", questionSets: assessment.questionSets })
                    })
                }
                else {
                    alert("Fail to retrieve assessment")
                }
            })
        }


    }, [title, dispatchPractice])

    return (
        <>
            <Container style={{ marginTop: "74px" }}>
                {assessment ? memoQuestions : <p>LOADING</p>}
            </Container>
            <Fab variant="extended" onClick={handleTriggerReview} className={classes.floatingButton} color="secondary" aria-label="submit or check">
                <PlaylistAddCheck />Review
                </Fab>
            <Dialog
                open={openReview}
                aria-labelledby="qna-review-title"
                aria-details="qna-review-details"
                onClose={handleTriggerReview}
                style={{ width: "90vw", height: "90vh" }}
            >
                <DialogTitle id="qna-review-title">
                    Questions and Answers Review
                </DialogTitle>
                <DialogContent style={{ padding: 50, paddingTop:0 , overflowX: "hidden" }}>
                    <ReviewQuestions handleGotoQuestion={handleGotoQuestion} />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Practice