import * as React from 'react'
// import { AssessmentInfo, QuestionSet } from '../services/assessment'

type Action = { type: "submitAnswer", payload?: {count:number} }
type Dispatch = (action: Action) => void

type State = { count: number }

type PracticeProviderProps = { children: React.ReactNode, count:number }//assessment:{ assessmentInfo: AssessmentInfo, questionSets: QuestionSet[] }}

const PracticeStateContext = React.createContext<State | undefined>(undefined)

const PracticeDispatchContext = React.createContext<Dispatch | undefined>(undefined,)

const practiceReducer = (state: State, action: Action) => {
    switch (action.type) {

        case 'submitAnswer': {
            console.log(state.count)
            return {count: action.payload?.count || 0}
            // return { count: state.count + 1 }

        }

        default: {

            throw new Error(`Unhandled action type: ${action.type}`)

        }

    }
}

const PracticeProvider = ({ children, count }: PracticeProviderProps) => {
    const [state, dispatch] = React.useReducer(practiceReducer, { count: count })

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


export {PracticeProvider, usePracticeState, usePracticeDispatch};