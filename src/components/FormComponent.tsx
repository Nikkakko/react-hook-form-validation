import styled from 'styled-components';
import InputComponent from './InputComponent';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRef } from 'react';
import errorIcon from '../assets/images/icon-error.svg';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type SProps = {
  firstName?: boolean;
  lastName?: boolean;
  email?: boolean;
  password?: boolean;
};

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const onSubmit = (data: Inputs) => {
    console.log(data);
    // e.target.reset();
  };

  return (
    <Container>
      <Trial>
        <TrialText>
          Try it free 7 days <span>then $20/mo. thereafter</span>
        </TrialText>
      </Trial>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder='first name'
          {...register('firstName', {
            required: {
              value: true,
              message: 'First Name cannot be empty',
            },
            minLength: {
              value: 3,
              message: 'First Name must be at least 3 characters',
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'First Name must be only letters',
            },
          })}
        />
        {errors.firstName && (
          <>
            <ErrorIcon firstName />
            <ErrorMsg firstName>{errors?.firstName?.message}</ErrorMsg>
          </>
        )}

        <Input
          {...register('lastName', {
            required: {
              value: true,
              message: 'Last Name cannot be empty',
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Last Name must be only letters',
            },
          })}
          placeholder='last name'
        />

        {errors.lastName && (
          <>
            <ErrorIcon lastName />
            <ErrorMsg lastName>{errors.lastName.message}</ErrorMsg>
          </>
        )}

        <Input
          {...register('email', {
            required: {
              value: true,
              message: 'Email cannot be empty',
            },
            pattern: {
              value: re,
              message: 'Looks like this is not an email',
            },
          })}
          placeholder={errors.email ? '' : 'Email'}
        />

        {errors.email && (
          <>
            <ErrorIcon email />
            <ErrorMsg email>{errors.email.message}</ErrorMsg>
          </>
        )}
        {errors.email?.type === 'required' && (
          <EmailErrorMsg>email@example/com</EmailErrorMsg>
        )}
        <Input
          {...register('password', {
            required: {
              value: true,
              message: 'Password cannot be empty',
            },
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },

            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
              message:
                ' contain at least one uppercase letter, one lowercase letter and one number',
            },
          })}
          placeholder='Password'
          type='password'
        />
        {errors.password && (
          <>
            <ErrorIcon password />
            <ErrorMsg password>{errors.password.message}</ErrorMsg>
          </>
        )}

        <TrialButton>CLAIM YOUR FREE TRIAL</TrialButton>
        <Aggrement>
          By clicking the button, you are agreeing to our{' '}
          <span>Terms and Services</span>
        </Aggrement>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1440px) {
    /* width: 540px; */
  }
`;
const Trial = styled.div`
  background: #5e54a4;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
`;
const TrialText = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  /* or 173% */

  text-align: center;
  letter-spacing: 0.267857px;

  color: #ffffff;

  padding: 18px 66px;
  span {
    font-weight: 400;
  }

  @media screen and (min-width: 1440px) {
    padding: 17px 112px 17px 112px;
    white-space: nowrap;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;

  padding: 18px 24px;

  @media screen and (min-width: 1440px) {
    padding: 40px;
  }
`;

const TrialButton = styled.button`
  background: #38cc8b;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
  border-radius: 5px;
  padding: 15px 0;
  border: none;
  width: 100%;
  cursor: pointer;

  /* Font */
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  color: #ffffff;

  /* Font */
`;

const Aggrement = styled.p`
  font-weight: 500;
  font-size: 11px;
  line-height: 21px;
  /* or 191% */

  text-align: center;

  color: #bab7d4;
  margin-top: 8px;

  span {
    color: #ff7979;
  }

  /* border: 1px solid #dedede; */
  width: 90%;
`;

const Input = styled.input`
  /* position: relative; */
  width: 100%;
  padding: 15px 0 15px 19px;
  margin-bottom: 32px;
  border: 1px solid #dedede;
  border-radius: 5px;

  /* Font */
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 186% */

  letter-spacing: 0.25px;

  color: #3d3b48;

  /* Fony */

  &::placeholder {
    opacity: 0.75;
    text-transform: capitalize;
  }

  &:focus {
    outline: none;
  }
`;

const ErrorMsg = styled.p<SProps>`
  font-style: italic;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  /* identical to box height */

  text-align: right;

  color: #ff7979;
  position: absolute;
  right: 30px;

  top: ${({ firstName, lastName, email, password }) =>
    firstName
      ? '80px'
      : lastName
      ? '170px'
      : email
      ? '260px'
      : password
      ? '350px'
      : ''};

  @media screen and (min-width: 1440px) {
    right: 50px;
    top: ${({ firstName, lastName, email, password }) =>
      firstName
        ? '100px'
        : lastName
        ? '190px'
        : email
        ? '280px'
        : password
        ? '370px'
        : ''};
  }
`;

const ErrorIcon = styled.div<SProps>`
  position: absolute;
  right: 40px;
  top: ${({ firstName, lastName, email, password }) =>
    firstName
      ? '35px'
      : lastName
      ? '125px'
      : email
      ? '215px'
      : password
      ? '305px'
      : ''};
  background-image: url(${errorIcon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 1440px) {
    right: 60px;
    top: ${({ firstName, lastName, email, password }) =>
      firstName
        ? '55px'
        : lastName
        ? '145px'
        : email
        ? '235px'
        : password
        ? '325px'
        : ''};
  }
`;

const EmailErrorMsg = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height, or 186% */

  letter-spacing: 0.25px;

  color: #ff7979;

  position: absolute;
  left: 44px;
  top: 215px;

  @media screen and (min-width: 1440px) {
    left: 64px;
    top: 235px;
  }
`;
export default FormComponent;
