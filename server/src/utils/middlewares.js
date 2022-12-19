const userDetailsTrade = (permissions) => {
  return (req, res, next) => {
    const userRole = req.body.roles;
    if (permissions.includes(userRole)) {
      next();
    } else {
      return res.status(401).json("You don't have permission");
    }
  };
};

module.exports = { userDetailsTrade };
