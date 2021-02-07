import * as React from 'react'
import { QuestionSet } from '../services/assessment'
import { areArraysEqualSets } from '../utils/arrayUtils'

export enum questionStatus {
    NEUTRAL = "NEUTRAL",
    CORRECT = "CORRECT",
    WRONG = "WRONG",
    SELECTED = "SELECTED"
}

type Action = { type: "submitAnswer", questionIdx: number, selectedIdx: number[] } |
            { type: "changePractice", questionSets: QuestionSet[] } |
            { type: "selectChoices", questionIdx: number, selectedIdx: number[] }
type Dispatch = (action: Action) => void

type State = { questionSets: QuestionSet[], curr_session: { status: string, answer: number[], selected: number[] | null }[] }

type PracticeProviderProps = { children: React.ReactNode }//assessment:{ assessmentInfo: AssessmentInfo, questionSets: QuestionSet[] }}

const PracticeStateContext = React.createContext<State | undefined>(undefined)

const PracticeDispatchContext = React.createContext<Dispatch | undefined>(undefined,)

const initialState = {
    questionSets: [],
    curr_session: []
}

const practiceReducer = (state: State, action: Action) => {
    switch (action.type) {

        case 'selectChoices': {
            let curr_session = state.curr_session
            curr_session[action.questionIdx].selected = action.selectedIdx
            curr_session[action.questionIdx].status = questionStatus.SELECTED
            return { ...state, curr_session: curr_session}
        }

        case 'submitAnswer': {
            let curr_session = state.curr_session
            let question = curr_session[action.questionIdx]
            question.selected = action.selectedIdx
            if(areArraysEqualSets(question.answer, question.selected)){
                question.status = questionStatus.CORRECT
            }else{
                question.status = questionStatus.WRONG
            }
            curr_session[action.questionIdx] = question
            return { ...state, curr_session: curr_session}
        }

        case 'changePractice': {
            const curr_session = action.questionSets.map(item => ({ status: questionStatus.NEUTRAL, answer: item.answer, selected: null }))

            return { ...state, questionSets: action.questionSets, curr_session: curr_session }
        }

        default: {

            throw new Error(`Unhandled action type`); // : ${action.type}`)

        }

    }
}

const PracticeProvider = ({ children }: PracticeProviderProps) => {
    const [state, dispatch] = React.useReducer(practiceReducer, initialState)

    return (

        <PracticeStateContext.Provider value={state}>

            <PracticeDispatchContext.Provider value={dispatch}>

                {children}

            </PracticeDispatchContext.Provider>

        </PracticeStateContext.Provider>

    )
}

const usePracticeState = () => {

    const context = React.useContext(PracticeStateContext)

    if (context === undefined) {

        throw new Error('usePracticeState must be used within a PracticeProvider')

    }

    return context

}

const usePracticeDispatch = () => {

    const context = React.useContext(PracticeDispatchContext)

    if (context === undefined) {

        throw new Error('usePracticeDispatch must be used within a PracticeProvider')

    }

    return context

}


export { PracticeProvider, usePracticeState, usePracticeDispatch };