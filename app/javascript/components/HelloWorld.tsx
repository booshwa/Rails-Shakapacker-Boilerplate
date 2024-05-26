import React from "react"

interface Props {
  greeting: string;
}

const HelloWorld = ({greeting}: Props) => {
  return (
    <React.Fragment>
      Greeting: {greeting}
    </React.Fragment>
  )
}
export default HelloWorld

