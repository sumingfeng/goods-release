import FormList from './comp/FormList.vue'
import SecBrand from './comp/secBrand.vue'
import SecCate from './comp/SecCate.vue'
import GoodsDes from './comp/GoodsDes.vue'
import SecCity from './comp/SecCity.vue'
export default [{
       name:"index",
        path: '/index',
        component: FormList
    },
    {
        path: '/secBrand',
        component: SecBrand
    },
    {
        path: '/secCate',
        component: SecCate
    },
    {
        path: '/GoodsDes',
        component: GoodsDes
    },
    {
        name:'city',
        path: '/SecCity',
        component: SecCity
    },
    {
        path: "/",
        redirect: '/index'
    },
    {
        path: "*",
        redirect: '/index'
    }
]