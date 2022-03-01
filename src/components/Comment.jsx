import React from 'react'

export const Comment = (props) => {
  return (
    <div>
        <div className="comment">
            <div className="avatar">
                <img src={props.picture} alt="profile"/>
            </div>
        
        <div className="content">
         <div className="author">{props.name}</div>
          <div className="metadata"><span className="date">{props.date}</span></div>
          <div className="text">{props.text}</div>
        </div>
        </div>
    </div>
  )
}
export default Comment
