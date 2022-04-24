module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4c966230829051ff367013abdf005d6b'),
  },
});
