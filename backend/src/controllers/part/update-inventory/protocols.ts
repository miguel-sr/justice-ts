export interface IUpdateInventoryParams {
  id: string;
  description: string;
  image: string;
  amount: number;
}

export interface IUpdateInventoryRepository {
  updateInventory(operation: string, params: IUpdateInventoryParams[]): void;
}
