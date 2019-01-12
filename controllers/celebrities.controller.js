const Celebrity = require('../models/celebrity.model')

module.exports.list = (req, res, next) => {
    Celebrity.find() 
        
    .then((celebrities) => res.render('celebrities/list', { celebrities }))
    

}

module.exports.create = (req, res, next) => {
res.render('celebrities/form')
}

module.exports.doCreate = (req, res, next) => {
    const celebrity = new Celebrity(req.body);
    celebrity.save()
        .then( celebrity => res.redirect('/celebrities'));
}

