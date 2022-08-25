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
  {
    name: 'Katiuscia',
    number: 2,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/katiuscia-fernandes-soares-no-corinthians_k_corinthians.jpg',
    personalInformation: {
      fullName: 'Katiuscia Fernandes Soares',
      position: 'lateral-direita',
      birthDate: new Date(1994, 8, 8),
      age: 28,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 149,
      matchesStater: 121,
      scout: {
        win: 130,
        draw: 13,
        loss: 6,
      },
      titles: [
        'Brasileiro Feminino 2018',
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 6,
      averageScore: 8.93,
    }
  },
  {
    name: 'Paulinha',
    number: 21,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/paula-andressa-santiago-baptista-pires-no_6_corinthians.jpg',
    personalInformation: {
      fullName: 'Paula Andressa Santiago Baptista Pires',
      position: 'lateral-direita',
      birthDate: new Date(1988, 2, 14),
      age: 34,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 179,
      matchesStater: 141,
      scout: {
        win: 135,
        draw: 32,
        loss: 12,
      },
      titles: [
        'Copa do Brasil 2016',
        'Libertadores Feminina 2017',
        'Brasileiro Feminino 2018',
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 7,
      averageScore: 8.45,
    }
  },
  {
    name: 'Andressa',
    number: 14,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/andressa-pereira-rosa-no-corinthians_w_corinthians.jpg',
    personalInformation: {
      fullName: 'Andressa Pereira Rosa',
      position: 'zagueira',
      birthDate: new Date(1999, 5, 12),
      age: 23,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 16,
      matchesStater: 13,
      scout: {
        win: 12,
        draw: 4,
        loss: 0,
      },
      titles: [],
      goals: 2,
      averageScore: 7.01,
    }
  },
  {
    name: 'Erika',
    number: 99,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/erika-cristiano-dos-santos-no-corinthians_w_corinthians.jpg',
    personalInformation: {
      fullName: 'Erika Cristiano dos Santos',
      position: 'zagueira',
      birthDate: new Date(1988, 2, 4),
      age: 34,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 80,
      matchesStater: 69,
      scout: {
        win: 69,
        draw: 9,
        loss: 3,
      },
      titles: [
        'Brasileiro Feminino 2018',
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021'
      ],
      goals: 14,
      averageScore: 9.35,
    }
  },
  {
    name: 'Campiolo',
    number: 4,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/giovanna-campiolo-rocha-no-corinthians_j_corinthians.jpg',
    personalInformation: {
      fullName: 'Giovanna Campiolo Rocha',
      position: 'zagueira',
      birthDate: new Date(1996, 6, 14),
      age: 26,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 104,
      matchesStater: 86,
      scout: {
        win: 89,
        draw: 11,
        loss: 4,
      },
      titles: [
        'Brasileiro Feminino 2018',
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 5,
      averageScore: 8.84,
    }
  },
  {
    name: 'Tarciane',
    number: 3,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/tarciane-karen-dos-santos-de-lima-no-corinthians_h_corinthians.jpg',
    personalInformation: {
      fullName: 'Tarciane Karen dos Santos de Lima',
      position: 'zagueira',
      birthDate: new Date(2003, 5, 27),
      age: 26,
      contract: new Date(2022, 12, 31),
    },
    statistics: {
      matches: 22,
      matchesStater: 16,
      scout: {
        win: 17,
        draw: 4,
        loss: 1,
      },
      titles: [
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 5,
      averageScore: 8.27,
    }
  },
  {
    name: 'Diany',
    number: 8,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/diany-aparecida-martins-xavier-no-corinthians_7_corinthians.jpg',
    personalInformation: {
      fullName: 'Diany Aparecida Martins Xavier',
      position: 'volante',
      birthDate: new Date(1989, 12, 22),
      age: 32,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 115,
      matchesStater: 64,
      scout: {
        win: 99,
        draw: 10,
        loss: 6,
      },
      titles: [
        'Brasileiro Feminino 2018',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 14,
      averageScore: 8.85,
    }
  },
  {
    name: 'Ellen',
    number: 17,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/ellen-cristine-dos-santos-alencar-no-corinthians_s_corinthians.jpg',
    personalInformation: {
      fullName: 'Ellen Cristine dos Santos Alencar',
      position: 'meia',
      birthDate: new Date(2003, 5, 5),
      age: 19,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 5,
      matchesStater: 0,
      scout: {
        win: 4,
        draw: 1,
        loss: 0,
      },
      titles: [
        'Supercopa Feminina 2022'
      ],
      goals: 0,
      averageScore: 7.78,
    }
  },
  {
    name: 'Gabi Morais',
    number: 55,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/francisca-gabriela-morais-da-rocha-no-corinthians_c_corinthians.jpg',
    personalInformation: {
      fullName: 'Francisca Gabriela Morais da Rocha',
      position: 'meia',
      birthDate: new Date(1994, 4, 5),
      age: 28,
    },
    statistics: {
      matches: 24,
      matchesStater: 20,
      scout: {
        win: 14,
        draw: 6,
        loss: 4,
      },
      titles: [],
      goals: 2,
      averageScore: 7.99,
    }
  },
  {
    name: 'Gabi Zanotti',
    number: 10,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/gabriela-maria-zanotti-demoner-no-corinthians_q_corinthians.jpg',
    personalInformation: {
      fullName: 'Gabriela Maria Zanotti Demoner',
      position: 'meia',
      birthDate: new Date(1985, 2, 28),
      age: 37,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 158,
      matchesStater: 133,
      scout: {
        win: 133,
        draw: 18,
        loss: 7,
      },
      titles: [
        'Brasileiro Feminino 2018',
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 51,
      averageScore: 9.36,
    }
  },
  {
    name: 'Grazi',
    number: 7,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/grazielle-pinheiro-nascimento-no-corinthians_k_corinthians.jpg',
    personalInformation: {
      fullName: 'Grazielle Pinheiro Nascimento',
      position: 'meia',
      birthDate: new Date(1981, 3, 28),
      age: 41,
      contract: new Date(2022, 12, 31),
    },
    statistics: {
      matches: 232,
      matchesStater: 171,
      scout: {
        win: 181,
        draw: 35,
        loss: 16,
      },
      titles: [
        'Copa do Brasil 2016',
        'Libertadores Feminina 2017',
        'Brasileiro Feminino 2018',
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 67,
      averageScore: 8.90,
    }
  },
  {
    name: 'Liana Salazar',
    number: 11,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/liana-milena-salazar-vergara-no-corinthians_w_corinthians.jpg',
    personalInformation: {
      fullName: 'Liana Milena Salazar Vergara',
      position: 'meia',
      birthDate: new Date(1992, 9, 16),
      age: 29,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 17,
      matchesStater: 10,
      scout: {
        win: 12,
        draw: 4,
        loss: 1,
      },
      titles: [
        'Supercopa Feminina 2022'
      ],
      goals: 1,
      averageScore: 8.15,
    }
  },
  {
    name: 'Mariza',
    number: 20,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/mariza-nascimento-silva-no-corinthians_0_corinthians.jpg',
    personalInformation: {
      fullName: 'Mariza Nascimento Silva',
      position: 'meia',
      birthDate: new Date(2001, 11, 8),
      age: 20,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 17,
      matchesStater: 9,
      scout: {
        win: 12,
        draw: 4,
        loss: 1,
      },
      titles: [],
      goals: 0,
      averageScore: 6.65,
    }
  },
  {
    name: 'Vic Albuquerque',
    number: 17,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/victoria-kristine-albuquerque-de-miranda-no_d_corinthians.jpg',
    personalInformation: {
      fullName: 'Victória Kristine Albuquerque de Miranda',
      position: 'meia',
      birthDate: new Date(1998, 3, 14),
      age: 24,
      contract: new Date(2023, 6, 30),
    },
    statistics: {
      matches: 114,
      matchesStater: 82,
      scout: {
        win: 99,
        draw: 11,
        loss: 4,
      },
      titles: [
        'Libertadores Feminina 2019',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021'
      ],
      goals: 61,
      averageScore: 9.17,
    }
  },
  {
    name: 'Adriana',
    number: 16,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/adriana-leal-da-silva-no-corinthians_m_corinthians.jpg',
    personalInformation: {
      fullName: 'Adriana Leal da Silva',
      position: 'atacante',
      birthDate: new Date(1996, 11, 17),
      age: 25,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 131,
      matchesStater: 110,
      scout: {
        win: 107,
        draw: 17,
        loss: 7,
      },
      titles: [
        'Brasileiro Feminino 2018',
        'Paulista Feminino 2019',
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 67,
      averageScore: 8.99,
    }
  },
  {
    name: 'Bianca Gomes',
    number: 77,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/bianca-gomes-de-lima-no-corinthians_10_corinthians.jpg',
    personalInformation: {
      fullName: 'Bianca Gomes de Lima',
      position: 'atacante',
      birthDate: new Date(1990, 8, 10),
      age: 32,
      contract: new Date(2022, 12, 31),
    },
    statistics: {
      matches: 25,
      matchesStater: 12,
      scout: {
        win: 21,
        draw: 3,
        loss: 1,
      },
      titles: [
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 4,
      averageScore: 8.23,
    }
  },
  {
    name: 'Gabi Portilho',
    number: 18,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/gabrielle-jordao-portilho-no-corinthians_4_corinthians.jpg',
    personalInformation: {
      fullName: 'Gabrielle Jordão Portilho',
      position: 'atacante',
      birthDate: new Date(1995, 6, 18),
      age: 27,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 85,
      matchesStater: 52,
      scout: {
        win: 70,
        draw: 10,
        loss: 5,
      },
      titles: [
        'Paulista Feminino 2020',
        'Brasileiro Feminino 2020',
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 17,
      averageScore: 9.19,
    }
  },
  {
    name: 'Jaqueline',
    number: 30,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/jaqueline-ribeiro-no-corinthians_w_corinthians.jpg',
    personalInformation: {
      fullName: 'Jaqueline Ribeiro dos Santos Almeida',
      position: 'atacante',
      birthDate: new Date(2000, 3, 31),
      age: 22,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 22,
      matchesStater: 14,
      scout: {
        win: 16,
        draw: 5,
        loss: 1,
      },
      titles: [
        'Supercopa Feminina 2022'
      ],
      goals: 4,
      averageScore: 7.94,
    }
  },
  {
    name: 'Jheniffer',
    number: 9,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/jheniffer-da-silva-cordinali-gouveia-no_b_corinthians.jpg',
    personalInformation: {
      fullName: 'Jheniffer da Silva Cordinali Gouveia',
      position: 'atacante',
      birthDate: new Date(2001, 11, 6),
      age: 20,
      contract: new Date(2022, 12, 31),
    },
    statistics: {
      matches: 52,
      matchesStater: 26,
      scout: {
        win: 44,
        draw: 6,
        loss: 2,
      },
      titles: [
        'Libertadores Feminina 2021',
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 25,
      averageScore: 8.70,
    }
  },
  {
    name: 'Miriã',
    number: 15,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/miria-dos-santos-silva-no-corinthians_6_corinthians.jpg',
    personalInformation: {
      fullName: 'Miriã dos Santos Silva',
      position: 'atacante',
      birthDate: new Date(1998, 12, 31),
      age: 23,
      contract: new Date(2022, 12, 31),
    },
    statistics: {
      matches: 40,
      matchesStater: 14,
      scout: {
        win: 32,
        draw: 5,
        loss: 3,
      },
      titles: [
        'Paulista Feminino 2021',
        'Brasileiro Feminino 2021',
        'Supercopa Feminina 2022'
      ],
      goals: 11,
      averageScore: 8.38,
    }
  },
  {
    name: 'Mylena',
    number: 19,
    image: 'https://cdn.meutimao.com.br/_upload/jogador/mylena-cruz-freitas-dos-santos-no-corinthians_j_corinthians.jpg',
    personalInformation: {
      fullName: 'Mylena Cruz Freitas dos Santos',
      position: 'atacante',
      birthDate: new Date(2000, 12, 29),
      age: 21,
      contract: new Date(2023, 12, 31),
    },
    statistics: {
      matches: 15,
      matchesStater: 4,
      scout: {
        win: 10,
        draw: 4,
        loss: 1,
      },
      titles: [],
      goals: 2,
      averageScore: 6.77,
    }
  },
];
