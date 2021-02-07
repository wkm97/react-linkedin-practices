
import React, { useContext, useEffect, useRef } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import hljs from 'highlight.js';
import { CustomThemeContext } from '../../themes/CustomThemeProvider';

const styles = (theme: Theme) => (
    createStyles({
        listItem: {
            marginTop: theme.spacing(1)
        },
        markdownItem: {
            backgroundColor: "transparent",
            textAlign: "left",
            width:"100%"
        }
    })
);

const useStyles = makeStyles(styles);

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h5',
            },
        },
        h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
        h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1', style:{margin:"0.35em"}} },
        h4: {
            component: Typography,
            props: { gutterBottom: true, variant: 'caption', paragraph: true },
        },
        p: { component: Typography, props: { paragraph: true, style:{margin:"0.35em"} } },
        a: { component: Link, props:{rel:"noopener noreferrer", target:"_blank"}},
        li: {
            component: withStyles(styles)(({ classes, ...props }: { classes: any }) => (
                <li className={classes.listItem}>
                    <Typography component="span" {...props} />
                </li>
            )), 
        },
        img:{
            props:{ style:{maxWidth:"100%"}}
        },
        code:{
            props:{ style:{marginRight:"1vw"}}
        }
    },
};

export default function MarkdownCustom(props: any) {
    const classes = useStyles();
    const rootRef = useRef<HTMLDivElement>(null);
    const { currentTheme } = useContext(CustomThemeContext)

    useEffect(() => {
        if (currentTheme === "light") {
            document?.querySelector(`link[title="light"]`)?.removeAttribute("disabled");
            document?.querySelector(`link[title="dark"]`)?.setAttribute("disabled", "disabled");
        } else {
            document?.querySelector(`link[title="dark"]`)?.removeAttribute("disabled");
            document?.querySelector(`link[title="light"]`)?.setAttribute("disabled", "disabled");
        }

        rootRef?.current?.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block as HTMLElement);
        });

    }, [rootRef, currentTheme]);

    return <div className={classes.markdownItem} ref={rootRef} ><ReactMarkdown options={options} {...props} /></div>;
}