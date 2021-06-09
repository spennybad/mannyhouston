import styled, { css } from 'styled-components';
import Link from 'next/link';

import media from '../MediaQueries';

import CalcNextPrevPage from '../../utils/CalcNextPrevPage';

const Button = styled.button`
    position: absolute;

    top: -6rem;

    background-color: transparent;

    border: none;

    ${({ position }) => 
        (position === "right") && css`
            right: 6rem;
        `
        ||
        (position === "left") && css`
            left: 6rem;
        `
    }
`

const SVG = styled.img`
    fill: red !important;
    height: 5rem;

    ${media.width_1500`
        height: 4rem;
    `}

    transition: all .2s;

    &:hover {
        transform: scale(1.1);
    }

    cursor: pointer;

`

const BlogNextPrevButton = ({_next, _prev, pageNum, totalPages, setIsClicked, setIsPageChange}) => {
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
                        <SVG src="/imgs/svg/arrow-left.svg" alt="Arrow Left"/>
                    </Button>
                </a>
            </Link>)
            ||
            (next && <Link href={final_link}>
                <a>
                    <Button position="right">
                        <SVG src="/imgs/svg/arrow-right.svg" alt="Arrow Right" />
                    </Button>
                </a>
            </Link>)
            }
        </>
    );

}
 
export default BlogNextPrevButton;