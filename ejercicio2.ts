
interface User {
    id: number;
    name: string;
    email: string;
}

interface Admin extends User {
    role: string;
}

function printUserData(user: User | Admin): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    
    if ("role" in user) {
        console.log(`Role: ${user.role}`);
    }
}

const User: User = { id: 1, name: "Karol franco", email: "karol@example.com" };
const admin: Admin = { id: 2, name: "Duvier diego", email: "duvier.@gmail.com", role: "Administrator" };

printUserData(user); 
printUserData(admin); 


