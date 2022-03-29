var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const { writeFile, readFile } = require('fs');
const { route } = require('.');

router.get('/createfile/:filename/:filecontent', function (req, res) {
    writeFile(
        `./files/${req.params.filename}.txt`,
        `${req.params.filecontent}`,
        (err) => {
            if (err) {
                throw err;
            } else {
                res.send('file create/modified');
            }
        }
    );
});
router.get('/createfolder/:filename', function (req, res) {
    fs.mkdir(
        `./files/${req.params.filename}`,
        { recursive: true },
        function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('New directory successfully created.');
            }
        }
    );
});

router.get('/readdirectory', function (req, res) {
    const filePath = path.join(__dirname, '../files');
    fs.readdir(filePath, (err, files) => {
        if (err) res.json(err);
        console.log(files);
        res.send(files);
    });
});

router.get('/deletefile/:fileName', function (req, res) {
    fs.unlink(`./files/${req.params.fileName}`, (err) => {
        if (err) res.send(err);
        res.send(`file with name ${req.params.fileName} is deleted`);
    });
});

router.get('/addcontent/:fileName/:data', function (req, res) {
    fs.writeFile(
        `./files/${req.params.fileName}.txt`,
        req.params.data,
        (err) => {
            if (err) {
                res.json(err);
            } else {
                res.json('Changed file');
            }
        }
    );
});
router.get('/readfile/:fileName', function (req, res) {
    fs.readFile(`./files/${req.params.fileName}.txt`, 'utf8', (err, content) => {
        if (err) {
            res.json(err);
        } else {
            res.send(content);
        }
    });
});
module.exports = router;
