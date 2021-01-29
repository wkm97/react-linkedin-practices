import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import { QuestionSet } from "../../services/assessment";
import Markdown from "./MarkdownElement";

interface Props {
    questionSet: QuestionSet
}
const QuestionComponent = (props: Props) => {
    const { questionSet } = props;
    const [value, setValue] = useState<number | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt((event.target as HTMLInputElement).value));
      };


    return (
        <>
            <Box display="block" overflow="hidden" style={{marginTop:"10vh"}}>
            <Markdown>{questionSet.question}</Markdown>
            <FormControl component="fieldset">
                <RadioGroup style={{marginLeft:"12px"}} aria-label="choice" name="choices" value={value} onChange={handleChange}>
                    {questionSet.choice.map((choiceItem, idx) => <FormControlLabel key={idx} value={idx} control={<Radio />} label={<Markdown>{choiceItem}</Markdown>} />)}
                    {/* <FormControlLabel value="female" control={<Radio />} label={questionSet.choice[0]} />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="disabled" control={<Radio />} label="(Disabled option)" /> */}
                </RadioGroup>
            </FormControl>
            </Box>
        </>
    )
}

export default QuestionComponent;