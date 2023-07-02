const {register, login} = require("../controllers/auth");
const router = require('express').Router();

router.post("/register", register);
router.post("/login", login);

// router.post("/register", (req, res, next) => {
//     next({
//         statusCode: 403,
//         errorMessage: "Spam yapılmaması için register işlemleri askıya alındı."
//     })
// })

module.exports = router;
