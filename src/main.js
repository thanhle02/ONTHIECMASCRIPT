
import 'bootstrap/dist/css/bootstrap.min.css'
import { router, render } from './lib'
import ProductManagement from './pages/ProductManagement'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'
import Signup from './pages/Signup'
const app = document.querySelector("#app")

router.on('/', () => render(ProductManagement, app))
router.on('/add', () => render(AddProduct, app))
router.on('/update/:id', ({ data }) => render(() => UpdateProduct(data), app))
router.on('/login', () => render(Signin, app))
router.on('/signup', () => render(Signup, app))


router.resolve()