import React, { useState } from 'react';

import { members } from './data';
import Member from './Member';
import { MembersList } from './Members.styled';

const Members = () => {
  const [filterMembers, setFilterMembers] = useState('Alunos');

  const FILTER_MAP = {
    Todos: () => true,
    Alunos: item =>
      item.participante === 'Aluno' || item.participante === 'Aluna',
    Professores: item =>
      item.participante === 'Professor' || item.participante === 'Professora',
    FrontEnd: item => item.curso === 'Front-end',
    Java: item => item.curso === 'Java',
    Python: item => item.curso === 'Python',
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  return (
    <>
      <div>
        {FILTER_NAMES.map(name => (
          <button key={name} onClick={() => setFilterMembers(name)}>
            {name}
          </button>
        ))}
      </div>

      <MembersList>
        {members.filter(FILTER_MAP[filterMembers]).map((member, index) => (
          <Member {...member} key={index} />
        ))}
      </MembersList>
    </>
  );
};

export default Members;
