import styled, { css } from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: smaller;
  min-width: 90px;
  min-height:50px;
  padding-left: 6px;

  border-radius: 4px;

  ${({ checked }) =>
    checked &&
    css`
      border: 2px solid ${({ theme }) => theme.color.orange};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color ${({ theme }) => theme.color.grey};
      border: 2px solid ${({ theme }) => theme.color.lightGrey};
    `}

    &:hover{
      border: 1px solid ${({ theme }) => theme.color.orange};
    }
`;

export const Input = styled.input`
  margin-right: 6px;
`;