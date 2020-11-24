function requireUser(req, res, next) {
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action!",
    });
  }

  next();
}

function isAdmin(req, res, next) {
<<<<<<< HEAD
  if (req.user.id === 2) {
    next({
      name: "AdminRequiredError",
      message: "You must an admin to perform this action!",
=======
  if (!req.user.isAdmin) {
    next({
      name: "UnauthenticatedUserError",
      message: "You must be an admin to perform this action",
>>>>>>> 2626fbe8cb43c306498c0f05259c8c7815cad60d
    });
  }

  next();
}

module.exports = {
  requireUser,
<<<<<<< HEAD
  isAdmin,
=======
  isAdmin
>>>>>>> 2626fbe8cb43c306498c0f05259c8c7815cad60d
};
