import { Container, List, ListItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AssessmentInfo, getAssessment, getAssessmentInfos, QuestionSet } from "../../services/assessment";

import QuestionComponent from "./QuestionComponent";

const Practice = () => {
    const { title } = useParams<{ title: string }>();
    const [assessment, setAssessment] = useState<{ assessmentInfo: AssessmentInfo, questionSets: QuestionSet[] }>()



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
        <Container>
            <List>
                {assessment?.questionSets.map((questionSet, idx) => <ListItem key={idx}>
                    <QuestionComponent questionSet={questionSet}></QuestionComponent>
                </ListItem>)}
            </List>
        </Container>
    )
}

export default Practice