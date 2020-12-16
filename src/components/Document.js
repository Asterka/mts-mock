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
                <td className="number1">{number}</td>
                <td className="client_name">{clientName}</td>
                <td className="issue_date">{issueDate}</td>
                <td className="issue_status" style={{color: issueStatus==="Подписан"?"#00C19B":"#FA8A64"}}>{issueStatus}</td>
                <td className="show_more">
                <MoreVertIcon onClick={openedModal===true?()=>{closeModal(setOpenedModal)}:()=>{openModal(setOpenedModal)}}/>
                </td>
            </tr>
    )
}