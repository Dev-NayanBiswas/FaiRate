import { useContext } from "react"
import { AuthContext } from "../Context/AllContext"

function useAuth() {
  return useContext(AuthContext)
}

export default useAuth