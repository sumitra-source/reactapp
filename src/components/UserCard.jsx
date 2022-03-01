import React from 'react'

export const UserCard = (props) => {
  return (
    <div className="ui card">
        <div className="content">
          
          <div className="description">{props.children} </div>
          </div>
        {!props.isPost&&
        <div className="ui button button">
            <i className="add icon"></i>
        </div>
}
    </div>
        
  )
}
export default UserCard
