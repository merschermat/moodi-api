var express = require('express');
var router = express.Router();
var fs = require("fs");
var JSZip = require("jszip");


/* GET users listing. */
router.post('/', function (req, res, next) {
    var zip = JSZip();

    const data = req.body.colections

    // let name = "moodi", data = [
    //     {
    //         "name": "users",
    //         "atributes": {
    //             "name": "String",
    //             "age": "Number",
    //             "email": "String"
    //         }
    //     },
    //     {
    //         "name": "cars",
    //         "atributes": {
    //             "name": "String",
    //             "age": "Number",
    //             "email": "String"
    //         }
    //     },
    //     {
    //         "name": "colors",
    //         "atributes": {
    //             "name": "String",
    //             "age": "Number",
    //             "email": "String"
    //         }
    //     },
    //     {
    //         "name": "people",
    //         "atributes": {
    //             "name": "String",
    //             "age": "Number",
    //             "email": "String"
    //         }
    //     }
    // ]
    for (var i = 0; data.length > i; i++) {
        colection = data[i]
        let stringAux = ''
        Object.keys(colection.atributes).forEach(a => { stringAux += `  ${a}:${colection.atributes[a]},\n` })
        template = `  
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
      
var ${colection.name}Schema = new Schema( {
${stringAux}
});
module.exports =  mongoose.model('${colection.name}', ${colection.name}Schema);
        `
        zip.folder('models')
            .file(colection.name + ".js", template);

    }
    zip.generateAsync({
        type: 'nodebuffer'
    }).then(file => {

        res.writeHead(200, {
            "Content-Disposition": "attachment;filename=models.zip",
        });
        res.end(new Buffer(file, 'binary'));

    })
});


module.exports = router;
