var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const { writeFile, readFile } = require('fs');
const { route } = require('.');

router.get('/createfile', function (req, res) {
  writeFile('fs-file.txt', 'Writing first contents to file using fs', (err) => {
    if (err) {
      throw err;
    } else {
      res.send('file create/modified');
    }
  });
});

router.get('/readfile/:fileName', function (req, res) {
  const filePath = path.join(__dirname, '../', req.params.fileName);
  console.log(filePath);
  readFile(filePath, (err, content) => {
    if (err) {
      res.json(err);
    } else {
      res.send(content);
    }
  });
});

router.get('/readdirectory', function (req, res) {
  fs.readdir(__dirname, (err, files) => {
    if (err) res.json(err);
    console.log(files);
    res.send(files);
  });
});

router.get('/addcontent/:fileName', function (req, res) {
  const filePath = path.join(__dirname, '../', req.params.fileName);
  fs.appendFile(
    filePath,
    '\n new data is now added to file by us\n with 2 lines',
    (err) => {
      if (err) res.json(err);
      res.send(`file with name ${req.params.fileName} is modified`);
    }
  );
});

router.get('/deletefile/:fileName', function (req, res) {
  const filePath = path.join(__dirname, '../', req.params.fileName);
  fs.unlink(filePath, (err) => {
    if (err) res.send(err);
    res.send(`file with name ${req.params.fileName} is deleted`);
  });
});
module.exports = router;
