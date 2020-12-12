import api from '../../../utils/api'

export const signUp = data => (
  api.post('/users/signup', data)
    .then(response => response)
    .catch(error => console.error(error))
)
