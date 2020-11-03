import Transaction from '../models/Transaction';

interface CreateTransactionService {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const { income, outcome } = this.transactions.reduce(
      (acc: Balance, transaction: Transaction) => {
        // eslint-disable-next-line no-unused-expressions
        transaction.type === 'income'
          ? (acc.income += transaction.value)
          : (acc.outcome += transaction.value);

        return acc;
      },

      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );
    const total = income - outcome;
    return { income, outcome, total };
  }

  public create({ title, value, type }: CreateTransactionService): Transaction {
    // TODO
    const transaction = new Transaction({
      title,
      value,
      type,
    });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
