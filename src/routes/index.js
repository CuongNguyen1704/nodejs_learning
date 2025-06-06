const newsRoute = require('./news');
const siteRoute = require('./site');
const courseRoute = require('./courses');
const meRoute = require('./me');

function route(app) {
  app.use('/news', newsRoute);
  app.use('/', siteRoute);
  app.use('/courses',courseRoute);
  app.use('/me',meRoute);
}

module.exports = route;
