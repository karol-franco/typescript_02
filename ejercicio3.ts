// Definición de la interfaz Product
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

interface Inventory {
    products: Product[];


    addProduct: (product: Product) => void;

    findProduct: (id: number) => Product | undefined;
}

const inventory: Inventory = {
    products: [],

    addProduct(product: Product) {
        this.products.push(product);
        console.log(`Producto añadido: ${product.name}`);
    },

    findProduct(id: number) {
        return this.products.find(product => product.id === id);
    }
};
const product1: Product = { id: 1, name: "Laptop", price: 999.99, category: "Electrónica" };
const product2: Product = { id: 2, name: "Smartphone", price: 599.99, category: "Electrónica" };

inventory.addProduct(product1);
inventory.addProduct(product2);

const foundProduct = inventory.findProduct(2);
console.log(foundProduct ? `Producto encontrado: ${foundProduct.name}` : "Producto no encontrado");
