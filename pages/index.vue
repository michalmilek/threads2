<template>
	<MainLayout>
		<div
			id="IndexPage"
			class="w-full overflow-auto">
			<div class="mx-auto max-w-[500px] overflow-hidden">
				<div
					id="Posts"
					class="px-4 max-w-[600px] mx-auto">
					<div
						v-if="posts.length > 0"
						v-for="post in posts"
						:key="post">
						<Post
							:post="post"
							@isDeleted="posts = []" />
					</div>
					<div
						v-else
						class="flex items-center justify-center h-[50vh]">
						<p>No posts</p>
					</div>
				</div>
			</div>
		</div>
	</MainLayout>
</template>
<script setup>
import MainLayout from "../layouts/MainLayout.vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
// const user = useSupabaseUser();

let posts = ref([]);
let isPosts = ref(false);
let isPostsLoading = ref(false);

onBeforeMount(() => {
	posts.value = [
		{
			name: "John Doe",
			image: "https://placehold.co/100",
			content: "Lorem ipsum 200",
			picture: "https://placehold.co/500",
		},
	];
});
</script>
