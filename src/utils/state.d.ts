export interface CategoryDataType {
  key: number;
  category: number | null;
  all?: number;
  bim?: number;
  name: string;
}

export interface CountStoreType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export interface CategoryStateType {
  data: CategoryDataType[];
  removeData: (key: number) => void;
  insertData: (data: any) => void;
  updateData: (data: any) => void;
}

export interface MenuStateType {
  data: any;
  isLoading: boolean;
  error: any;
  fetchData: () => void;
}
