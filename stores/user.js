import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
	state: () => ({
		posts: [],
		isMenuOverlay: false,
		isLogoutOverlay: false,
	}),
	actions: () => ({
		toggleMenuOverlay() {
			this.isMenuOverlay = !this.isMenuOverlay;
		},
		toggleLogoutOverlay() {
			this.isLogoutOverlay = !this.isLogoutOverlay;
		},
	}),
});
