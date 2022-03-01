import React from 'react'
import Comment from './components/Comment'
import UserCard from './components/UserCard'

export const App = () => {
  return (
    <div className="ui comments">
        <UserCard isPost>
            <div >Sumitra Shrestha</div>
            <div>Hello ,I am Sumitra Shrestha. I am from Nepal.</div>
        
        </UserCard>
        <UserCard>
            <Comment name="Sumitra" date="today at 6:00pm" text="nice" picture="1.png"/>
        </UserCard>

        <UserCard> <Comment name="Vicrant" date="today at 4:00pm" text="good" picture="2.jpg"/></UserCard>

        <UserCard>< Comment name="Nabina" date="today at 3:00pm" text="fabulous" picture="3.jpg"/></UserCard>
   </div>
  )
}
export default App