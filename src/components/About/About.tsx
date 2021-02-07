import { Box, Button, Card, CardActions, CardContent, Container, Link, Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import MarkdownCustom from "../Practice/MarkdownCustom";


const About = () => {
    const [aboutDetail, setAboutDetail] = useState<string>()

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/wkm97/react-linkedin-practices/master/USEFUL_REFERENCE.md').then(response => {
            response.text().then(
                content => setAboutDetail(content)
            )
        })
    }, [])

    return (
        <Container style={{ marginTop: 84 }}>
            <Card style={{ margin: 20 }}>
                <CardContent>
                    <Typography align="left" variant="h5">Data Source:</Typography>
                    <Typography align="left" variant="body1">
                        <Link
                            color="textSecondary"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes"
                        >
                            Linkedin Quiz Answers, Skill Assessments Test - Collected by Ebazhanov and Collaborators.
                    </Link>
                    </Typography>

                </CardContent>
            </Card>

            <Card style={{ margin: 20 }}>
                <CardContent>
                    <Box display="flex">
                        <Typography variant="h5">Project Repository:</Typography>
                        <div style={{flexGrow:1}}/>
                        <Button variant="outlined" onClick={() => window.open("https://github.com/wkm97/react-linkedin-practices/issues", "_blank")}>
                            Report Issues
                        </Button>
                    </Box>

                    <Typography align="left" variant="body1">
                        <Link
                            color="textSecondary"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/wkm97/react-linkedin-practices"
                        >
                        React LinkedIn Practices - Created by wkm97
                    </Link>
                    </Typography>

                </CardContent>
                <CardActions>
                    <div style={{ flexGrow: 1 }} />
                    <Button
                        onClick={() => window.open("https://github.com/wkm97/", "_blank")}
                    >
                        <GitHub fontSize="large" />
                    </Button>
                    <Button
                        onClick={() => window.open("https://www.linkedin.com/in/wkm97/", "_blank")}
                    >
                        <LinkedIn fontSize="large" />
                    </Button>

                </CardActions>
            </Card>

            <Card style={{ margin: 20 }}>
                <CardContent>
                    {aboutDetail ? <MarkdownCustom align="left">{aboutDetail}</MarkdownCustom> : <div />}
                </CardContent>
            </Card>
        </Container>
    )
}

export default About;