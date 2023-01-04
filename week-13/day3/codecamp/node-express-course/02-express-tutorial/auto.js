const auto = (req,res,next) => {
    const {user} = req.query;
    if (user === 'john') {
        req.user = {name:'john', id:3}
        //http://localhost:5010/?user=john
        next()
    } else {
        res.status(401).send('unautorized')
    }
    console.log('autorize');
    next()
}

module.exports = auto;