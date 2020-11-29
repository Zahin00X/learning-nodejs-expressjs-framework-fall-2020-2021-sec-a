const db 		= require('./db');


module.exports= {

insert:(book,callback)=>{
		
		var sql="INSERT INTO `book`(`bookName`,`bookType`,`bookAuthor`,`bookPrice`) VALUES ('"+book.name+"','"+book.book_type+"','"+book.author+"','"+book.price+"')";
        db.execute(sql,(status)=>{
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
    },
getAllBook: function(callback){
		var sql = "select * from book";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
getById: function(book_id, callback){
		var sql = "select * from book where bookId='"+book_id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	}

}