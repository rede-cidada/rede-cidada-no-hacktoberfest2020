import { colors } from '../../assets/styles/styles';
import { FlexBox } from '../../shared-ui/Containers';

const { default: styled } = require('styled-components');

export const MembersList = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;

  width: 100%;
  max-width: 117rem;

  margin: 0;
  padding: 3rem;
`;

export const Box = styled(FlexBox)`
  width: 100%;
  margin: 2rem 0;
  padding: 3rem;

  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background-color: ${colors.primaryLighter};
  border: none;
  border-radius: 4.8rem;
  color: ${colors.primaryHighLight};
  cursor: pointer;
  padding: 2rem 3rem;
  margin: 1rem;

  text-align: center;

  font-weight: 900;
  font-size: 1.4rem;
  display: inline-flex;
  text-transform: uppercase;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  :hover {
    color: ${colors.primaryLighter};
    background-color: ${colors.primaryHighLight};
  }

  ${({ selected }) =>
    selected &&
    `
    color: ${colors.primaryLighter};
    background-color: ${colors.primaryHighLight};
  `}
`;
