import { StateType } from '../types/types'

const setLocalStorage = (state: StateType) => {
  localStorage.setItem('state', JSON.stringify(state))
}

// export default setLocalStorage
