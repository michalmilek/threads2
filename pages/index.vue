<template>
	<NuxtLayout name="signed-in">
		<template #signed-in>
			<div
				id="IndexPage"
				class="w-full overflow-auto">
				<div class="mx-auto max-w-[500px] overflow-hidden">
					<div
						id="Posts"
						class="px-4 max-w-[600px] mx-auto">
						<div
							v-if="isPosts"
							v-for="post in posts"
							:key="post.id + 'post'">
							<Post
								:post="post"
								@isDeleted="posts = []" />
						</div>
						<div v-else>
							<client-only>
								<div v-if="isPostsLoading">
									<div class="h-full">Loading...</div>
								</div>
								<div
									v-else
									class="h-full flex items-center justify-center">
									<div class="text-center">
										<div class="text-2xl font-bold">No posts</div>
										<div class="text-gray-500">
											Create a post to get started
										</div>
									</div>
								</div>
							</client-only>
						</div>
					</div>
				</div>
			</div>
		</template>
	</NuxtLayout>
</template>
<script setup>
const userStore = useUserStore();
const user = useSupabaseUser();

let posts = ref([]);
let isPosts = ref(false);
let isPostsLoading = ref(false);

watchEffect(() => {
	if (!user.value) {
		return navigateTo("/auth");
	}
});

onBeforeMount(async () => {
	try {
		isPostsLoading.value = true;
		await userStore.getAllPosts();
		isPostsLoading.value = false;
	} catch (error) {
		console.log(error);
	}
});

onMounted(() => {
	watchEffect(() => {
		if (userStore.posts && userStore.posts.length >= 1) {
			posts.value = userStore.posts;
			isPosts.value = true;
		}
	});
});

watch(
	() => posts.value,
	() => {
		if (userStore.posts && userStore.posts.length >= 1) {
			posts.value = userStore.posts;
			isPosts.value = true;
		}
	},
	{ deep: true }
);
</script>
