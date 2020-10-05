import React from 'react';

import { ListItem, ListItemProfileImg } from './Member.styled';

const Member = ({
  foto: { src, alt },
  nome,
  biografia,
  cargo,
  curso,
  turno,
  professor,
}) => {
  return (
    <ListItem as="li">
      <ListItemProfileImg src={src} alt={alt} />
      <p>{nome}</p>
      <p>{biografia}</p>
      <span>{cargo}</span>
      <span>{curso}</span>
      <span>{turno}</span>
      {professor && <span>{professor}</span>}
    </ListItem>
  );
};

export default Member;
