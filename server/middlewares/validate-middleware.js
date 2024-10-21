const validate = (schema) => async (req, res, next) => {
  try {
    if (req.body.price) {
      req.body.price = parseFloat(req.body.price);
    }
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "Fill the input properly";
    const extradetails = err.errors
      ? err.errors.map((error) => error.message).join(", ")
      : "Invalid input";

    const error = {
      status,
      message,
      extradetails,
    };

    console.log(error);
    next(error);
  }
};

module.exports = validate;
