/*
 * @Author: DM
 * @Date: 2022-01-14 13:28:25
 * @LastEditors: DM
 * @LastEditTime: 2022-01-14 13:40:57
 * @Descriptions:
 * @FilePath: /components/test/add.test.ts
 */

import { expect, test } from 'vitest';
import { add } from '../src/lib/add';

test('add()', () => {
  expect(add(3, 2)).toBe(5);
});
