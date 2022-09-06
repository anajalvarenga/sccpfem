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
    date: new Date(2022, 8, 7, 16, 45, 0, 0),
    championship: 'Campeonato Paulista Feminino 2022',
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
    stadium: {
      name: 'Allianz Parque',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Imagens_da_Cidade_de_S%C3%A3o_Paulo_e_Zool%C3%B3gico_da_Capital_Paulista._%2847480340301%29.jpg/640px-Imagens_da_Cidade_de_S%C3%A3o_Paulo_e_Zool%C3%B3gico_da_Capital_Paulista._%2847480340301%29.jpg'
    },
    date: new Date(2022, 8, 10, 14, 0, 0, 0),
    championship: 'Campeonato Brasileiro Feminino 2022',
    streaming: ['Sportv', 'Eleven']
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
    date: new Date(2022, 8, 15, 15, 0, 0, 0),
    championship: 'Campeonato Paulista Feminino 2022',
    streaming: ['Facebook/Centauro', 'Paulistão Play']
  },
];
