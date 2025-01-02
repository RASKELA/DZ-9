// Task 5
const users = [
    { name: "Maria", email: "maria@example.com", age: 25 },
    { name: "Alex", email: "alex@example.com", age: 28 },
    { name: "Irene", email: "irene@example.com", age: 22 }
];

for (const user of users) {
    const { name, email, age } = user;
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
