module.exports = {
    mutipleMongooseObject: function(mongoose){
        return mongoose.map(item => item.toObject());
    },

    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
