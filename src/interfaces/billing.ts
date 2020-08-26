import { IParticipant } from './participant';

export interface IBillingPayment {
  readonly grossAmount: number;
  readonly participants: readonly IParticipant[];
}

export interface IBilling {
  readonly id: string;
  readonly totalBilling: number;
  readonly partialPayments: readonly IBillingPayment[];
}
