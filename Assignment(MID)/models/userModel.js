const db 		= require('./db');


module.exports= {
	validate: function(user, callback){	
		var sql = "SELECT * FROM `user` WHERE email='"+user.email+"' AND password='"+user.password+"'";
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
		var sql = "SELECT * FROM `user` WHERE email='"+email+"'";
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
		var sql = "select * from user where user_id='"+user_id+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},


}