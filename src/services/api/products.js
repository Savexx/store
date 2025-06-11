import api from './axiosConfig'

export const getProducts = async params => {
  try {
    const response = await api.get('/products/category/mens-shirts', {
      params,
    })

    return response
  } catch (error) {
    console.log('Error fetching products info:', error)
    throw error
  }
}
