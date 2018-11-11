import React from 'react'

const RedLight = ({ direction }) => {
  switch(direction){
    case 'stop':
      return <div className="redOn"/>
    case 'go':
    case 'yield':
      return <div className="off"/>
  }
}

export default RedLight
