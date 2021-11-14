import React from "react";

function UserInfoCard({ node }) {
    return (
        <div className="datacontainer">
            <div className="dataitem">Name : {node.originalName}</div>
        </div>
    );
}

export default UserInfoCard;