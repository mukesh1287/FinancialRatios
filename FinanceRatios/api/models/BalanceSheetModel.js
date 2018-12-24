let mongoose = require('mongoose');

const shareholderFundsSchema = mongoose.Schema({
    totalShareCapital:{
        type: Number,
        required: true 
    },
    totalReservesAndSurplus:{
        type: Number,
        required: true 
    }

});

const nonCurrentLiabilitiesSchema = mongoose.Schema({
    longTermBorrowings:{
        type: Number,
        required: false
    },
    deferredTaxLiabilities:{
        type: Number,
        required: false
    },
    longTermProvisions:{
        type: Number,
        required: false
    },
    totalNonCurrentLiabilities: {
        type: Number,
        required: false
    }

});

const currentLiabilitiesSchema = mongoose.Schema({
    tradePayables:{
        type: Number,
        required: false
    },
    otherCurrentLiabilities:{
        type: Number,
        required: false
    },
    shortTermProvisions:{
        type: Number,
        required: false
    },
    totalCurrentLiabilities:{
        type: Number,
        required: false
    }
});

const nonCurrentAssetsSchema = mongoose.Schema({
    tangibleAssets: {
        type:Number,
        required: false
    },
    inTangibleAssets: {
        type: Number,
        required: false
    },
    capitalWorkInProgress:{
        type: Number,
        required: false
    },
    fixedAssets:{
        type: Number,
        required: false
    },
    longTermLoansAndAdvances:{
        type: Number,
        required: false
    },
    otherNonCurrentAssets:{
        type: Number,
        required: false
    },
    totalNonCurrentAssets: {
        type: Number,
        required: false
    }
});

const currentAssetsSchema= mongoose.Schema({
    currentInvestments:{
        type: Number,
        required: false
    },
    inventories: {
        type: Number,
        required: false
    },
    tradeReceivables: {
        type: Number,
        required: false
    },
    cashAndCashEquivalents: {
        type: Number,
        required: false
    },
    shortTermLoansAndAdvances:{
        type: Number,
        required: false
    },
    otherCurrentAssets:{
        type: Number,
        required: false
    },
    totalCurrentAssets:{
        type: Number,
        required: false
    }
})
const balanceSheetSchema = mongoose.Schema({
   
    companyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    company:{
        type: String,
        required: false
    },
    year:{
        type: Number,
        required: true
    },
    totalCapitalAndLiabilities:{
        type: Number,
        required: true
    },
    totalAssets: {
        type: Number,
        required: true
    },
    shareholderFunds: shareholderFundsSchema,
    nonCurrentLiabilities: nonCurrentLiabilitiesSchema,
    currentLiabilities: currentLiabilitiesSchema,
    nonCurrentAssets: nonCurrentAssetsSchema,
    currentAssets: currentAssetsSchema
});



const BalanceSheet = module.exports = mongoose.model('balanceSheet', balanceSheetSchema);

module.exports.findBalanceSheetById = function(id){
   return BalanceSheet.findById({_id:id});
}


module.exports.findBalanceSheet = function(companyName, year){
   return BalanceSheet.find({name:companyName, year: year});
}