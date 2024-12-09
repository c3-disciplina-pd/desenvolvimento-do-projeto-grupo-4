import React, { useState, useRef, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule,
} from "devextreme-react/form";
import LoadIndicator from "devextreme-react/load-indicator";
import notify from "devextreme/ui/notify";
import { useAuth } from "../../contexts/auth";

import "./login-form.scss";

export default function LoginForm() {
  const history = useHistory();
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const formData = useRef({});

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = formData.current;
      setLoading(true);

      const result = await signIn(email, password);
      if (!result.isOk) {
        setLoading(false);
        notify(result.message, "error", 2000);
      }
    },
    [signIn]
  );

  const onCreateAccountClick = useCallback(() => {
    history.push("/create-account");
  }, [history]);

  return (
    <>
      <form className={"login-form"} onSubmit={onSubmit}>
        <Form formData={formData.current} disabled={loading}>
          <Item
            dataField={"email"}
            editorType={"dxTextBox"}
            editorOptions={emailEditorOptions}
          >
            <RequiredRule message="E-mail é obrigatório" />
            <EmailRule message="E-mail está invalido" />
            <Label visible={false} />
          </Item>
          <Item
            dataField={"password"}
            editorType={"dxTextBox"}
            editorOptions={passwordEditorOptions}
          >
            <RequiredRule message="Senha é obrigatória" />
            <Label visible={false} />
          </Item>
          <Item
            dataField={"rememberMe"}
            editorType={"dxCheckBox"}
            editorOptions={rememberMeEditorOptions}
          >
            <Label visible={false} />
          </Item>
          <ButtonItem className="button-login">
            <ButtonOptions
              width={"100%"}
              type={"default"}
              useSubmitBehavior={true}
            >
              <span className="dx-button-text">
                {loading ? (
                  <LoadIndicator
                    width={"24px"}
                    height={"24px"}
                    visible={true}
              
                  />
                ) : (
                  "Entrar"
                )}
              </span>
            </ButtonOptions>
          </ButtonItem>
          <Item>
            <div className={"link"}>
              <Link  to={"/reset-password"}>Esqueceu a senha?</Link>
            </div>
          </Item>
          <ButtonItem>
            <ButtonOptions
              text={"Create an account"}
              width={"100%"}
              onClick={onCreateAccountClick}
            />
          </ButtonItem>
        </Form>
      </form>
    </>
  );
}

const emailEditorOptions = {
  stylingMode: "filled",
  placeholder: "E-mail",
  mode: "email",
};
const passwordEditorOptions = {
  stylingMode: "filled",
  placeholder: "Senha",
  mode: "password",
};
const rememberMeEditorOptions = {
  text: "Lembrar",
  elementAttr: { class: "form-text" },
};
