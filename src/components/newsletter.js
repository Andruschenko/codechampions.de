import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { rhythm } from '../utils/typography';
import { PURPLE, WHITE, YELLOW, PRIMARY } from '../constants/Color';

export default function Newsletter() {
  const { register, handleSubmit, errors } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSuccess(true);
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
      <Title>Lust auf mehr?</Title>
      <Description>
        Melde dich beim Newsletter an und erfahre als Erster, wenn es etwas
        Neues zum Lernen gibt!
      </Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelWrapper>
          <Label for="firstName">Vorname</Label>
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
          <Label for="email">Email</Label>
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
          <Button type="submit">Anmelden</Button>
          <SuccessText>{isSuccess && 'Geklappt!'}</SuccessText>
        </SubmitWrapper>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${PURPLE};
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
`;

const SuccessText = styled.span`
  color: #ffcc34;
  font-weight: bold;
  font-size: 1.1rem;
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
  transition: all 100ms ease 0s;

  &:hover,
  &:active {
    background-color: ${PRIMARY};
    border: 1px solid ${PRIMARY};
  }
`;
