const Router = require('express');
const {getActivity} = require ('../controllers/activityControllers')

const router = Router()

router.post('/' , getActivity)

module.exports = router;