import { it, expect } from 'vitest';
import {add, subtract} from '../example';

it('should correctly add two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

it('should correctly subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
});
