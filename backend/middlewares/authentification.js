const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    //// Comparaison jeton envoyé par la requête avec notre jeton stocké dans les variabes d'env'
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId != userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    console.log("Erreur d'identification");
    res.status(401).json({
      error: new Error('Requête invalide')
    });
  }
};