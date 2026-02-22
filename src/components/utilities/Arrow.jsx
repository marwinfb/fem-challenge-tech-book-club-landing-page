import ArrowDown from "./ArrowDown"
import ArrowUp from "./ArrowUp"


const Arrow = ({ direction = 'down' }) => {
  return (
    direction === "down" ?  <ArrowDown /> : <ArrowUp />
  )
}

export default Arrow