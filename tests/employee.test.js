const Employee = require('../lib/employee');
const employee = new Employee('jackson', '01879', 'jackson@gmail.com');

test('if we can get values for employee', () => {
    expect(employee.name).toBe('jackson');
    expect(employee.id).toBe('01879');
    expect(employee.email).toBe('jackson@gmail.com');
});

test('if we get employee name', () => {
    expect(employee.getName()).toBe('jackson');
});

test('if we get employees id', () => {
    expect(employee.getId()).toBe('01879');
});

test('if we get employees email', () => {
    expect(employee.getEmail()).toBe('jackson@gmail.com')
});

test('if we get the role', () => {
    expect(employee.getRole()).toBe('Employee')
});



