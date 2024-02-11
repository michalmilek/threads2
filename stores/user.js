import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
	state: () => ({
		posts: [],
		isMenuOverlay: false,
		isLogoutOverlay: false,
	}),
	actions: {
		toggleMenuOverlay() {
			this.isMenuOverlay = !this.isMenuOverlay;
		},
		toggleLogoutOverlay() {
			this.isLogoutOverlay = !this.isLogoutOverlay;
		},
		async getAllPosts() {
			const res = await useFetch("/api/get-all-posts");
			this.posts = res.data.value;
			return res.data.value;
		},
	},
});
