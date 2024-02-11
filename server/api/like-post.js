import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async event => {
	const body = await readBody(event);

	const data = JSON.parse(body);

	const newLike = await prisma.likes.create({
		data: {
			userId: data.userId,
			postId: data.postId,
		},
	});

	return newPost;
});
