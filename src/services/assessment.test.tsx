import { getAssessmentInfos, AssessmentInfo, getAssessment, extractQuestionSet, partitionQuestionPaper, extractChoiceAnswerDetail } from "./assessment";



const fetchRawAssessment = async (assessmentURL:string) =>{
    return await (await fetch(assessmentURL)).text()
}

test("Grab assessments list from github", async () => {
    const assessments = await getAssessmentInfos() || [];
    console.log(assessments)
    expect(assessments.length).toBeGreaterThan(20);
})

test("Partition questions for assessments", async ()=>{
    const tolerateQuestionNum = 2
    const assessments = await getAssessmentInfos() || [];
    const fetchPartitions = async (assessment:AssessmentInfo) => {
        if(assessment.link){
            let content = await fetchRawAssessment(assessment.link)
            const partitions = partitionQuestionPaper(content)
            if(partitions.length < assessment.numQuestions - tolerateQuestionNum){
                console.log(`The number of questions is too less in this assessment (${assessment.title})`)
            }
            expect(partitions.length).toBeGreaterThanOrEqual(assessment.numQuestions - tolerateQuestionNum);
        }
    }
    await Promise.all(assessments.map(fetchPartitions))
})

test("Break down question procedure", async()=>{
    const assessmentURL = "https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/master/git/git-quiz.md"
    let content = await fetchRawAssessment(assessmentURL)
    const partitions = partitionQuestionPaper(content)

    let rawQuestionSet = partitions[17]
    
    const questionSet = extractQuestionSet(rawQuestionSet)
    console.log(questionSet)
    expect(questionSet).toMatchObject({
        "question":expect.any(String), 
        "choice":expect.any(Array),
        "answer":expect.any(Array), 
        })
    // const answer = extractChoiceAnswerDetail(rawAnswer)
    // console.log(rawAnswer)
})


const str = `




adsad








helloworld




`

test("remove leading and trailing newline", () =>{
    
    const result = str.replace(/^\n+|\n+$/g,"")
    // console.log(result)
})