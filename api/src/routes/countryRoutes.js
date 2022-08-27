const Router = require('express');
const {getCountry} = require ('../controllers/countryControllers')

const router = Router()

router.get('/' , getCountry)

module.exports = router;