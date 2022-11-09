import { ITitle } from './../interfaces/ITitle';

export const titleLibertadores: ITitle = {
  name: 'Libertadores',
  amount: 3,
  image: '../../assets/images/libertadores.png'
}

export const titleBrasileirao: ITitle = {
  name: 'Brasileirão',
  amount: 4,
  image: '../../assets/images/brasileiro.png'
}

export const titlePaulista: ITitle = {
  name: 'Paulista',
  amount: 3,
  image: '../../assets/images/paulista.png'
}

export const titleCopaBrasil: ITitle = {
  name: 'Copa do Brasil',
  amount: 1,
  image: '../../assets/images/copa-brasil.png'
}

export const titleSuperCopa: ITitle = {
  name: 'Super Copa',
  amount: 1,
  image: '../../assets/images/supercopa.png'
}

export const titles = [
  titleLibertadores,
  titleBrasileirao,
  titlePaulista,
  titleCopaBrasil,
  titleSuperCopa
];
