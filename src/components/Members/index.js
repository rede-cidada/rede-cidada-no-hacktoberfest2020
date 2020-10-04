import React from 'react';

import { members } from './data';
import Member from './Member';

const Members = () => {
  return (
    <ul>
      {members.map((member, index) => (
        <Member {...member} key={index} />
      ))}
    </ul>
  );
};

export default Members;
