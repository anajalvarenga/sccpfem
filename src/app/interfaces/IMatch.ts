import { IStadium } from "./IStadium";
import { ITeam } from "./ITeam";

export interface IMatch {
  home: ITeam;
  visitor: ITeam;
  stadium?: IStadium;
  date: Date;
  championship: string;
  streaming: string[];
}
