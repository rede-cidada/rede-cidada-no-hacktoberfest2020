import React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';

import {
  ListItem,
  ListItemProfileImg,
  SocialNetworkLink,
} from './Member.styled';

const Member = ({
  foto: { src, alt },
  nome,
  biografia,
  cargo,
  curso,
  turno,
  professor,
  redesSocias: { github, linkedin },
}) => {
  return (
    <ListItem as="li">
      <ListItemProfileImg src={src} alt={alt} />
      <div>
        <span>{cargo}</span>
        <span>{curso}</span>
        <span>{turno}</span>
        {professor && <span>{professor}</span>}
      </div>
      <p>{nome}</p>
      <p>{biografia}</p>
      <div>
        <SocialNetworkLink
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImGithub />
        </SocialNetworkLink>
        <SocialNetworkLink
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImLinkedin />
        </SocialNetworkLink>
      </div>
    </ListItem>
  );
};

export default Member;
