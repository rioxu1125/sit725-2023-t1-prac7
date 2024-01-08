const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/cat';
let cat = {paht:'',title:''}


describe('test GET CAT', function(){
    it('Get All the Cats', function(done){
        request(url, function(a,b,c){
            let responseObj = JSON.parse(c);
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });
});


describe('test POST CAT', function(){
    it('post cats', function(done){
        let testCat = { path: 'images/kitten-4.jpg', title: 'Test Post Cat' };
        request.post({url: url, form: testCat}, function(error, response, body){
            expect(response.statusCode).to.equal(200); 
            let responseObj = JSON.parse(body);
            done();
        });
    });
});



describe('test DELETE CAT', function(){
    it('delete a cat', function(done){
        let catId = '657282b671596865478b3e72'; 
        request.delete({url: `${url}/${catId}`}, function(error, response, body){
            expect(response.statusCode).to.equal(200); 
            done();
        });
    });
});


