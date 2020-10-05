const { default: styled } = require('styled-components');

export const MembersList = styled.ul`
  border: 1px solid white;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  width: 100%;
  max-width: 117rem;

  margin: 0;
  padding: 3rem;
`;
