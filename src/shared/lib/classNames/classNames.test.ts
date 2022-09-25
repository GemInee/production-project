import { classNames } from './classNames';

describe('classNames', () => {
    test('whith only first param', () => {
        expect(classNames('someClass')).toBe('someClass ');
    });

    test('with additional classes', () => {
        const expected = 'someClass class1 class2 ';
        expect(classNames(
            'someClass',
            {},
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hover,selected';
        expect(classNames(
            'someClass',
            { hover: true, selected: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 class2 hover';
        expect(classNames(
            'someClass',
            { hover: true, selected: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods undef', () => {
        const expected = 'someClass class1 class2 hover';
        expect(classNames(
            'someClass',
            { hover: true, selected: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
