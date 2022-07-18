const { Router } = require("express");
const User = require("../../models/User");

require('dotenv').config();

const router = Router();

router.get("/:id", async (req, res) => {
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
});

// UPDATE a user
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.update(req.body, { where: { id } });
    if (!user[0]) {
      return res.status(404).json({ message: "No user with this id!" });
    }
    return res.json({message: " Successfully updated user"});
  } catch ({ message = " Something went wrong " }) {
    return res.status(500).json({ message });
  }
});

// DELETE a user
router.delete("/:id", async (req, res) => {
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
});

module.exports = router;
