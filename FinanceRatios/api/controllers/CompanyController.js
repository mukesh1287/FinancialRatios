let Company = require('../models/CompanyModel');

exports.new = function (req, res) {
    var company = new Company();
    company.name = req.body.name;

    company.save(function (err) {
        res.json({
            message: 'Company Created',
            data: company
        });
    });
}

exports.update = function (req, res) {
    Company.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, Company) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send(Company);
    });
}

exports.getById = function (req, res) {
    Company.findCompanyById(req.params.id).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(`Error while finding company ${err}`, err);
    });
}

exports.getByName = function (req, res) {
    Company.findCompanyByName(req.params.name).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(`Error while finding company by name ${err}`, err);
    });
}