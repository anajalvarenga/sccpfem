import { ITeam } from "./ITeam";

export interface IMatch {
  home: ITeam;
  visitor: ITeam;
  stadium: string;
  date: Date;
  championship: string;
  streaming: string[];
}
