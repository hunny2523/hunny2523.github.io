import React from 'react'

export default function Alert(props) {
    const capital=(text)=>
    {
        return text.charAt(0).toUpperCase()+text.toLowerCase().slice(1);
    }
    return (
        <div>
        {props.alerts &&
         <div>
            <div className={`alert alert-${props.alerts.Type} alert-dismissible fade show`} role="alert">
                <strong>{(props.alerts.Type)==="danger"?"Error":capital(props.alerts.Type)}</strong> : {props.alerts.msg}
            </div>
        </div>
        }
        </div>
    )
}
