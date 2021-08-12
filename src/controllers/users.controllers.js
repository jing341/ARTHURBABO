export const getSignup = (_, res) => res.render("signup");

export const postSignup = (req, res) => {
  const { email, username, password } = req.body;
  // Make Account
  return res.redirect("/");
};
