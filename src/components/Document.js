import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

function openModal(token, setOpenedModal, setUrl, number) {
    fetch(`http://3.23.57.97:8000/documents/1092349/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
          }
        })
        .then(json => {
            //Fix this
            setUrl(`http://3.23.57.97:8000/media/${"science.pdf"}`);
            setOpenedModal(true);
        })
        .catch(
        (error)=>{
            console.log(error);
        }
        );
    
}

function closeModal(setOpenedModal) {
    setOpenedModal(false);
}




export default function Document({number, clientName, issueDate, issueStatus, openedModal, setOpenedModal, setUrl, token}) {
    return (
            
            <tr>
                <td className="number1"><div className="align-vertically">{number}</div></td>
                <td className="client_name"><div className="align-vertically">{clientName}</div></td>
                <td className="issue_date"><div className="align-vertically">{issueDate}</div></td>
                <td className="issue_status" ><div className={`align-vertically ${issueStatus==="Подписан"?"is-signed":"is-not-signed"}`}>{issueStatus}</div></td>
                <td className="show_more"><div className="align-vertically">
                <MoreVertIcon onClick={openedModal===true?()=>{closeModal(setOpenedModal)}:()=>{openModal(token, setOpenedModal, setUrl, number)}}/></div>
                </td>
            </tr>
    )
}