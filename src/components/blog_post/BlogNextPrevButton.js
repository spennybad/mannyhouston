import styled, { css } from 'styled-components';
import Link from 'next/link';

import CalcNextPrevPage from '../../utils/CalcNextPrevPage';

const Button = styled.button`
    position: absolute;

    top: -8rem;

    font-size: ${(props) => props.theme.fontSize_default.p};
    font-family: ${(props) => props.theme.fontFamily.p};
    text-transform: uppercase;
    text-align: center;

    padding: 0 1rem;

    z-index: 1;

    ${({ position }) => 
        (position === "right") && css`
            right: 0
        `
        ||
        (position === "left") && css`
            left: 0;
        `
    }

`

const BlogNextPrevButton = ({_next, _prev, pageNum, totalPages}) => {
    let next = null; let prev = null;

    if (_next) {
        next = CalcNextPrevPage.getNextPage(pageNum, totalPages);
    }

    if (_prev) {
        prev = CalcNextPrevPage.getPrevPage(pageNum);
    }

    const final_link = _next ? next : prev;

    return (
        <>
            {
            (prev && <Link href={final_link}>
                <a>
                    <Button position="left">
                        back
                    </Button>
                </a>
            </Link>)
            ||
            (next && <Link href={final_link}>
                <a>
                    <Button position="right">
                        next
                    </Button>
                </a>
            </Link>)
            }
        </>
    );

}
 
export default BlogNextPrevButton;