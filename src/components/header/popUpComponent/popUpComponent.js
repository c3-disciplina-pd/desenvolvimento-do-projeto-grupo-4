import React, { useState } from 'react';
import { Popup } from 'devextreme-react/popup'
import Button from 'devextreme-react/button';
import { useHistory } from 'react-router-dom';


export default function PopUpComponent({ title, icon, content }) {
    
    function togglePopup() {
        setPopupVisibility(!isPopupVisible);
    };
    
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const history = useHistory();
    
   


return(
    <>
    <Popup
          visible={isPopupVisible}
          hideOnOutsideClick={true}
          onHiding={togglePopup}
          showCloseButton={true}
          title={title}
          width='400'
          resizeEnabled={false}
          position="right top"
          contentRender={content}
        />
        <Button 
          icon={icon}
          onClick={togglePopup}
        />  
    </>
)
}