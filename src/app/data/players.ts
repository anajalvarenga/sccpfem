import { IPlayer } from "../interfaces/IPlayers";

// dados do meu timão
export const playersList: IPlayer[] = [
  {
    name: 'Kemelli',
    number: 12,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/kemelli-trugilho-firmiano-ferreira-no-corinthians_kt.jpg',
    personalInformation: {
      fullName: 'Kemelli Trugilho Firmiano Ferreira',
      position: 'goleira',
      birthDate: new Date(1999, 3, 13),
      age: 23,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 31,
      matchesStater: 30,
      scout: {
        win: 26,
        draw: 3,
        loss: 2,
      },
      titles: [
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 0,
      averageScore: 8.6,
    }
  },
  {
    name: 'Lelê',
    number: 12,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/leticia-izidoro-lima-da-silva-no-corinthians_o_corinthians.jpg',
    personalInformation: {
      fullName: 'Leticia Izidoro Lima da Silva',
      position: 'goleira',
      birthDate: new Date(1994, 8, 13),
      age: 28,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 113,
      matchesStater: 111,
      scout: {
        win: 83,
        draw: 20,
        loss: 10,
      },
      titles: [
        'Copa do Brasil 2016',
        'Libertadores Feminina 2017',
        'Brasileiro Feminino 2018',
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020'
      ],
      goals: 0,
      averageScore: 8.78,
    }
  },
  {
    name: 'Natascha',
    number: 97,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/natascha-jennifer-honegger-no-corinthians_dt.jpg',
    personalInformation: {
      fullName: 'Natascha Jennifer Honegger',
      position: 'goleira',
      birthDate: new Date(1997, 9, 27),
      age: 24,
      contract: new Date(2023, 5, 19),
    },
    statistics: {
      matches: 11,
      matchesStater: 11,
      scout: {
        win: 11,
        draw: 0,
        loss: 0,
      },
      titles: [
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
      ],
      goals: 0,
      averageScore: 8.13,
    }
  },
  {
    name: 'Paty',
    number: 23,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/patricia-araujo-da-silva-no-corinthians_5t.jpg',
    personalInformation: {
      fullName: 'Patricia Araújo da Silva',
      position: 'goleira',
      birthDate: new Date(1997, 3, 17),
      age: 25,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 19,
      matchesStater: 18,
      scout: {
        win: 16,
        draw: 3,
        loss: 0,
      },
      titles: [
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Paulista Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 0,
      averageScore: 8.77,
    }
  },
  {
    name: 'Tainá',
    number: 1,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/taina-suelen-borges-de-oliveira-no-corinthians_p_corinthians.jpg',
    personalInformation: {
      fullName: 'Tainá Suelen Borges de Oliveira',
      position: 'goleira',
      birthDate: new Date(1995, 5, 1),
      age: 27,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 80,
      matchesStater: 79,
      scout: {
        win: 67,
        draw: 9,
        loss: 4,
      },
      titles: [
        'Copa do Brasil 2016',
        'Libertadores Feminina 2017',
        'Brasileiro Feminino 2018',
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Brasileiro Feminino 2021'
      ],
      goals: 0,
      averageScore: 8.63,
    }
  },
  {
    name: 'Juliete',
    number: 6,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/juliete-silva-de-oliveira-no-corinthians_k_corinthians.jpg',
    personalInformation: {
      fullName: 'Juliete Silva de Oliveira',
      position: 'lateral-esquerda',
      birthDate: new Date(1989, 2, 26),
      age: 33,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 105,
      matchesStater: 75,
      scout: {
        win: 91,
        draw: 10,
        loss: 4,
      },
      titles: [
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 9,
      averageScore: 8.65,
    }
  },
  {
    name: 'Tamires',
    number: 37,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/tamires-cassia-dias-gomes-no-corinthians_2_corinthians.jpg',
    personalInformation: {
      fullName: 'Tamires Cassia Dias de Britto',
      position: 'lateral-esquerda',
      birthDate: new Date(1987, 10, 10),
      age: 34,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 107,
      matchesStater: 89,
      scout: {
        win: 90,
        draw: 13,
        loss: 4,
      },
      titles: [
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 20,
      averageScore: 9.19,
    }
  },
  {
    name: 'Yasmim',
    number: 71,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/yasmim-assis-ribeiro-no-corinthians_st.jpg',
    personalInformation: {
      fullName: 'Yasmim Assis Ribeiro',
      position: 'lateral-esquerda',
      birthDate: new Date(1996, 10, 28),
      age: 25,
      contract: new Date(2022, 12, 31),
    },
    statistics: {
      matches: 153,
      matchesStater: 122,
      scout: {
        win: 124,
        draw: 22,
        loss: 7,
      },
      titles: [
        'Libertadores Feminina 2017',
        'Brasileiro Feminino 2018',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 11,
      averageScore: 8.95,
    }
  },
];
