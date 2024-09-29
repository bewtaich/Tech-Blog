const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/');
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/');
  }
  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect('/login');
  }
  res.render('dashboard', { logged_in: req.session.logged_in });
});
module.exports = router;
