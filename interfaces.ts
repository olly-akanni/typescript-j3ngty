import {
  RankEnum,
  FullRankEnum,
  PayGrade,
  Insignia,
  MPC,
  MPCFull,
  PayGradeMap,
} from './enums';

interface Rank {
  rank: RankEnum;
  fullRank: FullRankEnum;
  payGrade: PayGrade;
  insignia: Insignia;
  mpc: MPC;
  mpcFull: MPCFull;
}
