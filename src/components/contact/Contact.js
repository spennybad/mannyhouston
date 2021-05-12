import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import Image from 'next/image';

import Section from '../comps/section';
import H2 from '../comps/h2';

import media from '../MediaQueries';


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

    margin-top: 3rem;
    width: 100%;

    z-index: 1;

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

const FormInput = styled.input`
    padding: 1rem;
`

const TextArea = styled.textarea`
    resize: none;
`

const Button = styled.button`
    padding: 1rem 4rem;
    justify-self: center;
    transition: all .2s;

    &:hover {
        transform: scale(1.1);
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.black};
        border-radius: 1rem;

        & span{
            display: inline-block;
            transform: translateX(1rem);
        }
    }

`

const BackgroundImage = styled(Image)`
    object-fit: cover;
    z-index: 0;

    filter: blur(.3rem);
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
                console.log(result.text);
                resetMailForm();

            }, (error) => {
                console.log(error.text);
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
            <ContactWrapper>
                <H2 styling="contact">Contact Manny</H2>
                <ContactForm onSubmit={handleMailSubmit}>
                    <FormInput type="text" name="user_name" ref={nameRef} placeholder="Name" required />
                    <FormInput type="email" name="user_email" ref={emailRef} placeholder="Email Address" required />
                    <TextArea name="message" ref={messageRef} required />
                    <Button type="submit" value="submit">Send <span>&rarr;</span></Button>
                </ContactForm>
            </ContactWrapper>
            <BackgroundImage
                src="https://res.cloudinary.com/spencercv7-dev/image/upload/v1620053588/manny_2_ty71kl.webp"
                layout="fill"
                alt="Contact Me Background - Manny Houston sitting on a brick wall."
            />
        </Section>
    );
}

export default Contact;