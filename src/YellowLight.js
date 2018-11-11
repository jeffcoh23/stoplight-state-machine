import React from 'react'

const YellowLight = ({ direction }) => {
  switch(direction){
    case 'yield':
      return <div className="yellowOn"/>
    case 'stop':
    case 'go':
      return <div className="off"/>
  }
}

export default YellowLight
