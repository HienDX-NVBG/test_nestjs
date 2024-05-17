import { Body, Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/global/models/product.model";

@Controller("products")
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    getProduct(): ResponseData<Product[]> {
        try {
            return new ResponseData<Product[]>(this.productService.getProduct(), HttpStatus.Success, HttpMessage.Success);
        } catch {
            return new ResponseData<Product[]>(null, HttpStatus.Error, HttpMessage.Error);
        }
    }

    @Post()
    createProduct(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.createProduct(), HttpStatus.Success, HttpMessage.Success);
        } catch {
            return new ResponseData<string>(null, HttpStatus.Error, HttpMessage.Error);
        }
    }

    @Get('/:id')
    detailProduct(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.detailProduct(), HttpStatus.Success, HttpMessage.Success);
        } catch {
            return new ResponseData<string>(null, HttpStatus.Error, HttpMessage.Error);
        }
    }

    @Put('/:id')
    updateProduct(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.updateProduct(), HttpStatus.Success, HttpMessage.Success);
        } catch {
            return new ResponseData<string>(null, HttpStatus.Error, HttpMessage.Error);
        }
    }

    @Delete("/:id")
    deleteProduct(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.deleteProduct(), HttpStatus.Success, HttpMessage.Success);
        } catch {
            return new ResponseData<string>(null, HttpStatus.Error, HttpMessage.Error);
        }
    }
}
