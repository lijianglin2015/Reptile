/*var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var app = express();

superagent.get('https://cnodejs.org/').end(function (err, sres) {
      if (err) {
        return next(err);
      }
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });
      for(var attr in items){  
        console.log(attr+":\r\n"+"title:"+items[attr].title+"\r\n"+"href"+items[attr].href) 
      }

})
*/

