module.exports = {
  type: 'mysql',
  host: '121.37.188.31',
  port: 6606,
  username: 'root',
  password: 'Admin@123',
  database: 'typeorm_init',
  migrationsTableName: 'Migrations_History',
  // namingStrategy: new SnakeNamingStrategy(),
  entities: ['src/models/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*{.ts,.js}']
};
