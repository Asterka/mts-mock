import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react'

export default function Document({number, clientName, issueDate, issueStatus}) {
    return (
            <div className="document">
                <h2 className="number">{number}</h2>
                <h2 className="client_name">{clientName}</h2>
                <h2 className="issue_date">{issueDate}</h2>
                <h2 className="issue_status" style={{color: issueStatus==="Подписан"?"#00C19B":"#FA8A64"}}>{issueStatus}</h2>
                <div className="show_more">
                <MoreVertIcon />
                </div>
            </div>
    )
}