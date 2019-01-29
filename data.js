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

 
// Tesseract.recognize('ocr-two-column-example-1.jpg')
// .then(function(result){
//     console.log(result)
// })

var resultHolder = []
// var picture = 'hello-small-bw.jpg'
// var term = "Hello"
var picture = 'ocr-two-column-example-1.jpg'
var term = "Originally"


Tesseract.recognize(picture)
    .then(
            function(result){
                for(i=0;i<result.words.length;i++) {
                    if(result.words[i].text === term){
                        resultHolder.push(result.words[i].baseline)
                        console.log(resultHolder)
                        
                    }
                }
                return resultHolder
            }
            
        )
    .then(function(){
        for(let i=0;i<resultHolder.length;i++) {
            Jimp.read('circle-600.png')
            .then(circle => {
                var x = resultHolder[i].x1 - resultHolder[i].x0
                console.log(i, "here")
              return circle
                .resize(x, 5) // resize
                .write('circle-601.png'); // save
            })
            .then(helloSm => {
                var circle2 =  new Jimp('circle-601.png', function (err, img) {
                    err ? console.log('logo err' + err) : console.log('logo created and ready for use');
                    return img.opacity(0.3);
                });
                Jimp.read(picture)
                .then(hello => {
                  //hello.pixelate( 171, 208, 400, 1 )
                  return hello
                    .mask(circle2, resultHolder[i].x0, resultHolder[i].y0)
                    .write('hello-small-bw'+i+'.jpg')
                })
            })
            .catch(err => {
              console.error(err);
            });
        }

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