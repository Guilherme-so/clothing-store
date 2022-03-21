import { createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../Utilities/Firebase/firebase'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})
  const value = { categoriesMap }

  useEffect(() => {
    const getCategory = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategory()
  }, [])

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
