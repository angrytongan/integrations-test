const EMAIL_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const EMAIL_NEW_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const tests = [
    { address: 'foo@example.com', valid: true },
    { address: '123@example.com', valid: true },
    { address: '123@123-.com', valid: true },

    { address: 'bar@', valid: false },
    { address: 'bar', valid: false },
    { address: '@example.com', valid: false },
    { address: '1@example', valid: false },
    { address: '-@foo.', valid: false },
    { address: 'foo@example,com', valid: false },
];

const results = [];

tests.forEach((t) => {
    const a = EMAIL_RE.test(t.address);
    const b = EMAIL_NEW_RE.test(t.address);

    results.push({
        expected: t.valid,
        'old RE': a,
        'new RE': b,
        'old RE match': a === t.valid,
        'new RE match': b === t.valid,
        'test pass': a === b && a === t.valid,
    });
});

console.table(results);
