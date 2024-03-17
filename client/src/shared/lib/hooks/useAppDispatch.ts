import { useDispatch } from 'react-redux'

import { type AppDispatch } from '@store/index'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
