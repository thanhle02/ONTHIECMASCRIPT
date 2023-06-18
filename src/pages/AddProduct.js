
import { router, useEffect } from "../lib"
import { add } from "../api/products"

const AddProduct = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const newProductList = {
                "name": document.querySelector("#name").value,
                "price": document.querySelector("#price").value,
                "image": document.querySelector("#image").value,
            }
            add(newProductList).then(() => {
                router.navigate('/')
                alert("Thêm thành công")
            }
            )
        })
    })


    return /*html */`
        <form id="add-form">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" id="name" required>
            <label class="form-label">Price</label>
            <input type="text" class="form-control" id="price" required>
            <label class="form-label">Image</label>
            <input type="text" class="form-control" id="image" required>
            <button class="btn btn-primary mt-3">Add Product</button>
        </form>
    `
}

export default AddProduct;