import instance from "./instance";

const getAll = () => instance.get('/products')
const remove = (id) => instance.delete(`/products/${id}`)
const add = (product) => instance.post('/products', product)
const update = (product) => instance.put(`/products/${product.id}`, product)
const signup = (user) => {  return instance.post(`/users`, user)}

export { add, getAll, remove, update,signup}