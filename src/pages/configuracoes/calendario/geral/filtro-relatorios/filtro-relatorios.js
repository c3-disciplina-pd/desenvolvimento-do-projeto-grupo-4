import React from "react";
import Form, { GroupItem, SimpleItem } from 'devextreme-react/form';

const FiltroRelatoriosPage = () => {

    return (
        <React.Fragment>
            <div className={"dx-card responsive-paddings"}>
                <div className={"content-block"}>
                <Form labelMode="floating">
                        <GroupItem colCount={2}>
                            <SimpleItem editorType='dxDateBox' label={{text: 'Selecione o período, de :'}}/>
                            <SimpleItem editorType='dxDateBox' label={{text: 'até :'}}/>
                        </GroupItem>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FiltroRelatoriosPage;
