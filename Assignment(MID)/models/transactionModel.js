const db 		= require('./db');


module.exports= {

insert:(book,callback)=>{
		
		var sql="INSERT INTO `transaction`(`userId`,`bookId`,`quantity`,`amount`,`transactionType`) VALUES ('"+transaction.user_id+"','"+transaction.book_id+"','"+transaction.quantity+"','"+transaction.amount+"','"+transaction.type+"')";
        db.execute(sql,(status)=>{
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
    }


}