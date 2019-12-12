import React from "react";
import User from './User';
import {UserList as UserListStyled} from './Users.styled'


export default function UserList(props) {
    const renderUsers = (users) => {
        return users.map(user => {
            return <User key={user.login} user={user}/>
        });
    };    

    return (<UserListStyled>
        {props.users && renderUsers( props.users)}
    </UserListStyled>);
}