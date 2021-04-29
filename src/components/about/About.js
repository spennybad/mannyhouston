import Image from 'next/image';
import styled from 'styled-components';

import H2 from '../comps/h2';
import Section from '../comps/section';

import media from '../MediaQueries';


const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;

    background-color: ${(props) => props.theme.colors.black};

    overflow-x: hidden;

    & > :first-child {
        display: grid;
        grid-template-rows: repeat(2, min-content);

        grid-gap: 6rem;

        justify-items: center;
        align-items: center;

        align-self: center;
    }

    & > :nth-child(2) {
        position: relative;
    }

    & > div span {
        white-space: nowrap;
    }

    
    ${media.width_900`
        grid-template-columns: 100%;
    `} 

    
`

const AboutP = styled.p`

    font-size: ${(props) => props.theme.fontSize_default.p};
    color: ${(props) => props.theme.colors.white};

    padding: 1rem;

    z-index: 1;

    background-color: rgba(0, 0, 0, .75);

    ${media.width_1200`
        font-size: ${(props) => props.theme.fontSize_br_1200.p};
    `}

    ${media.width_1000`
        font-size: ${(props) => props.theme.fontSize_br_1000.p};
    `}

    ${media.width_800`
        font-size: ${(props) => props.theme.fontSize_br_800.p};
    `}

`

const AboutImageWrapper = styled.div`

    width: 85rem;
    height: 85rem;
    
    position: absolute;

    bottom: 0;
    right: 0;

    ${media.width_1500`
        width: 70rem;
        height: 70rem;
    `}

    ${media.width_900`
        width: 60rem;
        height: 60rem;
    `}

    ${media.width_800`
        width: 50rem;
        height: 50rem;
    `}

`

const temp_text = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero labore quo nesciunt doloribus eveniet facere iusto, ea, nostrum natus explicabo minus ipsa nobis consequatur obcaecati fuga facilis ratione reprehenderit. Lorem ipsum dolor    sit amet consectetur adipisicing elit. Perspiciatis minus dolor fugit aspernatur velit quam nam in officia accusamus repellendus, reiciendis autem et mollitia nisi libero qui? Quia. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus dolor fugit aspernatur velit quam nam in officia accusamus repellendus, reiciendis autem et mollitia nisi libero qui? Quia.";

const About = () => {
    return (
        <Section>
            <AboutContent>
                <div>
                    <H2>About <span>Manny Houston</span></H2>
                    <AboutP>{temp_text}</AboutP>
                </div>
            </AboutContent>
            <AboutImageWrapper>
                <Image
                    src="/imgs/photoshop/about_cut_out.png"
                    alt="Manny sitting on brick wall."
                    layout="fill"
                />
            </AboutImageWrapper>
        </Section>
    );
}

export default About;