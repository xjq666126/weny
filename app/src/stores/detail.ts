import { IPlan } from '@/types/plan';
import { defineStore } from 'pinia';

export interface State {
	plan: IPlan;
}

export const usePlanDetailStore = defineStore('planDetail', {
	state: (): State => ({
		// @ts-ignore
		plan: undefined,
	}),
	actions: {
		setPlan(data?: IPlan) {
			this.plan = data;
		},
	},
});
