const EMAIL_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const EMAIL_SONARCLOUD_REC = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const EMAIL_MDN = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

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
    const b = EMAIL_SONARCLOUD_REC.test(t.address);
    const c = EMAIL_MDN.test(t.address);

    results.push({
        address: t.address,
        expected: t.valid,
        'old RE': a,
        'SonarCloud RE': b,
        'MDN RE': c,
        'test pass': a === b && a === c && a === t.valid,
    });
});

console.table(results);
