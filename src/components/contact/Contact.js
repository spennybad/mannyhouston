import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import Section from '../comps/section';
import H2 from '../comps/h2';

// Styling
const ContactWrapper = styled.div`
    display: grid;
    grid-template-rows: min-content 1fr;

    justify-items: center;

`

const ContactForm = styled.form`
    display: grid;
    grid-template-rows: repeat(2, min-content) 1fr min-content;
    grid-gap: 2rem;

    position: relative;

    margin-top: 3rem;
    
    width: 100%;
    max-width: 150rem;

    font-size: ${(props) => props.theme.fontSize_default.p};

    & > * {
        background-color: ${(props) => props.theme.colors.transBlack_75};
        color: ${(props) => props.theme.colors.white};
        border: none;

        font-family: ${(props) => props.theme.fontFamily.p};
        font-size: inherit;

        padding: 1rem;

        &::placeholder {
            color: ${(props) => props.theme.colors.white};
        }

    }
`

const StyledLabel = styled.label`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`

const FormInput = styled.input`
    padding: 1rem;
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};
`

const TextArea = styled.textarea`
    resize: none;
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};
`

const Button = styled.button`
    padding: 1rem 4rem;
    justify-self: center;
    transition: all .2s;
    box-shadow: ${(props) => props.theme.boxShadows.boxShadowLight};

    &:hover {
        transform: scale(1.1);
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.black};
        box-shadow: ${(props) => props.theme.boxShadows.boxShadowHeavy};

        & span{
            display: inline-block;
            transform: translateX(1rem);
        }
    }

`
const StyledImage = styled.img`
    object-fit: cover;
    object-position: center;
    filter: blur(.25rem);

    width: 100%;
    height: 100%;
`

const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    overflow: hidden;
`


const Contact = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleMailSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nameRef.current.value,
            from_email: emailRef.current.value,
            to_name: 'Manny Houston',
            message: messageRef.current.value
        }

        if (nameRef && emailRef && messageRef) {

            emailjs.send(

                process.env.NEXT_PUBLIC_MAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_MAIL_USER_ID

            ).then((result) => {
                resetMailForm();

            }, (error) => {
                resetMailForm();
            });
        }
    }

    const resetMailForm = () => {
        nameRef.current.value = null;
        emailRef.current.value = null;
        messageRef.current.value = null;
    }


    return (
        <Section>
             <BackgroundImageContainer>
                <StyledImage
                    srcSet="https://res.cloudinary.com/spencercv7-dev/image/upload/c_scale,w_768/v1620053588/manny_2_ty71kl.webp 768w,
                        https://res.cloudinary.com/spencercv7-dev/image/upload/c_scale,w_1024/v1620053588/manny_2_ty71kl.webp 1024w,
                        https://res.cloudinary.com/spencercv7-dev/image/upload/c_scale,w_1920/v1620053588/manny_2_ty71kl.webp 1920w,
                        https://res.cloudinary.com/spencercv7-dev/image/upload/v1620053588/manny_2_ty71kl.webp"
                    sizes="100%"
                    layout="fill"
                    alt="Contact Me Background - Manny Houston eating a bag of chips."
                />
            </BackgroundImageContainer>
            <ContactWrapper>
                <H2 styling="contact">Contact Manny</H2>
                <ContactForm onSubmit={handleMailSubmit}>


                    <FormInput id="user_name" type="text" name="user_name" ref={nameRef} placeholder="Name" required />
                    <StyledLabel htmlFor="user_name">Full Name</StyledLabel>

                    <FormInput id="user_email" type="email" name="user_email" ref={emailRef} placeholder="Email Address" required />
                    <StyledLabel htmlFor="user_email">Email</StyledLabel>

                    <TextArea id="message" name="message" ref={messageRef} required />
                    <StyledLabel htmlFor="message">Message</StyledLabel>

                    <Button type="submit" value="submit">Send <span>&rarr;</span></Button>

                </ContactForm>
            </ContactWrapper>
        </Section>
    );
}

export default Contact;