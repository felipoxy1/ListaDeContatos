import styled from 'styled-components';

export const Container = styled.main`
  background-color: #f5f7fa;
`;

export const FormCard = styled.form`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 350px;
`;

export const subTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:first-child {
    background-color: #0a66c2;
    color: white;
  }

  &:last-child {
    background-color: #ccc;
    color: #333;
  }
`;
