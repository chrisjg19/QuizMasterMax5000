const router = require("express").Router();
const userRoutes = require('./userRoutes');
const feedbackRoutes = require('./feedbackRoutes');




router.use('/users', userRoutes);
router.use('/feedbacks', feedbackRoutes);

module.exports = router;
