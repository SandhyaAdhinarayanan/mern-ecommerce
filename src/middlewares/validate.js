module.exports = (schema) => {
  return (req, res, next) => {
    try {
      const result = schema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          success: false,
          errors: result.error.issues.map((issue) => ({
            field: issue.path[0],
            message: issue.message,
          })),
        });
      }
      next();
    } catch (err) {
      res.status(400).json({ success: false, message: err.errors[0].message });
    }
  };
};
