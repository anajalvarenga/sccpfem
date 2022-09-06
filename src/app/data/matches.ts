import { IMatch } from "../interfaces/IMatch";
import { stadiumAllianz } from "./stadiums";
import { teamCorinthians, teamPalmeiras, teamPinda, teamSaoPaulo } from "./teams";

export const matchesList: IMatch[] = [
  {
    home: teamSaoPaulo,
    visitor: teamCorinthians,
    date: new Date(2022, 8, 7, 16, 45, 0, 0),
    championship: 'Campeonato Paulista Feminino 2022',
    streaming: ['Sportv', 'Paulistão Play']
  },
  {
    home: teamPalmeiras,
    visitor: teamCorinthians,
    stadium: stadiumAllianz,
    date: new Date(2022, 8, 10, 14, 0, 0, 0),
    championship: 'Campeonato Brasileiro Feminino 2022',
    streaming: ['Sportv', 'Eleven']
  },
  {
    home: teamPinda,
    visitor: teamCorinthians,
    date: new Date(2022, 8, 15, 15, 0, 0, 0),
    championship: 'Campeonato Paulista Feminino 2022',
    streaming: ['Facebook/Centauro', 'Paulistão Play']
  },
];
