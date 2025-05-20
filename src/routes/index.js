const newsRoute = require('./news');
const siteRoute = require('./site');
const courseRoute = require('./courses');

function route(app) {
  app.use('/news', newsRoute);
  app.use('/', siteRoute);
  app.use('/courses',courseRoute);
}

module.exports = route;
