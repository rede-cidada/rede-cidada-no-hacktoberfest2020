import React from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im';

import {
  BoxLabel,
  ListItem,
  ListItemLabel,
  ListItemName,
  ListItemProfileImg,
  SocialNetworkLink,
} from './Member.styled';

const Member = ({
  foto: { src, alt },
  nome,
  participante,
  curso,
  turno,
  professor,
  redesSocias: { github, linkedin },
}) => (
  <ListItem as="li">
    <ListItemProfileImg src={src} alt={alt} />
    <BoxLabel>
      <ListItemLabel>{participante}</ListItemLabel>
      <ListItemLabel>{curso}</ListItemLabel>
      <ListItemLabel>{turno}</ListItemLabel>
      {professor && <ListItemLabel>{professor}</ListItemLabel>}
    </BoxLabel>
    <ListItemName>{nome}</ListItemName>
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

export default Member;
