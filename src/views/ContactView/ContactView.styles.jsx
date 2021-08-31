import styled from '@emotion/styled';
import { RiContactsBook2Fill } from 'react-icons/ri';

export const ContactTitle = styled.h2`
  font-weight: normal;
  font-size: 32px;
  text-align: center;
`;

export const ContactIcon = styled(RiContactsBook2Fill)`
  position: absolute;
  top: 20%;
  left: 30%;
  color: var(--color-blue);
`;
