import { Box, createStyles, Grid, makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { questionStatus, usePracticeState } from "../../contexts/practice-context";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        reviewQuestion: {
            fontWeight: "bolder",
            "&:hover": {
                textDecoration: "underline",
                cursor: "pointer"
            }
        },
        correctResult: {
            height: 10,
            backgroundColor: theme.palette.success.main
        },
        wrongResult: {
            height: 10,
            backgroundColor: theme.palette.error.main
        },
        neutralResult: {
            height: 10,
            backgroundColor: theme.palette.grey[500]
        },
        resultIndicator: {
            display: "block",
            width: "100%",
            textAlign: "center"
        }
    }),
);

interface Props {
    handleGotoQuestion: (id: string) => void
}

interface ResultContainerProps {
    percentage: number,
    className: string
}

const ResultContainer = (props: ResultContainerProps) => {
    const classes = useStyles();
    return (
        <div style={{ width: `${props.percentage}%` }}>
            <div className={props.className} />
            <span className={classes.resultIndicator}>{`${props.percentage}%`}</span>
        </div>
    )
}

const ReviewQuestions = (props: Props) => {
    const theme = useTheme();
    const classes = useStyles();
    const statePractice = usePracticeState();
    const { handleGotoQuestion } = props;

    const getQuestionStatusColor = (status: string) => {
        switch (status) {
            case questionStatus.CORRECT: {
                return theme.palette.success.main
            }
            case questionStatus.WRONG: {
                return theme.palette.error.main
            }
            default: {
                return theme.palette.text.primary
            }
        }
    }



    const Results = () => {
        const total = statePractice.curr_session.length;
        const correctCount = statePractice.curr_session.filter(item => item.status === questionStatus.CORRECT).length;
        const wrongCount = statePractice.curr_session.filter(item => item.status === questionStatus.WRONG).length;
        const neutralCount = statePractice.curr_session.filter(item => item.status === questionStatus.NEUTRAL).length;
        const correctPercentage = Math.round(correctCount / total * 100)
        const wrongPercentage = Math.round(wrongCount / total * 100)
        const neutralPercentage = Math.round(neutralCount / total * 100)

        return (
            <>
                <Box flexDirection="row" marginBottom={5}>

                    <Typography variant="body1" display="block">{`Correct: ${correctCount}`}</Typography>
                    <Typography variant="body1" display="block">{`Neutral: ${neutralCount}`}</Typography>
                    <Typography variant="body1" display="block">{`Wrong: ${wrongCount}`}</Typography>
                </Box>

                <Typography variant="caption" align="center">Result Bar</Typography>
                <div style={{ marginBottom: 20, display: "flex" }}>
                    <ResultContainer percentage={correctPercentage} className={classes.correctResult} />
                    <ResultContainer percentage={neutralPercentage} className={classes.neutralResult} />
                    <ResultContainer percentage={wrongPercentage} className={classes.wrongResult} />
                    {/* <div style={{width:`${neutralPercentage}%`}}><div className={classes.neutralResult}/><span className={classes.resultIndicator}>70%</span></div>
                <div style={{width:`${wrongPercentage}%`}}><div className={classes.wrongResult}/><span className={classes.resultIndicator}>70%</span></div> */}
                </div>
            </>
        )
    }



    return (
        <>
            <Results />
            <Grid container spacing={5} justify="center" alignItems="flex-start">
                {statePractice.curr_session.map((item, idx) => {
                    return (
                        <Grid key={idx} item xs={1}>
                            <Typography
                                className={classes.reviewQuestion}
                                style={
                                    {
                                        color: getQuestionStatusColor(item.status)
                                    }
                                }
                                variant="button"
                                onClick={() => { handleGotoQuestion(`question-${idx}`) }}
                            >
                                {idx + 1}
                            </Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </>

    )
}

export default ReviewQuestions;