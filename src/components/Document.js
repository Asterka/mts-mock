import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

function openModal(token, issueStatus, setOpenedModal, setUrl, number, setChosenDoc) {
    setChosenDoc({"number": number, 'issueStatus': issueStatus});
    console.log("Number: " + number);
    setOpenedModal(true);
    
    if(issueStatus==="Подписан"){
        console.log("Получаю адрес документа в базе");
        //Get the signed link here
        fetch(`http://3.23.57.97:8000/documents/${number}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            }
            })
            .then(res => res.json())
            .then(json => {
                //TODO, add fetching only the needed document
                console.log(json);
                setUrl(`http://3.23.57.97:8000/media/${json.uri}`);
                
            })
            .catch(
            (error)=>{
                console.log(error);
            }
            )
    }
    
}

function closeModal(setOpenedModal, setUrl,setChosenDoc) {
    setOpenedModal(false);
    setUrl(`http://3.23.57.97:8000/media/default.pdf`);
    setChosenDoc({"number": "0", 'issueStatus': "-"});
}




export default function Document({number, clientName, issueDate, issueStatus, openedModal, setOpenedModal, setUrl, token, setChosenDoc}) {
    return (
            
            <tr>
                <td className="number1"><div className="align-vertically">{number}</div></td>
                <td className="client_name"><div className="align-vertically">{clientName}</div></td>
                <td className="issue_date"><div className="align-vertically">{issueDate}</div></td>
                <td className="issue_status" ><div className={`align-vertically ${issueStatus==="Подписан"?"is-signed":"is-not-signed"}`}>{issueStatus}</div></td>
                <td className="show_more">
                    <div className="align-vertically">    
                        <div className="dropdown is-hoverable">
                            <div className="dropdown-trigger">
                                <MoreVertIcon aria-haspopup="true" aria-controls="dropdown-menu2" onClick={openedModal===true?()=>{closeModal(setOpenedModal, setUrl, setChosenDoc)}:()=>{openModal(token, issueStatus, setOpenedModal, setUrl, number, setChosenDoc)}}/>
                            </div>

                            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                                <div className="dropdown-content">
                                    <div className="dropdown-item">
                                        <div className="menu">
                                            <p className="menu-label">
                                                Log out
                                            </p>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
    )
}