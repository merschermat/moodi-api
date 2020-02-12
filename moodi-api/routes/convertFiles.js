var express = require('express');
var router = express.Router();
var fs = require("fs");
var JSZip = require("jszip");


/* GET users listing. */
router.post('/', function (req, res, next) {
    var zip = JSZip();

    const [data, name] = req.body.colections

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
        console.log(colection);
        zip.folder('models')
            .file(colection.name + ".js", JSON.stringify(colection.atributes));

    }
    zip.generateAsync({
        type: 'nodebuffer'
    }).then(file => {

        res.writeHead(200, {
            "Content-Disposition": "attachment;filename=" + name + ".rar",
        });
        res.end(new Buffer(file, 'binary'));
    })
});


module.exports = router;
