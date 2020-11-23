import React from 'react'

export default function Document({number, clientName, issueDate, issueStatus}) {
    return (
            <div className="document">
                <h2 className="number">{number}</h2>
                <h2 className="client_name">{clientName}</h2>
                <h2 className="issue_date">{issueDate}</h2>
                <h2 className="issue_status">{issueStatus}</h2>
            </div>
    )
}