import styled, { createGlobalStyle } from 'styled-components';

export const globalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

    body {
      background-color: #F8F9FA;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;
