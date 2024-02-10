<template>
	<div class="z-50 bottom-0 h-full w-full">
		<div class="py-2 w-full">
			<div class="flex items-center gap-2">
				<img
					:src="post.image"
					:alt="post.name + post.image"
					class="h-[40px] w-[40px] rounded-full object-cover self-start" />
				<div class="flex items-center gap-2">
					<div class="ml-2 flex flex-col gap-4">
						<h3 class="font-semibold">
							{{ post.name }}
						</h3>
						<p class="text-sm">
							{{ post.content }}
						</p>
						<img
							:src="post.picture"
							:alt="post.picture + post.name" />

						<div class="flex items-center gap-4">
							<div class="flex items-center">
								<div class="flex flex-col gap-2 justify-center items-center">
									<img
										src="https://placehold.co/100"
										class="w-[20px] h-[20px] object-cover rounded-full" />
									<img
										src="https://placehold.co/100"
										class="w-[20px] h-[20px] object-cover rounded-full" />
								</div>
								<img
									src="https://placehold.co/100"
									class="w-[20px] h-[20px] object-cover rounded-full" />
							</div>
							<div class="flex items-center gap-1">
								<button>
									<Icon
										name="bi:heart"
										class="transition-all"
										:color="isLike ? '#D43C1C' : '#000'"
										size="18" />
									4 likes
								</button>
							</div>
							<div class="flex items-center gap-1">
								<button>
									<Icon
										name="bi:chat"
										color="#000"
										size="18" />
									4 comments
								</button>
							</div>
							<div class="flex items-center gap-1">
								<button>
									<Icon
										name="bi:share"
										color="#000"
										size="18" />
									4 shares
								</button>
							</div>
						</div>
					</div>
					<div class="relative mb-2 self-start">
						<button
							:disabled="isDeleting"
							@click="isMenu = !isMenu"
							class="flex items-center p-1 h-[24px] w-[24px] rounded-full cursor-pointer transition-all"
							:class="isMenu ? 'bg-gray-800' : ''">
							<Icon
								v-if="!isDeleting"
								name="bi:three-dots"
								:color="isMenu ? '#fff' : '#000'"
								size="18" />
							<Icon
								v-else
								name="bi:circle-notch"
								color="#000"
								size="18" />
						</button>
						<div
							v-if="isMenu"
							class="absolute border border-gray-600 right-0 z-20 mt-1 rounded-lg">
							<button
								class="flex items-center py-1 px-2 text-white bg-gray-800 hover:bg-gray-700">
								<Icon
									name="material-symbols-light:auto-delete"
									color="#D43C1C"
									size="18" />
								<span class="ml-2">Delete</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const runtimeConfig = useRuntimeConfig();
const isDeleting = ref(false);
const isMenu = ref(false);
const isLike = ref(false);

const emit = defineEmits(["isDeleted"]);
const props = defineProps({
	post: {
		type: Object,
		required: true,
	},
});
</script>
