import api from '../../../utils/api'

export async function getCategories() {
  return await api.get(`/categories`)
}
