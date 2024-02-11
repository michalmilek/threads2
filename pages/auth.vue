<template>
	<div
		id="AuthPage"
		class="w-full h-screen pt-32">
		<div class="w-full">
			<div class="w-full flex items-center justify-center gap-2.5 p-2">
				<img
					class="w-[35px]"
					src="/threads-logo.png"
					alt="threads logo" />
				<span class="font-bold text-2xl text-black">Threads</span>
			</div>

			<div class="max-w-[350px] mx-auto px-2 text-black">
				<div class="text-center mb-6 mt-4">Login / Register</div>
				<button
					@click="login('github')"
					class="flex items-center justify-center gap-3 p-1.5 w-full border border-black rounded-full text-lg font-semibold">
					<div class="flex items-center gap-2 justify-center">
						<img
							src="/github-logo.png"
							class="max-w-[30px] rounded-full border border-black"
							alt="github logo" />
						Github
					</div>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
const supabase = useSupabaseClient();
const userStore = useUserStore();

watchEffect(() => {
	if (userStore.user) {
		return navigateTo("/");
	}
});

const login = async prov => {
	const { error, data } = await supabase.auth.signInWithOAuth({
		provider: prov,
		redirectTo: window.location.origin,
	});
	if (error) {
		console.error("Error logging in:", error);
		return;
	}
	console.log("Data: ", data);
};
</script>
