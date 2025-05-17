import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow:
    0 4px 12px rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);
  max-width: 400px;
  margin: 40px auto;
`;

export const subTitle = styled.h2`
  margin-bottom: 20px;
  color: #344055;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #777a7a;
  font-size: 14px;
`;

export const Inputs = styled.input`
  margin-top: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #c1c1c1;
  font-size: 14px;
  transition:
    border-color 0,
    3s ease;

  &:focus {
    border-color: #5298a5;
    outline: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3 ease;

  &:first-child {
    background-color: #5298a5;
    color: white;

    &:hover {
      background-color: #417a84;
    }
  }

  &:last-child {
    background-color: #ccc;
    color: #555;

    &:hover {
      background-color: #b3b3b3;
    }
  }
`;
