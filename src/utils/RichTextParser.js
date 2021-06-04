import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';


const _H4 = styled.h4`
    font-size: ${(props) => props.theme.fontSize_default.h3};
    margin: 0;
    margin: 2rem 0rem 0rem 0rem;
`

const _H5 = styled.h5`
    font-size: ${(props) => props.theme.fontSize_default.h5};
    margin: 0;
    margin: 2rem 0rem 0rem 0rem;
`

const _H6 = styled.h6`
    font-size: ${(props) => props.theme.fontSize_default.h5};
    margin: 0;
    margin: 2rem 0rem 0rem 0rem;
`

const _P = styled.p`
    font-size: ${(props) => props.theme.fontSize_default.p};
    margin: 2rem 0rem 2rem 2rem;
`

const _UL = styled.ul`
    margin-top: -2rem;
`

const _OL = styled.ol`
    margin-top: -2rem;
`

const _LI = styled.li`
    margin: 0 0 0 6rem;

    & > p {
        margin: 0;
    }

`

const _HR = styled.hr`
    width: 100%;
`

const _A = styled.a`

    &:link,
    &:visited,
    &:active {

        display: inline-block;
        color: ${(props) => props.theme.colors.blue};
        transition: all .2s;

        &:hover {
            transform: scale(1.1) rotate(2deg);
        }

    }
`

const H4 = ({ children }) => <_H4>{ children }</_H4>

const H5 = ({ children }) => <_H5>{ children }</_H5>

const H6 = ({ children }) => <_H6>{ children }</_H6>

const P = ({ children }) => <_P>{ children }</_P>

const HR = () => <_HR />

const UL = ({ children }) => <_UL>{ children }</_UL>

const OL = ({ children }) => <_OL>{ children }</_OL>

const LI = ({ children }) => <_LI>{ children }</_LI>

const HYPERLINK = ({node, children}) => {
    return(
        <_A href={node.data.uri}>{ children }</_A>
    );
}

const replaceSpaces = (text) => {
    const re = new RegExp(String.fromCharCode(160), "g");
    return text.replace(re, " ");
}

const options = {
    renderText: text => replaceSpaces(text),
    renderNode: {
        [BLOCKS.HEADING_4]: (node, children) => <H4>{ children }</H4>,
        [BLOCKS.HEADING_5]: (node, children) => <H5>{ children }</H5>,
        [BLOCKS.HEADING_6]: (node, children) => <H6>{ children }</H6>,
        [BLOCKS.PARAGRAPH]: (node, children) => <P>{ children }</P>,
        [BLOCKS.UL_LIST]: (node, children) => <UL>{ children }</UL>,
        [BLOCKS.OL_LIST]: (node, children) => <OL>{ children }</OL>,
        [BLOCKS.LIST_ITEM]: (node, children) => <LI>{ children }</LI>,
        [BLOCKS.HR]: () => <HR />,

        [INLINES.HYPERLINK]: (node, children) => {
            console.log(node);
            return(
                <HYPERLINK node={ node }>{children}</HYPERLINK>
            );
        }
    }
}

export default class RichTextParser {

    static blogPostRenderer(richText) {
        console.log(richText);
        return(documentToReactComponents(richText, options));
    }
}