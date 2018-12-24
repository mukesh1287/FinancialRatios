let mongoose = require('mongoose');

const revenueSchema = mongoose.Schema({
    netRevenueFromOperations: {
        type: Number,
        required: false
    },
    otherOperatingRevenue: {
        type: Number,
        required: false
    },
    totalOperatingRevenue: {
        type: Number,
        required: false
    },
    otherIncome: {
        type: Number,
        requried: false
    },
    additionalIncomeItems: [{
        incomeName: {
            type: String,
            required: false
        },
        incomeAmount: {
            type: Number,
            required: false
        }
    }]
});

const expenseSchema = mongoose.Schema({
    purchaseOfStockInTrade: {
        type: Number,
        required: false
    },
    employeeBenefitExpense: {
        type: Number,
        required: false
    },
    financeCost: {
        type: Number,
        required: false
    },
    depreciationAndAmortisationExpense: {
        type: Number,
        required: false
    },
    otherExpense: {
        type: Number,
        required: false
    },
    additionalExpenseItems: [{
        expenseName: {
            type: String,
            required: false
        },
        expenseAmount: {
            type: Number,
            required: false
        }
    }]
});

const taxExpenseSchema = mongoose.Schema({
    currentTax: {
        type: Number,
        required: false
    },
    deferredTax: {
        type: Number,
        required: false
    }
});

const profitAndLossSchema = mongoose.Schema({
    companyId: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    totalRevenue: {
        type: Number,
        required: false
    },
    totalExpenses: {
        type: Number,
        required: false
    },
    revenue: revenueSchema,
    expense: expenseSchema,
    profitBeforeTax: {
        type: Number,
        required: false
    },
    taxExpense: taxExpenseSchema,
    profitAfterTaxAndBeforeExtraordinaryItems: {
        type: Number,
        required: false
    },
    profitOrLoss: {
        type: Number,
        required: false
    }
});


const ProfitAndLossStatement = module.exports = mongoose.model('profitAndLossStatement', profitAndLossSchema);

module.exports.findPLStatementById = function (id) {
    return ProfitAndLossStatement.findById({ _id: id });
}

module.exports.findPLStatement = function (companyName, year) {
    return ProfitAndLossStatement.find({ name: companyName,year:year });
}