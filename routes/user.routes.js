const router = require('express').Router();

const { getServerDetails } = require('../controller/status.controller')

router.get("/", getServerDetails)

module.exports = router;