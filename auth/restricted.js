module.exports = (req, res, next) => {
    if(req.session && req.session.username){
      next();
    } else {
      res.status(401).json({message: 'you shall not pass!'});
    } 
};

// const bcrypt = require('bcryptjs');

// const Users = require('../users/user-model.js');

// module.exports = (req, res, next) => {
//     const { username, password } = req.body;
//     if (!username && !password) {
//         return res.status(401).json({message: "provide your credentials"})
//     }
//     if (!username) {
//         return res.status(401).json({message: "provide username"})
//     }
//     if (!password) {
//         return res.status(401).json({message: "provide password"})
//     }
//     if(username && password) {
//         Users.findUser({ username })
//         .first()
//         .then(user => {
            
//             if(user && bcrypt.compareSync(password, user.password)) {
//                 next();
//             } else {
//                 res.status(401).json({ message: 'You Shall Not Pass!' });
//             };
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({error: 'error login in'});
//         });
//     };
// };