<template>
	<div
		id="MainLayout"
		class="h-screen">
		<div
			class="w-full flex items-center justify-center px-2 h-10 my-2 bg-black">
			<img
				src="/threads-logo.png"
				alt="threads logo"
				class="w-[35px]" />
		</div>

		<div class="flex w-full max-w-[500px] mx-auto h-screen">
			<slot name="signed-in" />
		</div>

		<div
			id="bottomNav"
			class="fixed z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black">
			<div
				class="flex w-full max-w-[500px] mx-auto items-center justify-around">
				<button @click="navigateTo('/')">
					<Icon
						name="material-symbols:home-outline"
						size="35"
						color="#fff" />
				</button>
				<button @click="userStore.isMenuOverlay = true">
					<Icon
						name="material-symbols-light:box-edit"
						size="35"
						color="#fff" />
				</button>
				<button @click="userStore.isLogoutOverlay = true">
					<Icon
						name="ph:sign-out"
						size="35"
						color="#fff" />
				</button>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>
