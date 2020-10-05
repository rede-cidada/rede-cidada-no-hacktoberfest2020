import React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';

import {
  BoxLabel,
  ListItem,
  ListItemLabel,
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
      <BoxLabel>
        <ListItemLabel>{cargo}</ListItemLabel>
        <ListItemLabel>{curso}</ListItemLabel>
        <ListItemLabel>{turno}</ListItemLabel>
        {professor && <ListItemLabel>{professor}</ListItemLabel>}
      </BoxLabel>
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
