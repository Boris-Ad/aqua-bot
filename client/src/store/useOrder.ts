import { create } from 'zustand';

interface OrderState {
  bottle5: number;
  priceBottle5: number;
  bottle10: number;
  priceBottle10: number;
  bottle20: number;
  priceBottle20: number;

  totalPrice: number;

  setBottle5: (amount: number) => void;
  setBottle10: (amount: number) => void;
  setBottle20: (amount: number) => void;

  setPriceBottle5: (price: number) => void;
  setPriceBottle10: (price: number) => void;
  setPriceBottle20: (price: number) => void;

  resetDataOrder: () => void;
}

export const useOrderStore = create<OrderState>()((set, get) => ({
  bottle5: 0,
  priceBottle5: 0,
  bottle10: 0,
  priceBottle10: 0,
  bottle20: 0,
  priceBottle20: 0,

  totalPrice: 0,

  setBottle5: amount => set(() => ({ bottle5: amount })),
  setBottle10: amount => set(() => ({ bottle10: amount })),
  setBottle20: amount => set(() => ({ bottle20: amount })),

  setPriceBottle5: price =>
    set(() => {
      const totalPrice = price + get().priceBottle10 + get().priceBottle20;
      return { priceBottle5: price, totalPrice };
    }),
  setPriceBottle10: price =>
    set(() => {
      const totalPrice = get().priceBottle5 + price + get().priceBottle20;
      return { priceBottle10: price, totalPrice };
    }),

  setPriceBottle20: price =>
    set(() => {
      const totalPrice = get().priceBottle5 + get().priceBottle10 + price;
      return { priceBottle20: price, totalPrice };
    }),

  resetDataOrder: () => set({ priceBottle5: 0, bottle5: 0, priceBottle10: 0, bottle10: 0, priceBottle20: 0, bottle20: 0 }),
}));
