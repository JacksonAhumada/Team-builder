const Manager = require('../lib/manager');
const manager = new Manager('jackson', '01879', 'jackson@gmail.com', '1818');

test('if we get the values for manager', () => {
    expect(manager.name).toBe('jackson');
    expect(manager.id).toBe('01879');
    expect(manager.email).toBe('jackson@gmail.com');
    expect(manager.officeNumber).toBe('1818');
});

test('if getName method works', () => {
    expect(manager.getName).toBe('jackson');
});

test('if getId method works', () => {
    expect(manager.getId).toBe('01879');
});

test('if getEmail method works', () => {
    expect(manager.getEmail).toBe('jackson@gmail.com');
});

test('if getOfficeNumber method works', () => {
    expect(manager.getOfficeNumber).toBe('1818');
});

test('if getRole method works', () => {
    expect(manager.getRole).toBe('Manager');
});




