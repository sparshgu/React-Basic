import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {

  const users = [
    {img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Satisfied'
    },
    {img:'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Underserved'
    },
    {img:'https://images.unsplash.com/photo-1633605434484-8b2670ade899?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App