export enum FeeConfig {
  all = 'all',
  antecipationOnly = 'antecipation_only',
}

export interface IParticipant {
  readonly name: string;
  readonly percentCommission: number;
  readonly feeConfig: FeeConfig;
}
