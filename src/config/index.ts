/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 00:51:14
 * @Last Modified by:   zhixiong.fu
 * @Last Modified time: 2021-02-21 00:51:14
 */
import developmentConfig from './development';
import testConfig from './test';
import productionConfig from './production';

const configs = {
  development: developmentConfig,
  test: testConfig,
  production: productionConfig,
};
const env = process.env.NODE_ENV || 'development';

export default () => configs[env];
