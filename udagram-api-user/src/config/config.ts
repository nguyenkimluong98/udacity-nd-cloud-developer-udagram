console.log(process.env);

export const config = {
	username: "postgres",
	password: "password",
	database: "udagram",
	host: process.env.POSTGRES_HOST,
	dialect: "postgres",
	aws_region: process.env.AWS_REGION,
	aws_profile: process.env.AWS_PROFILE,
	aws_media_bucket: process.env.AWS_BUCKET,
	url: process.env.URL,
	jwt: {
		secret: process.env.JWT_SECRET,
	},
};
