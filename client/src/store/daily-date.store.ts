import { create } from 'zustand';

interface DailyDateState {
  deliveryDays: number[];
  dailyWeek: boolean;
  setDeliveryDays: (days: number[]) => void;
  setDailyWeek: (value: boolean) => void;
  resetDelivery: () => void;
}

export const useDailyDateState = create<DailyDateState>()(set => ({
  deliveryDays: [],
  dailyWeek: true,
  setDeliveryDays: days => set(() => ({ deliveryDays: days })),
  setDailyWeek: value => set(() => ({ dailyWeek: value })),
  resetDelivery: () => set(() => ({ deliveryDays: [], dailyWeek: true, })),
}));
