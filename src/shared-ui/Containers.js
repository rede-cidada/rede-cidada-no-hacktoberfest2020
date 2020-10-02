import styled from 'styled-components/macro';

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Section = styled(FlexBox)`
  background: transparent;
  padding: 5rem 1rem;
  width: 100%;
  max-width: 117rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
`;
