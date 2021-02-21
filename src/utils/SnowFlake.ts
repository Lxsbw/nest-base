/*
 * @Author: zhixiong.fu
 * @Date: 2021-02-21 16:30:15
 * @Last Modified by:   zhixiong.fu
 * @Last Modified time: 2021-02-21 16:30:15
 */

import FlakeId = require('flake-idgen');
import intformat = require('biguint-format');
const flakeIdgen = new FlakeId({ epoch: 1300000000000 });
import * as _ from 'lodash';

export const GetId = () => _.toString(intformat(flakeIdgen.next(), 'dec'));
