const User = require("../../models/User");

const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );

const getUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findByPk(id);

    if (user) {
      return res.json(user);
    }
    return res.status(404).json({ message: "No user with this id!" });
  } catch ({ message = " Something went wrong " }) {
    return res.status(500).json({ message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["username", "email", "password"],
      req.body
    );
    if (!Object.keys(payload).length) {
      return resizeBy.status(400)
      .json({ message: 'Please provide a valid request'});
    }
    const { id } = req.body;
    const user = await User.update(req.body, { where: { id } });
    if (!user[0]) {
      return res.status(404).json({ message: "No user with this id!" });
    }
    return res.json({ message: " Successfully updated user" });
  } catch ({ message = " Something went wrong " }) {
    return res.status(500).json({ message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.body;

    const user = await User.destroy({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: "No user with this id!" });
    }
    return res.json(user);
  } catch ({ message = " Something went wrong " }) {
    return res.status(500).json({ message });
  }
};

module.exports = {
  getUserById,
  updateUserById,
  deleteUserById,
};
