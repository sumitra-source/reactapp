import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import UserCard from './components/UserCard';
import profile1 from './image/1.jfif';
import profile2 from './image/2.jpg';
import profile3 from './image/3.jpg';


const App = () => {
    return (
        <div className="ui comments">
            <UserCard>
                <div>Hello my name is Sumitra Shrestha. I am from Nepal.</div>
            </UserCard>
            <UserCard>
                <Comment name="Sumitra" date="Today at 5:00PM" text="Fabulous!" picture={profile1} />
            </UserCard>
            <UserCard>
                <Comment name="Nabina" date="Today at 6:00PM" text="It is amazing!" picture={profile2} />
            </UserCard>
            <UserCard>
                <Comment name="Anusha" date="Today at 7:00PM" text="It is superb!" picture={profile3} />
            </UserCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));