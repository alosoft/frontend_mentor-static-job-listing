import React from 'react'
import clear from "../images/icon-remove.svg";

const Selection = ({ query, updateQuery }) => {
    return (
        <div className="job__listing__selection">
            <button className="selected">{query}</button>
            <img onClick={() => updateQuery(query)} src={clear} alt="clear" />
        </div>
    )
}

export default Selection
