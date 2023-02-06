module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfeoitpa6gdma8h3ku4g-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_sh5z'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '8KsWM8WgsOoapo20YFS0DPhjsiz8zOJ6'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
