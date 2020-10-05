import React from 'react';

import { members } from './data';
import Member from './Member';
import { MembersList } from './Members.styled';

const Members = () => {
  return (
    <MembersList>
      {members.map((member, index) => (
        <Member {...member} key={index} />
      ))}
    </MembersList>
  );
};

export default Members;
