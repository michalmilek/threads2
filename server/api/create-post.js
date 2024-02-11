import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async event => {
	const body = await readBody(event);

	const newPost = await prisma.posts.create({
		data: {
			userId: body.userId,
			name: body.name,
			image: body.image,
			picture: body.picture,
			text: body.text,
		},
	});

	return newPost;
});
