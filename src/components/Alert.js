import React from 'react';

export default function Alert(props) {

    const capatalize = (word) => {
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
            props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">
                <strong>{props.alert.type==="info"?"":`${capatalize(props.alert.type)}:`}</strong> {props.alert.msg}
            </div>
    );
}

// props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">
// ? This means that first using JS we check if alert exists and if it exists then we display the alert
// ? If props.alert=null then automatically the next statement does not run so not alert is displayed