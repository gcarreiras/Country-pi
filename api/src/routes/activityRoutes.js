const Router = require('express');
const {getActivity} = require ('../controllers/activityControllers')

const router = Router()

router.get('/' , getActivity)

module.exports = router;