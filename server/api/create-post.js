import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async event => {
	const body = await readBody(event);

	const data = JSON.parse(body);

	const newPost = await prisma.posts.create({
		data: {
			userId: data.userId,
			name: data.name,
			image: data.image,
			picture: data.picture,
			text: data.text,
		},
	});

	return newPost;
});
