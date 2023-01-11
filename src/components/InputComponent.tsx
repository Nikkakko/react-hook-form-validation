import { forwardRef, ComponentProps } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = ComponentProps<'input'> & { customProp?: string };

// register={register}
//           placeholder='first name'
//           type='text'
//           errors={errors}

const InputComponent = ({ customProp, ...otherProps }: any) => {
  return (
    <>
      <Input {...otherProps} />
    </>
  );
};

const Input = styled.input`
  width: 100%;
  padding: 15px 0 15px 19px;
  margin-bottom: 16px;
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

const errorMsg = styled.p`
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 12px;
  color: red;
`;
export default forwardRef(InputComponent);
