let ProfitAndLossModel = require('../models/ProfitAndLossModel');
let CompanyModel = require('../models/CompanyModel');

exports.new = function (req, res) {

    let profitAndLossModel = new ProfitAndLossModel();
    let companyName = req.params.companyName;
    console.log(companyName);

    retrieveCompanyId(companyName).then((data) => {
        let companyId = data._id;
        console.log(companyId);
        if (companyId) {
            profitAndLossModel.companyId = companyId;
            profitAndLossModel.companyName = companyName;
            profitAndLossModel.year = req.body.year;
            profitAndLossModel.totalRevenue = req.body.totalRevenue;
            profitAndLossModel.totalExpenses = req.body.totalExpenses;
            profitAndLossModel.revenue = req.body.revenue;
            profitAndLossModel.expense = req.body.expense;
            profitAndLossModel.profitBeforeTax = req.body.profitBeforeTax;
            profitAndLossModel.taxExpense = req.body.taxExpense;
            profitAndLossModel.profitAfterTaxAndExtraordinaryItems = req.body.profitAfterTaxAndExtraordinaryItems;
            profitAndLossModel.profitOrLoss = req.body.profitOrLoss;

            profitAndLossModel.save(function (err) {
                if (err) {
                    res.json({
                        message: 'Problem creating the Profit and loss statement'
                    });
                    console.log(err);
                }
                res.json({
                    message: 'New Profit and loss statement created!',
                    data: profitAndLossModel
                });
            });
        }
        else {
            res.json({
                message: 'Company Not found'
            });
        }
    }).catch((err) => {
        res.json({
            message: 'Company Not found'
        });
    });
}

function retrieveCompanyId(companyName) {
    return CompanyModel.findCompanyByName(companyName);
}