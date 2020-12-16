import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react'
import Modal from 'react-awesome-modal';

function openModal(setOpenedModal) {
    setOpenedModal(true);
}

function closeModal(setOpenedModal) {
    setOpenedModal(false);
}

export default function Document({number, clientName, issueDate, issueStatus, openedModal, setOpenedModal}) {
    return (
            
            <tr>
                <td className="number1"><div className="align-vertically">{number}</div></td>
                <td className="client_name"><div className="align-vertically">{clientName}</div></td>
                <td className="issue_date"><div className="align-vertically">{issueDate}</div></td>
                <td className="issue_status" style={{color: issueStatus==="Подписан"?"#00C19B":"#FA8A64"}}><div className="align-vertically">{issueStatus}</div></td>
                <td className="show_more"><div className="align-vertically">
                <MoreVertIcon onClick={openedModal===true?()=>{closeModal(setOpenedModal)}:()=>{openModal(setOpenedModal)}}/></div>
                </td>
            </tr>
    )
}