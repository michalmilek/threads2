<template>
	<div>
		<NuxtPage />
		<CreatePost
			:class="[
				{
					'max-h-[100vh] transition-all duration-200 ease-in visible':
						userStore.isMenuOverlay,
				},
				{
					'max-h-[0] transition-all duration-200 ease-out invisible':
						!userStore.isMenuOverlay,
				},
			]" />
		<Modal
			:class="[
				{
					'max-h-[100vh] transition-all duration-200 ease-in visible':
						userStore.isLogoutOverlay,
				},
				{
					'max-h-[0] transition-all duration-200 ease-out invisible':
						!userStore.isLogoutOverlay,
				},
			]" />
	</div>
</template>
<script setup>
import Modal from "~/components/Modal.vue";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>
