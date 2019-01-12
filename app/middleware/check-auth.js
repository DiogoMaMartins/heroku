const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	try{
	const decoded = jwt.verify(req.body.token, "Fn!WkWUC4Z$h8L8#zvtJ}]g");
	req.userData = decoded;
	next();
	}catch (error) {
		return res.status(401).json({
			message: 'Auth failed'
		})
	}


};