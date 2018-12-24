const balanceSheetController = require('../controllers/BalanceSheetController');
const companyController = require('../controllers/CompanyController');
const profitAndLossController = require('../controllers/ProfitAndLossController');

let router = require('express').Router();

// Set default API response
router.get('/balanceSheet/:id', function (req, res) {
    balanceSheetController.get(req, res);
});

router.route('/balanceSheet/:companyName')
    .post(function (req, res) {
        balanceSheetController.new(req, res);
    });

router.route('/company').post(function (req, res) {
    companyController.new(req, res);
});

router.get('/company/:name', function (req, res) {
    companyController.getByName(req, res);
});

router.route('/pl/:companyName').post(function (req, res) {
    profitAndLossController.new(req, res);
});
// Export API routes
module.exports = router;