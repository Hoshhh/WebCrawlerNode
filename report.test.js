const { sortPages } = require("./report")
const { test, expect } = require("@jest/globals")

test('sortPages 2 pages', () => {
    const input = {
        'https://hosh.dev/halloween-hub': 1,
        'https://hosh.dev': 3 
    }
    const actual = sortPages(input)
    const expected = [
        ['https://hosh.dev', 3],
        ['https://hosh.dev/halloween-hub', 1]
    ]

    expect(actual).toEqual(expected)
})

test('sortPages 5 pages', () => {
    const input = {
        'https://hosh.dev/halloween-hub': 1,
        'https://hosh.dev': 10,
        'https://hosh.dev/devtasks': 2,
        'https://hosh.dev/renegade': 6,
        'https://hosh.dev/hello': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://hosh.dev', 10],
        ['https://hosh.dev/renegade', 6],
        ['https://hosh.dev/hello', 3],
        ['https://hosh.dev/devtasks', 2],
        ['https://hosh.dev/halloween-hub', 1]
    ]

    expect(actual).toEqual(expected)
})