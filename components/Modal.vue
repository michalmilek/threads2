<template>
	<div
		id="Modal"
		class="fixed grid place-items-center h-screen z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md w-full">
		<div
			class="bg-black w-full max-w-[300px] rounded-lg text-white border border-gray-600 p-2">
			<button
				@click="userStore.isLogoutOverlay = false"
				class="flex items-center justify-between bg-black w-full p-3">
				<span>Close Modal</span>
				<Icon
					name="material-symbols-light:cancel"
					size="25"
					color="#fff" />
			</button>
			<div class="border-b border-b-gray-700 my-1">
				<button
					@click="logout()"
					class="flex items-center justify-between bg-black w-full p-3">
					<div>Log out</div>
					<Icon
						name="ph:sign-out"
						size="25"
						color="#fff" />
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
const userStore = useUserStore();
const supabase = useSupabaseClient();

const logout = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) {
		console.error(error);
		return;
	}

	userStore.isLogoutOverlay = false;
};
</script>
