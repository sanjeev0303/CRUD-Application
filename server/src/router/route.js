import { Router } from "express";
import { addUser, getUsers, getUser, editUser, deleteUser } from "../controller/addUser.controller.js";

// import { getUsers } from "../controller/addUser.controller.js";




const router = Router()

//route of addUser
router.route("/add").post(addUser)

router.route("/all").get(getUsers)

router.route("/:id").get(getUser)


router.route("/:id").put(editUser)


router.route("/:id").delete(deleteUser)

export { router }