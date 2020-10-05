import styled from 'styled-components';
import { colors } from '../../../assets/styles/styles';
import { FlexBox } from '../../../shared-ui/Containers';

export const ListItem = styled(FlexBox)`
  border: 1px solid white;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  list-style: none;
  padding: 2rem;

  background-color: ${colors.primary};
  border: 0.76446px solid #072540;
  box-shadow: 0px 2px 20px rgba(61, 27, 43, 0.1) !important;

  :hover {
    transform: scale(1.04, 1.04);
  }
`;

export const ListItemProfileImg = styled.img`
  object-fit: contain;
  width: 100%;
  max-width: 26rem;
  border-radius: 50%;
`;
