import { useState } from "react"
export const UseForm = (initialForm={}) => {

    const [formulario, setformulario] = useState(initialForm)
    const onInputChange= ({target})=>{
    const {name,value}= target
    setformulario({
        ...formulario,
        [name]: value
    })
}

  return {
    ...formulario,
    formulario,
    onInputChange
  }
   
}
