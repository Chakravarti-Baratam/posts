import React from 'react';

function CompanyView(props) {
    return <div>Company:
        <div>Name: {props.name}</div>
        <div>{props.catchPhrase}</div>
        <div>{props.bs}</div>
    </div>;
}
  
export default CompanyView;