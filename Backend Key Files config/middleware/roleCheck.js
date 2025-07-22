exports.authorizeRoles = (...allowedRoles) => (req, res, next) => {
  if (!allowedRoles.includes(req.user.role_id)) {
    return res.status(403).json({ message: 'Forbidden: insufficient rights' });
  }
  next();
};
