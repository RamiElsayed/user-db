const { Router } = require("express");


const router = Router();

const { getUserById, updateUserById, deleteUserById } = require('../../controllers/api/users')

router.get("/:id", getUserById );

// UPDATE a user
router.put("/:id", updateUserById );

// DELETE a user
router.delete("/:id", deleteUserById );

module.exports = router;
