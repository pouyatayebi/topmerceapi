module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa6f22539f3aff935979321278eeac47'),
  },
});
