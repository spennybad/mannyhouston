import styled, { css } from 'styled-components';
import Link from 'next/link';

import media from '../MediaQueries';

import CalcNextPrevPage from '../../utils/CalcNextPrevPage';

const Button = styled.button`
    position: absolute;

    background-color: transparent;

    top: 50%;
    transform: translate(0, -50%);

    border: none;

    ${({ position }) => 
        (position === "right") && css`
            right: 1rem;
        `
        ||
        (position === "left") && css`
            left: 1rem;
        `
    }
`

const SVG = styled.img`
    height: 5rem;
    width: 5rem;

    ${media.width_1500`
        height: 4rem;
    `}

    transition: all .2s;

    &:hover {
        transform: scale(1.1);
    }

    cursor: pointer;

`

const BlogNextPrevButton = ({_next, _prev, pageNum, totalPages, setIsClicked}) => {

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
                    <Button position="left" onClick={() => setIsClicked(true)}>
                        <SVG src="/imgs/svg/arrow-left.svg" alt="Arrow Left"/>
                    </Button>
                </a>
            </Link>)
            ||
            (next && <Link href={final_link}>
                <a>
                    <Button position="right" onClick={() => setIsClicked(true)}>
                        <SVG src="/imgs/svg/arrow-right.svg" alt="Arrow Right" />
                    </Button>
                </a>
            </Link>)
            }
        </>
    );

}
 
export default BlogNextPrevButton;