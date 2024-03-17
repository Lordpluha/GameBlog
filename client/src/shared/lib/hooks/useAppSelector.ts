import { type TypedUseSelectorHook, useSelector } from 'react-redux'

import { type RootState } from '@store/index'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
