import { useEffect, useState } from "react"

const useHome = () => {
    // states
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')


    // listener to get products
    useEffect(() => {
      getAllProducts()
    }, [])
    
    // listener to get categories
    useEffect(() => {
      getAllCategories()
    }, [])


    // getAllProducts
    const getAllProducts = async ()=> {
        try {
            const res= await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
            console.log({res})
        } catch (error) {
            console.log(error?.message)
        }
    }


    // getAllCategories
    const getAllCategories = async ()=> {
        try {
            const categoriesRes= await fetch('https://api.escuelajs.co/api/v1/categories')
            console.log({categoriesRes})
        } catch (error) {
            console.log(error?.message)
        }
    }
    

    // returning all
  return {
    // states
    products, categories,
    selectedCategory, setSelectedCategory
  }
}

export default useHome