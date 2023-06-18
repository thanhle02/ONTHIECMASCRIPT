

import { useEffect, useState } from "../lib";
import { getAll, remove } from "../api/products";
import axios from "axios";
const ProductManagement = () => {
    const [products, setProducts] = useState([])

    useEffect(() => { getAll().then(({ data }) => setProducts(data))  }, [])

    useEffect(() => {
        const btnRemove = document.querySelectorAll(".btn-remove")
        for (let btn of btnRemove) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                if (confirm("Bạn có muốn xóa không?")) {
                    remove(id).then(() => {
                        const newProductList = products.filter((products) => products.id != id)
                        setProducts(newProductList)
                        alert("Sản phẩm đã xóa")
                    })
                }
            })
        }
    })

    return /*html */`
    <a href="/signin"><button class="btn btn-primary">signin</button></a>
    <a href="/signup"><button class="btn btn-primary">Signup</button></a>
    

        <a href="/add"><button class="btn btn-primary">Add Product</button></a>
        <table class="table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${products.map((value, index) => {
        return /*html */ `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${value.name}</td>
                            <td>${value.price}</td>
                            <td><img src="${value.image}"></td>
                            <td>
                                <button class="btn btn-danger btn-remove" data-id="${value.id}">Delete</button>
                                <a href="/update/${value.id}"><button class="btn btn-secondary">Update</button></a>
                            </td>
                        </tr>
                    `
    })}
            </tbody>
        </table>
    `
}

export default ProductManagement;