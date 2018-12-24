let mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
});

const Company = module.exports = mongoose.model('Company', companySchema);


module.exports.findCompanyById = function(id){
   return Company.findById({_id:id});
}

module.exports.findCompanyByName = function(companyName){
   return Company.findOne({name:companyName});
}

