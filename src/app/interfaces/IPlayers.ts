export interface IPlayer {
  name: string;
  number: number;
  image: string;
  personalInformation: {
    fullName: string;
    position: string;
    birthDate: Date;
    age: number;
    contract: Date;
  };
  statistics: {
    matches: number;
    matchesStater: number;
    scout: {
      win: number;
      draw: number;
      loss: number;
    };
    titles: string[];
    goals: number;
    averageScore: number;
  };
  biography?: string;
}
