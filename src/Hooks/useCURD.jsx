import { useContext } from 'react'
import { CURDContext } from '../Context/AllContext'

function useCURD(){
  return  useContext(CURDContext)
}

export default useCURD