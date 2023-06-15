import React from 'react'
import * as C from "./styles"
import ResumeItem from '../Resumeitem'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign,} from "react-icons/fa";


export const Resume = () => {
  return (
    <C.Container>
          <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000"/>
          <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000" />
          <ResumeItem title="Total" Icon={FaDollarSign} value="1000" />
    </C.Container>
  )
}


export default Resume