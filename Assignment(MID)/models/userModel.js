const db 		= require('./db');


module.exports= {
	validate: function(user, callback){	
		var sql = "SELECT * FROM `user` WHERE userEmail='"+user.email+"' AND userPassword='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	insert:(user,callback)=>{
		
		var sql="INSERT INTO `user`(`userName`,`userType`,`userAddress`,`userEmail`,`userPassword`) VALUES ('"+user.name+"','"+user.userType+"','"+user.address+"','"+user.email+"','"+user.password+"')";
        db.execute(sql,(status)=>{
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
    },
	
	
	getByEmail: function(email, callback){
		var sql = "SELECT * FROM `user` WHERE userEmail ='"+email+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},

	getAllUser: function(callback){
		var sql = "select * from user";
		db.getResults(sql, function(results){
			callback(results);
		});
	},

	getById: function(user_id, callback){
		var sql = "select * from user where userId='"+user_id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},

	delete: function(id, callback){
		var sql = "DELETE FROM `user` WHERE userId='"+id+"';";
		db.execute(sql, function(status){
			callback(status);
		});
	},

	update: function(user, callback){
		console.log(user);
		var sql ="UPDATE `user` SET `userName` = '"+user.name+"',`userType` = '"+user.user_type+"',`userAddress` = '"+user.address+"',`userEmail` = '"+user.email+"' WHERE userId = '"+user.user_id+"'";
		db.execute(sql, (result) => {
			callback(result);
		});
	},


}