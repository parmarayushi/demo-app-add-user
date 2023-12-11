import React from "react";

export default function UserList(props) {
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="mt-5">User List</h2>
            <ul className="bg-light p-3">
                {props.users.map((data) => {
                    return (
                        <li key={data.id} className="bg-white border p-2 mb-3">
                            {data.name} ({data.age} years old.)
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}