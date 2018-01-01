// sudo mongod
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/yys', {
    useMongoClient: true
});
mongoose.connection.on('open', () => {
    console.log('mongodb opened');
});
const UserSchema = new mongoose.Schema({
    name: String,
    times: {
        type: Number,
        default: 0
    }
});
UserSchema.pre('save', function(next) {
    this.time ++;
    next();
});
UserSchema.statics = {
    async getUser(name) {
        const user = await this.findOne({
            name: name
        }).exec();
        return user;
    }
};
UserSchema.methods = {
    async fetchUser(name) {
        const user = await this.model('User').findOne({
            name: name
        }).exec();
        return user;
    }
};
mongoose.model('User', UserSchema);
const User = mongoose.model('User');
(async () => {
    // console.log(await User.find({}).exec())
    console.log(await User.getUser('vue ssr 1'));
    // const user = new User({
    //     name: 'vue'
    // });
    // const user = ;
    // user.name = "vue ssr 1";
    // await user.save(); //插入数据
    const user = await User.findOne({name: 'ssr 1'});
    const newUser = await user.fetchUser('ssr 1');
    console.log(newUser);

})();
