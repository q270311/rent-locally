import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileDevice}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 90px auto;
  }
`;

export const Label = styled.label`
  ${({ checked }) =>
    checked &&
    css`
      border: 1px solid ${({ theme }) => theme.color.orange};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color ${({ theme }) => theme.color.grey};
      border: 1px solid ${({ theme }) => theme.color.lightGrey};
    `}
`;
