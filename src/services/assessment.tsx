import { stringUtils } from '../utils'

export interface AssessmentInfo {
    title?:string;
    link?: string;
    numQuestions: number;
    assessmentStatus?: string;
}

export interface QuestionSet {
    question: string;
    choice: string[];
    answer: number[];
    detail?: string;
}

export interface Assessment {
    assessmentInfo: AssessmentInfo
    questionSets: Array<QuestionSet>
}


const getAssessmentInfos = async (): Promise<Array<AssessmentInfo> | void> =>{
    const assessmentsURL = "https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/master/README.md"
        
    return fetch(assessmentsURL).then(response => response.text().then(content=>{
        let result = content.match(/\| \[Adobe(.|\n)*\|/g)
        if(result != null){
            result = result[0].split('\n')
            let assessmentInfos = result.map(assessmentInfo => {
                
                let title = (assessmentInfo.match(/\[(.*)\]/i) || [undefined, undefined])[1];
                let link = (assessmentInfo.match(/\[.*\]\((.*)\)/) || [undefined, undefined])[1];
                let numQuestions = parseInt((assessmentInfo.match(/=>(.*)questions/i) || ['0', '0'])[1]);
                let assessmentStatus = (assessmentInfo.match(/questions\s+\|(.*)\s+\|/) || [undefined, undefined])[1]?.trim();

                link = link !== undefined? "https://raw.githubusercontent.com/Ebazhanov/in-quiz-questions/master/" + link.replace(/<|>/g,"") : undefined
                
                return {"title":title,"link":link, "numQuestions":numQuestions,"assessmentStatus": assessmentStatus}
            })
            
            return assessmentInfos.filter(item=> item.title && item.assessmentStatus === 'with answers')
        }
        else{
            alert("Failed to parse list of assessment.")
            throw new Error("Failed to parse list of assessment.")
        }
    })).catch((e) => alert(e))
}

const getAssessment = async (assessmentInfo: AssessmentInfo) : Promise<Assessment>  => {
    if(assessmentInfo.link){
        let content = await (await fetch(assessmentInfo.link)).text()

        let partitioned_raw_question_sets = partitionQuestionPaper(content);
        if(partitioned_raw_question_sets.length === 0){throw new Error("Failed to partition question.")}

        let question_sets = partitioned_raw_question_sets.map(extractQuestionSet).filter(checkQuestionSet)
        
        return {assessmentInfo: assessmentInfo, questionSets: question_sets}
    }else{
        throw new Error(`Link to Question for ${assessmentInfo.title} not found.`)
    }
}

const checkQuestionSet = (questionSet: QuestionSet) => {
    return (questionSet.answer.length > 0 && questionSet.choice.length > 3)
}

const extractQuestionSet = (rawQuestion: string) : QuestionSet => {
    
    let questionByLine = rawQuestion.split(/(?<=\s{0,1}\n)/g) || []
    
    if(questionByLine.length === 0){throw new Error("Failed to break down question")}
    let question = "default question"
    let answerIndex = -1
    questionByLine.some((line, idx)=>{
        if(line.match(/-\s{0,1}\[[x{0,1}|\s]\]/)){
            question = questionByLine.slice(0,idx).join("")
            answerIndex = idx
            return true
        }else{
            return false
        }
    })
    question = stringUtils.trimNewline(question)
    let answer = questionByLine.slice(answerIndex).join("")

    let choiceAnswerDetail = extractChoiceAnswerDetail(answer)


    return {question: question, ...choiceAnswerDetail}
}

const extractChoiceAnswerDetail = (rawAnswer:string) =>{
    let choiceAnswerDetail = rawAnswer.trim().split(/(?=-\s{0,1}\[[x{0,1}|\s]\])/g)
    let answer = extractAnswerIdx(choiceAnswerDetail)
    let choiceDetail = removeAnswer(choiceAnswerDetail)
    let detail = extractDetail(choiceAnswerDetail)
    
    return {"choice": choiceDetail, "answer": answer, "detail": detail}
}

const extractDetail = (choiceAnswerDetail: Array<string>) : string | undefined => {
    choiceAnswerDetail = choiceAnswerDetail.map(stringUtils.trimNewline)

    // Assume Details at last
    let lastChoiceDetail = choiceAnswerDetail[choiceAnswerDetail.length-1]
    let detailMatch = lastChoiceDetail.match(/\n{2,}.*$/g)
    let detail = detailMatch ? detailMatch[0] : ""

    // Assume Details behind `<< Correct`
    if(detail === ""){
        
        choiceAnswerDetail.some(choiceAnswerDetailItem=>{
            const regMatch = choiceAnswerDetailItem.match(/<{2,3}-{0,3}\s{0,1}CORRECT.*/i)
            if(regMatch){
                detail = regMatch[0].replace(/<{2,3}-{0,3}\s{0,1}CORRECT/i,"")
                return true
            }else{
                return false
            }
        })
    }

    return detail !== "" ? stringUtils.trimNewline(detail) : undefined
}

const extractAnswerIdx = (choiceAnswer: Array<string>) => {
    // choiceAnswer = choiceAnswer.map(item=>item.replace(/\[x\]/i, "<<--- Correct"))

    let answer = choiceAnswer.map(item => item.match(/\[x\]/i)? true : false)
    
    answer = answer.includes(true) === false ? choiceAnswer.map(item => item.match(/<{2,3}-{0,3}\s{0,1}CORRECT/i)? true : false) : answer
    
    return answer.map((bool, i) => bool ? i : -1).filter(i => i !== -1);
}

const removeAnswer = (choiceAnswer: Array<string>) => {
    let choice = choiceAnswer.map(item => item.replace(/-\s{0,1}\[[x{0,1}|\s]\]/ig, ""))
    choice = choice.map(item=>item.replace(/<{2,3}-{0,3}\s{0,1}CORRECT.*/ig, ""))

    return choice.map(stringUtils.trimNewline)
}

const partitionQuestionPaper = (questionPaper:string): Array<string> => {
    //EXAMPLE: #### Q 14.

    let content = (questionPaper.match(/#{3,4}\s{0,1}Q{0,1}\.{0,1}\s{0,1}\d+(.|\n)*/g) || [undefined])[0];
    if(content){
        // return content.match(/#{2,4}\s{0,1}Q{0,1}\.{0,1}\d+[^#]*/g) || []
        // return content.split(/\n#{3,4}\s{0,1}Q{0,1}\.{0,1}\d+\.{0,1}/)
        return content.split(/(?=#{3,4}\s{0,1}Q{0,1}\.{0,1}\s{0,1}\d+\.{0,1})/g).filter(item=>item.length > 4)
    } 
    return [];
}


export { getAssessmentInfos, getAssessment, extractQuestionSet, partitionQuestionPaper, extractChoiceAnswerDetail };
