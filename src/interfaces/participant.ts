export enum FeeConfig {
  all = 'all',
  antecipationOnly = 'antecipation_only',
}

export interface IParticipant {
  readonly name: string;
  readonly commission: number;
  readonly feeConfig: FeeConfig;
}
