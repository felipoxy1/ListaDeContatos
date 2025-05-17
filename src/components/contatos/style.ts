import styled from 'styled-components';

export const Secao = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;

export const contactItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr 2fr;
  align-items: center;
  background-color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

  & .contact-name,
  & .contact-email,
  & .contact-number {
    font-size: 1rem;
    color: #212529;
  }

  & .contact-actions {
    display: flex;
    gap: 10px;

    & button {
      padding: 6px 12px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background-color 0.2s ease;
    }
    & button:first-child {
      background-color: #0d6efd;
      color: #fff;
    }

    & button:last-child {
      background-color: #dc3545;
      color: #fff;
    }

    & button:hover {
      opacity: 0.9;
    }
  }
`;
