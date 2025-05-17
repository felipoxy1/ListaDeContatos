import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;
  border: 1px solid #dee2e6;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05); /* sombra suave */
`;

export const Header = styled.header`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const AddMore = styled(Link)`
  background-color: #0d6efd;
  text-decoration: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  height: 100%;
  font-weight: 500;
  transition: background-color 0.3s ease;
`;
