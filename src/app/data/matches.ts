import { IMatch } from "../interfaces/IMatch";

export const matchesList: IMatch[] = [
  {
    home: {
      name: 'São Paulo',
      image: 'https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo.png'
    },
    visitor: {
      name: 'Corinthians',
      image: 'https://dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-Corinthians.png'
    },
    stadium: 'Descinhecido',
    date: new Date(2022, 9, 7, 16, 45, 0, 0),
    championship: 'Paulista',
    streaming: ['Sportv', 'Paulistão Play']
  },
  {
    home: {
      name: 'Palmeiras',
      image: 'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo.png'
    },
    visitor: {
      name: 'Corinthians',
      image: 'https://dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-Corinthians.png'
    },
    stadium: 'Allianz Parque',
    date: new Date(2022, 9, 10, 14, 0, 0, 0),
    championship: 'Paulista',
    streaming: []
  },
  {
    home: {
      name: 'Pinda',
      image: 'https://www.ogol.com.br/img/logos/equipas/262585_imgbank.png'
    },
    visitor: {
      name: 'Corinthians',
      image: 'https://dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-Corinthians.png'
    },
    stadium: 'Descinhecido',
    date: new Date(2022, 9, 15, 15, 0, 0, 0),
    championship: 'Paulista',
    streaming: ['Facebook/Centauro', 'Paulistão Play']
  },
];
