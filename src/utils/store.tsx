import create from "solid-zustand";
import {
  CategoryDataType,
  CountStoreType,
  CategoryStateType,
  MenuStateType,
} from "./state";
import client from "./client";
import { persist, devtools } from "zustand/middleware";

// 가장 기본적이고 예시가 많은 형태
export const useCountStore = create<CountStoreType>((set) => ({
  count: 0,
  increment: () =>
    set((state: { count: number }) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state: { count: number }) => ({ count: state.count - 1 })),
}));

// CRUD 기본 기능 추가한 형태
export const useDataStore = create<CategoryStateType>((set) => ({
  data: [],
  removeData: (key: number) =>
    set((state: { data: CategoryDataType[] }) => ({
      data: state.data.filter((item) => item.key !== key),
    })),
  insertData: (data: CategoryDataType) =>
    set((state: { data: CategoryDataType[] }) => ({
      data: [...state.data, data],
    })),
  updateData: (data: CategoryDataType) =>
    set((state: { data: CategoryDataType[] }) => ({
      data: state.data.map((item) => {
        if (item.key === data.key) return data;
        return item;
      }),
    })),
}));

// API 비동기 통신 지원 형태
// persist 미들웨어를 사용해 localStorage, sessionStorage에 값 저장 가능
export const useMenuStore = create(
  persist<MenuStateType>(
    (set) => ({
      data: null,
      isLoading: false,
      error: null,
      fetchData: async () => {
        set({ isLoading: true });
        try {
          const response = await client.get("bim-mng/menu-list");
          const data = response.data;
          set({ data, isLoading: false });
        } catch (error) {
          set({ error, isLoading: false });
        }
      },
    }),
    { name: "menu-storage", getStorage: () => sessionStorage }
  )
);

// Redux DevTools 사용으로 상태 변경 monitoring, debugging 가능
export const useMenuDevStore = create(
  devtools<MenuStateType>(
    (set) => ({
      data: null,
      isLoading: false,
      error: null,
      fetchData: async () => {
        set({ isLoading: true });
        try {
          const response = await client.get("/bim-mng/menu-list");
          const data = await response.data;
          set({ data, isLoading: false });
        } catch (error) {
          set({ error, isLoading: false });
        }
      },
    }),
    { name: "menu-storage", getStorage: () => sessionStorage }
  )
);

const barExecutionData = [
  { key: 1, category: "계획", all: 61, bim: 0 },
  { key: 2, category: "중간", all: 90, bim: 0 },
  { key: 3, category: "실시", all: 365, bim: 67 },
];
