const express = require("express");
const db = require("../controllers/users");

const router = express.Router();

router.get("/", (req, res) => {
    db.getUsers()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
    }
);

router.get("/:id", (req, res) => {
    db.getUserById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
})

router.post("/", (req, res) => {
    db.createUser(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
})

router.put("/:id", (req, res) => {
    db.updateUser(req.params.id, req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
})

router.delete("/:id", (req, res) => {
    db.deleteUser(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;