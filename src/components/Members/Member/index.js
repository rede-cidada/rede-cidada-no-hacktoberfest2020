import React from 'react';

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
    <li>
      <img src={src} alt={alt} />
      <p>{nome}</p>
      <p>{biografia}</p>
      <span>{cargo}</span>
      <span>{curso}</span>
      <span>{turno}</span>
      {professor && <span>{professor}</span>}
    </li>
  );
};

export default Member;
