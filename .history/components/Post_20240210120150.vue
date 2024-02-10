<template>
	<div class="z-50 bottom-0 h-full w-full">
		<div class="py-2 w-full">
			<div class="flex items-center">
				<img
					:src="post.image"
					:alt="post.name + post.image" />
				<div class="ml-2 font-semibold text-[18px]">
					{{ post.name }}
				</div>
				<button
					:disabled="isDeleting"
					@click="isMenu = !isMenu"
					class="flex items-center text-white p-1 h-[24px] w-[24px] rounded-full cursor-pointer"
					:class="isMenu ? 'bg-gray-800' : ''">
					<Icon
						v-if="!isDeleting"
						name="bi:three-dots"
						color="#000"
						size="18" />
					<Icon
						v-else
						name="bi:circle-notch"
						color="#000"
						size="18" />
				</button>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const runtimeConfig = useRuntimeConfig();
const isDeleting = ref(false);

const emit = defineEmits(["isDeleted"]);
const props = defineProps({
	post: {
		type: Object,
		required: true,
	},
});
</script>
