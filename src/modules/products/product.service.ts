import { Injectable } from "@nestjs/common";
import { Product } from "src/global/models/product.model";

@Injectable()
export class ProductService {

    private products: Product[] = [
        {
            id: 1,
            categoryId: 2,
            price: 80000,
            productName: "Product name 1"
        },
        {
            id: 2,
            categoryId: 2,
            price: 200000,
            productName: "Product name 2"
        },
    ];

    getProduct(): Product[] {
        return this.products;
    }
    createProduct(): string {
        return 'POST PRODUCT';
    }
    detailProduct(): string {
        return 'DETAIL PRODUCT';
    }
    updateProduct(): string {
        return 'UPDATE PRODUCT'

    }
    deleteProduct(): string {
        return "DELETE PRODUCT"
    }
}