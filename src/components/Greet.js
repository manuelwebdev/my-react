import React from "react";

// function Greet() {
//     return <h1>Hello Manuel</h1>
// }

const Greet = props => {
    const { name, heroName } = props
  return (
    <div>
      <h1>
        Hello {name} aka {heroName}
      </h1>
      {/* {children} */}
    </div>
  )
}
// export const Greet = () => <h1>Hello Manuel</h1>

export default Greet;
