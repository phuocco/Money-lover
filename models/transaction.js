
var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

const TransactionSchema = new mongoose.Schema({
  //  user: {type: Schema.Types.ObjectId, ref: 'User'},
    user: {type: Schema.Types.String, ref: 'User'},
    amount: {type: Number, require: true},
    category : {type: String, require: true},
    note: String,
    date: {type: Date,default: Date.now, require: true},
    timestamp: Number,
    event: {type:Schema.Types.ObjectId,ref: 'Event'},
    remind: {type: Date},
    photo: String
},
   {timestamp: true}
)
TransactionSchema.plugin(timestamps);

var Transaction =  mongoose.model('Transaction',TransactionSchema);
module.exports =  Transaction;