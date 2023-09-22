const express = require('express');
const router = express.Router();
const whatsupController = require('../controllers/whatsAppController');

router.get('/', whatsupController.verifyToken);
router.post('/', whatsupController.recievedMessage);

module.exports = router;
