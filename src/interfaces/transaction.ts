export interface ITransaction {
  readonly billingId: string;
  readonly amount: number;
  readonly transactionFee: number;
  readonly antecipationFee: number;
}
