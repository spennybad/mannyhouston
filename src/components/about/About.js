import Image from 'next/image';
import styled from 'styled-components';
import H2 from '../comps/h2';

const AboutContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;

    background-color: ${(props) => props.theme.colors.black};

    overflow-x: hidden;

    & > * {
        padding: 12rem;
    }

    & > :first-child {
        display: grid;
        grid-template-rows: auto 1fr;

        justify-items: center;
        align-items: center;
    }

    & > :nth-child(2) {
        position: relative;
    }
    
`

const AboutP = styled.p`

    font-size: ${(props) => props.theme.fontSize.p};
    color: ${(props) => props.theme.colors.white};

`

const AboutImageWrapper = styled.div`

    width: 50rem;

    position: absolute;

    top: 50%;
    right: -5rem;

    transform: scaleX(-1) rotate(3deg) translateY(-50%);

    border: 1rem solid ${(props) => props.theme.colors.blue};

`

const temp_text = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero labore quo nesciunt doloribus eveniet facere iusto, ea, nostrum natus explicabo minus ipsa nobis consequatur obcaecati fuga facilis ratione reprehenderit. Lorem ipsum dolor    sit amet consectetur adipisicing elit. Perspiciatis minus dolor fugit aspernatur velit quam nam in officia accusamus repellendus, reiciendis autem et mollitia nisi libero qui? Quia. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus dolor fugit aspernatur velit quam nam in officia accusamus repellendus, reiciendis autem et mollitia nisi libero qui? Quia.";

const About = () => {
    return (
        <section>
            <AboutContent>
                <div>
                    <H2>About Manny Houston</H2>
                    <AboutP>{temp_text}</AboutP>
                </div>
                <div>
                    <AboutImageWrapper>
                        <Image 
                            src="/imgs/manny_1.jpg"
                            alt="Manny sitting on brick wall."
                            height={3339}
                            width={2496}
                        />
                    </AboutImageWrapper>
                </div>
            </AboutContent>
        </section>
    );
}
 
export default About;