import { configureStore } from '@reduxjs/toolkit'
import Slices from './Slices/Slices'

export const store= configureStore({
  reducer: {
    SlicesData:Slices,
  }
})