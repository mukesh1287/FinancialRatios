let BalanceSheetModel = require('../models/BalanceSheetModel');
let CompanyModel = require('../models/CompanyModel');

exports.new = function (req, res) {
    let companyName = req.params.companyName;
    console.log(companyName);

    retrieveCompanyId(companyName).then((data) => {
        let companyId = data._id;
        console.log(companyId);
        if (companyId) {
            var balanceSheet = new BalanceSheetModel();

            balanceSheet.year = req.body.year;
            balanceSheet.companyId = companyId;
            balanceSheet.company = companyName;
            balanceSheet.shareholderFunds = req.body.shareholderFunds;
            balanceSheet.totalCapitalAndLiabilities = req.body.totalCapitalAndLiabilities;
            balanceSheet.nonCurrentLiabilities = req.body.nonCurrentLiabilities;
            balanceSheet.currentLiabilities = req.body.currentLiabilities;
            balanceSheet.nonCurrentAssets = req.body.nonCurrentAssets;
            balanceSheet.currentAssets = req.body.currentAssets;
            balanceSheet.totalAssets = req.body.totalAssets;

            console.log(balanceSheet);
            // save the contact and check for errors
            balanceSheet.save(function (err) {
                if (err) {
                    res.json({
                        message: 'Problem creating the balance sheet'
                    });
                    console.log(err);
                }
                res.json({
                    message: 'New BalanceSheet created!',
                    data: balanceSheet
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


};

exports.get = function (req, res) {
    console.log(req.params.id);
    BalanceSheetModel.findBalanceSheet(req.params.id).then((data) => {
        console.log(data);

        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
    console.log("In controller");
}

function retrieveCompanyId(companyName) {
    return CompanyModel.findCompanyByName(companyName);
}