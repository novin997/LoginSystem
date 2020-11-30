import Joi from "@hapi/joi";

interface schemaInterface {
  username?: string;
  email: string;
  password: string;
}

const schema: Joi.ObjectSchema<schemaInterface> = Joi.object({
  username: Joi.string().min(6).max(255),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});

async function validateUser(body: Body): Promise<Joi.ValidationResult> {
  return schema.validate(body);
}

export = validateUser;
