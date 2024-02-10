<template lang="">
	<div
		id="CreatePost"
		class="fixed z-50 bottom-0 h-full w-full overflow-hidden">
		<div class="bg-black h-full w-full text-white overflow-auto">
			<div
				class="flex items-center justify-start py-4 max-w-[500px] mx-auto border-b border-b-gray-300">
				<button
					@click="
						userStore.isMenuOverlay = false;
						clearData();
					"
					class="rounded-full px-2">
					<Icon
						name="material-symbols-light:cancel-outline"
						size="24" />
				</button>
				<h1 class="ml-2 text-xl font-bold">Create Thread</h1>
			</div>
			<div
				id="Post"
				class="z-40 bottom-0 max-h-[100vh-200px] w-full px-3 max-w-[500px] mx-auto">
				<div class="py-2 w-full">
					<div class="flex items-center">
						<div class="flex items-center text-white gap-2">
							<img
								src="https://picsum.photos.id/223/50"
								alt="test" />
							<span enter-class="font-semibold text-lg">Michał Miłek</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useUserStore } from "../stores/user";
// import { useSupabaseUser } from "../stores/user";
const userStore = useUserStore();
// const user = useSupabaseUser();

const text = ref("");
const isLoading = ref(false);
const adjustTextareaHeight = () => {
	const textarea = document.getElementById("createPostTextarea");
	textarea.style.height = "auto";
	textarea.style.height = `${textarea.scrollHeight}px`;
};

const file = ref(null);
const fileDisplay = ref(null);
const fileData = ref(null);

const clearData = () => {
	text.value = "";
	file.value = null;
	fileDisplay.value = null;
	fileData.value = null;
};

const onChange = () => {
	fileDisplay.value = URL.createObjectURL(file.value.files[0]);
	fileData.value = file.value.files[0];
};
</script>
