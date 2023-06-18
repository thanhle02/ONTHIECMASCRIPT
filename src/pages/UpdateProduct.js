import { router, useEffect, useState } from "../lib"
import { update } from "../api/products"

const UpdateProduct = ({ id }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        updateForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const newProductList = {
                "id": id,
                "name": document.querySelector("#name").value,
                "price": document.querySelector("#price").value,
                "image": document.querySelector("#image").value,
            }
            update(newProductList).then(() => {
                router.navigate('/')
                alert("Cập nhật thành công")
            })
        })
    })

    return /*html */`
        <form id="update-form">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" id="name" value="${products.name}" required>
            <label class="form-label">Price</label>
            <input type="text" class="form-control" id="price" value="${products.price}" required>
            <label class="form-label">Image</label>
            <input type="text" class="form-control" id="image" value="${products.image}" required>
            <button class="btn btn-primary mt-3">Update Product</button>
        </form>
    `
}

export default UpdateProduct;