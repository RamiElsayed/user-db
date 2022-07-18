const { Router } = require("express");


const router = Router();

const { getUserById, updateUserById, deleteUserById, getUsers, createUser } = require('../../controllers/api/users')

router.get("/:id", getUserById );

// UPDATE a user
router.put("/:id", updateUserById );

// DELETE a user
router.delete("/:id", deleteUserById );

router.get("/", getUsers );

router.post("/:id", updateUserById );

router.post("/", createUser );

module.exports = router;
