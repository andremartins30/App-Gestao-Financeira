import React from 'react'
import * as C from "./styles"
import ResumeItem from '../Resumeitem'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign,} from "react-icons/fa";


export const Resume = ({income, expense, total}) => {
  return (
    <C.Container>
          <ResumeItem title="Receitas" Icon={FaRegArrowAltCircleUp} value={income}/>
          <ResumeItem title="Despesas" Icon={FaRegArrowAltCircleDown} value={expense} />
          <ResumeItem title="Saldo" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
}


export default Resume