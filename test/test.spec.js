// 이 파일은 삭제 예정입니다.
import { sum } from './test.js'
import { describe, expect, test } from '@jest/globals';

describe('test', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
})
