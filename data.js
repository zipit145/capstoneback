var express = require('express')
var router =  express.Router()
const queries = require('./queries')
const Tesseract = require('tesseract.js')
var Jimp = require('jimp');
//const tesseract = require('node-tesseract-ocr')
//const img = require('ocr-two-column-example-1.jpg')
 
const config = {
  lang: 'eng',
  oem: 1,
  psm: 3,
  tessedit_create_txt:1
}
var circle2 =  new Jimp('circle-601.png', function (err, img) {
    err ? console.log('logo err' + err) : console.log('logo created and ready for use');
    return img.opacity(0.3);
});
 
// Tesseract.recognize('ocr-two-column-example-1.jpg')
// .then(function(result){
//     console.log(result)
// })

var resultHolder = []


Tesseract.recognize('hello-small-bw.jpg')
    .then(
            function(result){
                for(i=0;i<result.words.length;i++) {
                    if(result.words[i].text === "Hello"){
                        resultHolder.push(result.words[i].baseline)
                        resultHolder.push(result.words[i].text)
                        console.log(resultHolder)
                        return resultHolder
                    }
                }
                //
            }
            
        )
    .then(function(){
        Jimp.read('circle-600.png')
        .then(circle => {
          return circle
            .resize(400, 5) // resize
            .write('circle-601.png'); // save
        })
        .then(helloSm => {
            Jimp.read('hello-small-bw.jpg')
            .then(hello => {
              //hello.pixelate( 171, 208, 400, 1 )
              return hello
                .mask(circle2, 171, 208)
                .write('hello-small-bw2.jpg')
            })
        })
        .catch(err => {
          console.error(err);
        });
    })



    

// .progress(function  (p) { console.log('progress', p)    })
// .then(function (result) { console.log('result', result) })

// var job1 = Tesseract.recognize('ocr-two-column-example-1.jpg');

// job1.progress(message => console.log(message));

// job1.catch(err => console.error(err));

// job1.then(result => console.log(result));

// job1.finally(resultOrError => console.log(resultOrError));
// Tesseract
//   .recognize('ocr-two-column-example-1.jpg', config)
//   .then(text => {
//     console.log('Result:', text)
//   })
//   .catch(err => {
//     console.log('error:', err)
//   })

router.get('/', (req,res) => {
    queries.readAllData().then(data => res.status(200).send({ data }))
})
router.get('/:id', (req,res) => {
    queries.readData(req.params.id).then(data => res.status(200).send({ data }))
})
router.delete('/:id', (req,res) => {
    queries.deleteMovie(req.params.id).then(data => res.status(202).send({ data }))
})
router.post('/', (req,res) => {
    queries.createData(req.body).then(newData => res.status(201).send({ newData }))
})
router.put('/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body).then(data => res.status(204).send({ data }))
})



module.exports = router