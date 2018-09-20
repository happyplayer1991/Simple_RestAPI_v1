module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
	  name: {
			type: Sequelize.STRING
	  },
	  surname: {
			type: Sequelize.STRING
		},
		birthday: {
			type: Sequelize.DATE
		},
	  info: {
		  type: Sequelize.STRING
	  }
	});
	
	return User;
}