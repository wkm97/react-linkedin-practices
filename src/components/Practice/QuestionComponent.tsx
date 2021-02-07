import { Button, Card, CardActions, CardContent, Collapse, createStyles, FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, Theme } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import React, { useState } from "react";
import { usePracticeDispatch } from "../../contexts/practice-context";
import { QuestionSet } from "../../services/assessment";
import MarkdownCustom from "./MarkdownCustom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "nowrap"
        },
        labelroot: {
            margin: 2,
            marginRight: 0
        },
        label: {
            overflow: "auto",
            marginRight: 0,
            width: "100%"
        },
        correctChoice: {
            backgroundColor: theme.palette.success.main,
            borderRadius: 20
        },
        wrongChoice: {
            backgroundColor: theme.palette.error.main,
            borderRadius: 20
        }
    }),
);

interface Props {
    questionNum: number
    questionSet: QuestionSet
}

const QuestionComponent = (props: Props) => {
    const classes = useStyles();
    const { questionSet } = props;
    const [selectedValues, setSelectedValues] = useState<number[]>([])
    const [showAnswer, setShowAnswer] = useState(false)
    const dispatch = usePracticeDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedIdx = parseInt((event.target as HTMLInputElement).value)
        setSelectedValues([selectedIdx]);
        dispatch({type: 'selectChoices', questionIdx: props.questionNum, selectedIdx:selectedValues})
    };
    const handleShowAnswer = () => {
        setShowAnswer(true);
        dispatch({type: 'submitAnswer', questionIdx: props.questionNum, selectedIdx:selectedValues})
    };


    return (
        <Card variant="outlined">
            <CardContent>
                <MarkdownCustom>{questionSet.question}</MarkdownCustom>
                <FormControl classes={{ root: classes.root }} component="fieldset">
                    <RadioGroup classes={{ root: classes.root }} aria-label="choice" name="choices" value={selectedValues.length > 0 ? selectedValues[0]:null} onChange={handleChange}>
                        {questionSet.choice.map((choiceItem, idx) => {
                            let labelClass = {}
                            if (showAnswer) {
                                if (selectedValues.includes(idx) && !questionSet.answer.includes(idx)) {
                                    labelClass = { className: classes.wrongChoice }
                                } else if (questionSet.answer.includes(idx)) {
                                    labelClass = { className: classes.correctChoice }
                                }
                            }
                            return <FormControlLabel {...labelClass} disabled={showAnswer} classes={{ root: classes.labelroot, label: classes.label }} key={idx} value={idx}
                                control={<Radio />}
                                label={
                                    <MarkdownCustom>{choiceItem}</MarkdownCustom>
                                } />
                        })}
                    </RadioGroup>
                </FormControl>
            </CardContent>
            <CardActions>
                <Button disabled={showAnswer} variant="outlined" onClick={handleShowAnswer} aria-expanded={showAnswer} aria-label="show answer.">
                    <Check /><span style={{ marginLeft: 5 }}>Check Answer</span>
                </Button>
            </CardActions>
            <Collapse in={showAnswer} timeout="auto" unmountOnExit>
                {questionSet.detail ? <CardContent>
                    <MarkdownCustom>{questionSet.detail}</MarkdownCustom>
                </CardContent> : null}
            </Collapse>
        </Card>
    )
}

export default QuestionComponent;