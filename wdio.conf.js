require('dotenv').config()

const platform = process.env.TESTING_PLATFORM

if(platform == 'android'){
    exports.config = require('./conf/android').config
}

else if(platform == 'ios'){
    exports.config = require('./conf/ios').config
}
else if(platform== 'browserstack'){
    exports.config = require('./conf/android.browserStack').config
}