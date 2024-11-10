
interface BaseObject {
    id: number;
}
interface User extends BaseObject {
    name: string;
    email: string;
}

interface Product extends BaseObject {
    name: string;
    price: number;
}

interface Order extends BaseObject {
    productId: number;
    userId: number;
    quantity: number;
}


function printData<T extends BaseObject>(obj: T): void {
    console.log(`ID: ${obj.id}`);
    
    for (const key in obj) {
        if (key !== 'id') {
            console.log(`${key}: ${(obj as any)[key]}`);
        }
    }
}
const user: User = { id: 1, name: "John Doe", email: "john@example.com" };
const product: Product = {
    id: 2, name: "Laptop", price: 999.99,
    category: ""
};
const order: Order = { id: 3, productId: 2, userId: 1, quantity: 3 };

printData(user);  
printData(product);  
printData(order);  

