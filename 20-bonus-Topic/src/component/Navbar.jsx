import React from 'react'

const Navbar = (props) => {

    console.log(props.theme)
  return (
    <div>
        <button onClick={() => props.setTheme(props.theme === "light" ? "dark" : "light")}>Change theme</button>
    </div>
  )
}

export default Navbar