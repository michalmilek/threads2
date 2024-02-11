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

					<div class="relative flex items-center w-full">
						<div class="w-[42px] mx-auto">
							<div
								class="absolute ml-4 mt-1 top-0 w-[1px] bg-gray-700 h-full" />
						</div>
						<div
							class="bg-black rounded-lg w-[calc(100%-50px)] text w-full font-light">
							<div class="pt-2 text-gray-300 bg-black w-full">
								<textarea
									id="createPostTextarea"
									v-model="text"
									@input="adjustTextareaHeight()"
									class="w-full h-20 p-2 bg-black text-white resize-none"
									placeholder="What's on your mind?" />
							</div>
							<div class="w-full">
								<div class="flex flex-col gap-2 py-1">
									<div v-if="fileDisplay">
										<img
											class="mx-auto w-full mt-2 mr-2 rounded-lg"
											:src="fileDisplay"
											alt="test" />
									</div>

									<label
										class="cursor-pointer"
										for="createThread-fileInput">
										<Icon
											name="clarity:paperclip-line"
											size="25" />
										<input
											ref="file"
											type="file"
											id="createThread-fileInput"
											@input="onChange"
											hidden
											accept=".jpg,.jpeg,.png" />
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button
				v-if="text"
				:disabled="isLoading"
				class="fixed bottom-0 font-bold text-lg w-full p-2 text-white inline-block float-right transition-all duration-300 ease-in-out"
				:class="isLoading ? 'bg-gray-700' : 'bg-black'">
				<span v-if="!isLoading"> Post </span>
				<span
					v-else
					class="flex items-center gap-2 justify-center animate-spin">
					<Icon
						name="ph:spinner"
						size="20" />
				</span>
			</button>
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
