const Engineer = require('../lib/engineer');
const engineer = new Engineer('jackson', '01879', 'jackson@gmail.com', 'jacksonahumada');

test('if we get the values for engineer', () => {
    expect(engineer.name).toBe('jackson');
    expect(engineer.id).toBe('01879');
    expect(engineer.email).toBe('jackson@gmail.com');
    expect(engineer.gitHub).toBe('jacksonahumada');
});

test('if getName method works', () => {
    expect(engineer.getName).toBe('jackson');
});

test('if getId method works', () => {
    expect(engineer.getId).toBe('01879');
});

test('if getEmail method works', () => {
    expect(engineer.getEmail).toBe('jackson@gmail.com');
});

test('if getGitHub method works', () => {
    expect(engineer.getGitHub).toBe('jacksonahumada');
});

test('if getRole method works', () => {
    expect(engineer.getRole).toBe('Engineer');
});