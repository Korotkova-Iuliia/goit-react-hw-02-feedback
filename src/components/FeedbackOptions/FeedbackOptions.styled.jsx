import styled, { css } from 'styled-components';
export const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: green;
  border: 2px solid green;
  &:nth-child(odd) {
    color: orange;
    border: 2px solid orange;
    margin-left: 2em;
    margin-right: 2em;
  }
  &:nth-last-child(1) {
    color: red;
    border: 2px solid red;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.25);
    color: white;
    border: 2px solid white;
    background-color: gray;
    :nth-child(1) {
      color: green;
      border: 2px solid green;
    }
  }
`;

// export const GoodButton = styled(Button)`
//   color: green;
//   border: 2px solid green;
// `;
// export const NeutralButton = styled(Button)`
//   color: orange;
//   border: 2px solid orange;
//   margin-left: 2em;
//   margin-right: 2em;
// `;
// export const BadButton = styled(Button)`
//   color: red;
//   border: 2px solid red;
// `;
// ${(options) =>
//     {options.map((key) =>
//         key
//       )} &&
//     css`
//       background: palevioletred;
//       color: white;
//     `};
