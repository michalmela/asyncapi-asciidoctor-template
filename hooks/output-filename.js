const fs = require('fs');

module.exports = {
    'generate:after': generator => {
        if(generator.templateParams.outFilename !== 'asyncapi.adoc') {
            fs.renameSync(`${generator.targetDir}/asyncapi.adoc`,
                `${generator.targetDir}/${generator.templateParams.outFilename}`);
        }
    }
}
