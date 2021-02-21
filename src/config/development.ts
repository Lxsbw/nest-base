/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 00:50:40
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-02-22 01:04:04
 */
export default {
  listen: {
    path: '',
    // 端口
    port: parseInt(process.env.PORT, 10) || 3002,
    hostname: '127.0.0.1'
  },
  // 是否开启swagger
  enableSwagger: true,
  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: '121.37.188.31',
    port: 6606,
    username: 'root',
    password: 'Admin@123',
    database: 'typeorm_init',
    // timezone: 'UTC',
    // charset: 'utf8mb4',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false,
    logging: true
  }
};
