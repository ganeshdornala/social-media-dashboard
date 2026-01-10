import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { followUser } from "../store/index.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import ToDoList from "../components/ToDoList.jsx";

export default function Profile(){
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    useEffect(()=>{},[])
    return(
        <div className="p-4">
            <h2>Profile</h2>
            <ToDoList/>
            <h3>Users to Follow</h3>
            <div className="grid grid-cols-2 gap-4">
                {users.map((user)=>(
                    <div key={user.id}>
                        <ProfileCard user={user}/>
                        <button
                            onClick={() => dispatch(followUser(user.id))}
                            className={`p-1 text-white ${
                            user.followed ? 'bg-gray-500' : 'bg-blue-500'
                            }`}
                        >
                            {user.followed ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}