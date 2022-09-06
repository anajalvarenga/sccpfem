import { ITeam } from "../interfaces/ITeam";

export const teamCorinthians: ITeam = {
  name: 'Corinthians',
  image: 'https://dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-Corinthians.png'
};

export const teamSaoPaulo: ITeam = {
  name: 'São Paulo',
  image: 'https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo.png'
};

export const teamPalmeiras: ITeam = {
  name: 'Palmeiras',
  image: 'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo.png'
};

export const teamPinda: ITeam = {
  name: 'Pinda',
  image: 'https://www.ogol.com.br/img/logos/equipas/262585_imgbank.png'
};

export const teamList: ITeam[] = [
  teamCorinthians,
  teamSaoPaulo,
  teamPalmeiras,
  teamPinda,
];
