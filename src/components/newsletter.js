import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';

import { rhythm } from '../utils/typography';
import { PURPLE, WHITE, YELLOW, PRIMARY } from '../constants/Color';

const Newsletter = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const [cookies, setCookie] = useCookies([
    'codechampions_email',
    'codechampions_firstName',
  ]);

  const onSubmit = (data) => {
    const formId = process.env.GATSBY_CONVERT_KIT_FORM_ID;
    const url = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;

    const requestBody = {
      api_key: process.env.GATSBY_CONVERT_KIT_API_KEY,
      email: data.email,
      first_name: data.firstName,
      tags: [process.env.GATSBY_CONVERT_KIT_TAG],
    };

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        charset: 'utf-8',
      },
    };

    // send POST request
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          // set local state
          setIsSuccess(true);
          setIsDone(true);

          // set cookies
          setCookie('codechampions_email', data.email, { path: '/' });
          setCookie('codechampions_firstName', data.firstName, { path: '/' });
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error while sending data to ConvertKit', error);
        }
        setIsSuccess(false);
        setIsDone(true);
      });
  };

  const getEmailError = () => {
    let error;
    if (errors.email && errors.email.message) {
      error = errors.email.message;
    }
    if (errors.email && errors.email.type === 'required') {
      error = 'Pflichtfeld';
    }
    return error;
  };

  const getFirstNameError = () =>
    errors.firstName && errors.firstName.type === 'required'
      ? 'Pflichtfeld'
      : null;

  return (
    <Wrapper>
      <Title>Lust auf mehr? 😎</Title>
      <Description>
        Melde dich beim Newsletter an und erfahre sofort, wenn es etwas Neues
        zum Coden gibt! <span role="img">🤓🎉</span>
      </Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelWrapper>
          <Label htmlFor="firstName">Vorname</Label>
          <ErrorText>{getFirstNameError()}</ErrorText>
        </LabelWrapper>
        <Input
          id="firstName"
          type="text"
          placeholder="Lisa"
          name="firstName"
          ref={register({ required: true, maxLength: 60 })}
          error={!!errors.firstName}
        />
        <span>{errors.firstName && errors.firstName.message}</span>
        <LabelWrapper>
          <Label htmlFor="email">Email</Label>
          <ErrorText>{getEmailError()}</ErrorText>
        </LabelWrapper>
        <Input
          id="email"
          type="text"
          placeholder="lisa@mail.com"
          name="email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Keine valide Email Adresse',
            },
          })}
          error={!!errors.email}
        />

        <SubmitWrapper>
          {isDone && isSuccess ? (
            <SuccessText>{`Perfekt!\nCheck deine Emails und bestätige die Anmeldung!`}</SuccessText>
          ) : (
            <Button type="submit">Anmelden</Button>
          )}
        </SubmitWrapper>
      </Form>
    </Wrapper>
  );
};

export default Newsletter;

const Wrapper = styled.div`
  background: linear-gradient(322deg, #e32a1b, #9ba90c, ${PURPLE});
  background-size: 250% 350%;

  padding: ${rhythm(1)};
  border-radius: 5px;
  max-width: 320px;
  margin-bottom: ${rhythm(2)};

  /* Move box out of footer */
  margin-top: -50px;
`;

const Title = styled.h3`
  color: ${WHITE};
  margin-top: 0;
`;

const Description = styled.p`
  color: ${WHITE};
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LabelWrapper = styled(FlexWrapper)`
  margin-bottom: 3px;
`;

const Label = styled.label`
  color: ${WHITE};
  display: block;
`;

const ErrorText = styled.span`
  color: ${WHITE};
  font-size: 0.8rem;
`;

const SubmitWrapper = styled(FlexWrapper)`
  margin-top: 20px;
  min-height: 60px;
`;

const SuccessText = styled.div`
  color: #ffcc34;
  font-weight: bold;
`;

const Form = styled.form`
  margin: 0;
`;

const Input = styled.input`
  margin-bottom: 20px;
  border-color: ${PRIMARY};
  border-style: solid;
  border-width: ${(props) => (props.error ? '1px 1px 1px 10px' : 0)};
  border-image: none 100% / 1 / 0 stretch;
  background: rgb(251, 236, 242) none repeat scroll 0% 0%;

  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 6px 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: ${YELLOW};
  color: ${WHITE};
  padding: 8px 15px;
  cursor: pointer;
  border: 1px solid ${YELLOW};
  transition: all 300ms ease 0s;
  margin-right: ${rhythm(1)};

  &:hover,
  &:active {
    background-color: ${PRIMARY};
    border: 1px solid ${PRIMARY};
  }
`;
