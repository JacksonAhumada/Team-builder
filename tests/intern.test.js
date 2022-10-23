const Intern = require('../lib/intern');
const intern = new Intern('jackson', '01879', 'jackson@gmail.com', 'DU');

test('if we get the values for manager', () => {
    expect(intern.name).toBe('jackson');
    expect(intern.id).toBe('01879');
    expect(intern.email).toBe('jackson@gmail.com');
    expect(intern.school).toBe('DU');
});

test('if getName method works', () => {
    expect(intern.getName).toBe('jackson');
});

test('if getId method works', () => {
    expect(intern.getId).toBe('01879');
});

test('if getEmail method works', () => {
    expect(intern.getEmail).toBe('jackson@gmail.com');
});

test('if getSchool method works', () => {
    expect(intern.getSchool).toBe('DU');
});

test('if getRole method works', () => {
    expect(intern.getRole).toBe('Intern');
});