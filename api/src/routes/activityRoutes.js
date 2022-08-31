const Router = require('express');
const { createActivity } = require ('../controllers/activityControllers')

const router = Router()

router.post('/', createActivity)

module.exports = router;