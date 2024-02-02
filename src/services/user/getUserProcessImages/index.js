import prisma from '../../../db/prisma.js';

// 查询用户历史生成的作品图片
export default async (req, res) => {
	// 在userProcessImageData表中查找userId为userId的记录
	const userImages = await prisma.userProcessImageData.findUnique({
		where: {
			userId: req.body.userId,
		},
	});
	if (user) {
		// 如果找到了，返回用户的历史生成的作品图片
		return { data: userImages };
	} else {
		return { data: null };
	}
};
