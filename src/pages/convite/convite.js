import React from "react";
import "./convite.scss";

import Form, { GroupItem, RequiredRule, SimpleItem, ButtonItem } from "devextreme-react/form";
import { FileUploader } from "devextreme-react";

const ConviteFornecedorPage = () => {
  const convidarOpcoes = {
    text: "Convidar",
    icon: "arrowright",
  };
  const exemploOpcoes = {
    text: "Exemplo",
    icon: "download",
  };
  const importarOpcoes = {
    text: "Importar",
    icon: "upload",
  };



  return (
    <React.Fragment>
      <div className="content-block">
      <div className={"dx-card responsive-paddings"}>
        <h2 className={"content-block"}>Convidar fornecedor</h2>
        <Form labelMode="floating" className={"form-empresa"}>
          <GroupItem colCount={2}>
            <SimpleItem editorType={"dxTextBox"} label={{ text: "CPF/CNPJ " }} >
              <RequiredRule message="Este campo é obrigatorio" />
            </SimpleItem>
            <SimpleItem
              editorType={"dxTextBox"}
              label={{ text: "Nome do(a) vendedor(a) " }} >
              <RequiredRule message="Este campo é obrigatorio" />
            </SimpleItem>
            <SimpleItem
              editorType={"dxTextBox"}
              label={{ text: "E-mail" }} >
              <RequiredRule message="Este campo é obrigatorio" />
            </SimpleItem>
            <SimpleItem
              editorType={"dxTextBox"}
              label={{ text: "Telefone " }} >
            </SimpleItem>
          </GroupItem>
          <GroupItem>
            <ButtonItem
              buttonOptions={convidarOpcoes}
              horizontalAlignment={"right"}
            />
          </GroupItem>
        </Form>
        <h2>Convite em lote</h2>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
        <FileUploader
            selectButtonText="Selecione planilha"
            labelText=""
            accept="image/*"
            uploadMode="useForm"
            multiple={true}
            width={250}
          />
         
          <Form width={750}>
            <GroupItem colCount={2}>

              <ButtonItem
                buttonOptions={exemploOpcoes}
                horizontalAlignment={"right"}
              />
              <ButtonItem
                buttonOptions={importarOpcoes}
                horizontalAlignment={"right"}
              />
            </GroupItem>

          </Form>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default ConviteFornecedorPage;
