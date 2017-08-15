var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var articles = {
                    article1 :
                    {
                        title:'Article One | My Web App',
                        heading:'ARTICLE1',
                        content: `
                                            Hello whoever you are. Know this. "Now is all there is!"
                                              Welcome to article-1.
                                          
                                 `
                    },

                    article2 : 
                    {
                        title:'Article Two | My Web App',
                        heading :'ARTICLE2',
                        content: `
                                            Hello whoever you are. Know this. "Now is all there is!"
                                              Welcome to article-2.
                                          
                                 `
                    }

};


function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
        var htmlTemplate = `
            <!doctype html>
            <html>
            <head>
                  <title>
                             ${title}  
                  
                  </title>
                
                  <meta name="viewport" contetn="width=device-width,initial-scale=1" />
                  <link href="style.css" rel="stylesheet"/>
            
            </head>
            <body>
             <div class="container">
             
             <h3>
                    ${heading}
             </h3>
                 <p>
                    ${content}
                 </p>
             </div> 
            </body>
            </html>
            
            `;
            return htmlTemplate;
}


app.get('/:articleSelect', function (req, res) {
    var articleSelect = req.params.articleSelect;
  res.send(createTemplate(articles[articleSelect]));
});






// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
