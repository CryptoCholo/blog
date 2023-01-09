const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string()
    .trim()
    .required(),
    description: Joi.string() 
    .trim()
    .required(),
    body : Joi.string().trim().required()
})

async function postValidator(req, res, next) {
    const postPayload = req.body;
    try {
        await postSchema.validateAsync(postPayload);
        next();
    } catch (err) {
        next(err.details[0].message)
    }
}
module.exports = { postValidator }