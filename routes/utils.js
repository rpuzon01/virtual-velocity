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
<<<<<<< HEAD
  if (req.user.id === 2) {
    next({
      name: "AdminRequiredError",
      message: "You must an admin to perform this action!",
=======
=======
>>>>>>> ddef0da5bd69d34ee5fcb86455d9143edf2c3494
  if (!req.user.isAdmin) {
    next({
      name: "UnauthenticatedUserError",
      message: "You must be an admin to perform this action",
<<<<<<< HEAD
>>>>>>> 2626fbe8cb43c306498c0f05259c8c7815cad60d
=======
>>>>>>> ddef0da5bd69d34ee5fcb86455d9143edf2c3494
    });
  }

  next();
}

module.exports = {
  requireUser,
<<<<<<< HEAD
<<<<<<< HEAD
  isAdmin,
=======
  isAdmin
>>>>>>> 2626fbe8cb43c306498c0f05259c8c7815cad60d
=======
  isAdmin
>>>>>>> ddef0da5bd69d34ee5fcb86455d9143edf2c3494
};
