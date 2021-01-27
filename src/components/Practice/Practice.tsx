import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AssessmentInfo, getAssessment, getAssessmentInfos, QuestionSet } from "../../services/assessment";

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
        <>
            {assessment?.questionSets.map((questionSet, idx) => <Typography key={idx} style={{ marginTop: 100 }} variant="h6">{questionSet.question}</Typography>)}
        </>
    )
}

export default Practice