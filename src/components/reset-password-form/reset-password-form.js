import React, { useState, useRef, useCallback } from 'react';
import { Link, useHistory } from "react-router-dom";
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule
} from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';
import notify from 'devextreme/ui/notify';
import { resetPassword } from '../../api/auth';
import './reset-password-form.scss';

const notificationText = 'Enviamos um link de redefinição de senha. Cheque seu e-mail. ';

export default function ResetPasswordForm(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const formData = useRef({});

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const { email } = formData.current;
    setLoading(true);

    const result = await resetPassword(email);
    setLoading(false);

    if (result.isOk) {
      history.push('/login');
      notify(notificationText, 'success', 2500);
    } else {
      notify(result.message, 'error', 2000);
    }
  }, [history]);

  return (
    <form className={'reset-password-form'} onSubmit={onSubmit}>
      <Form formData={formData.current} disabled={loading}>
        <Item
          dataField={'email'}
          editorType={'dxTextBox'}
          editorOptions={emailEditorOptions}
        >
          <RequiredRule message="E-mail é obrigatório" />
          <EmailRule message="E-mail é invalido" />
          <Label visible={false} />
        </Item>
        <ButtonItem>
          <ButtonOptions
            elementAttr={submitButtonAttributes}
            width={'100%'}
            type={'default'}
            useSubmitBehavior={true}
          >
            <span className="dx-button-text">
              {
                loading
                  ? <LoadIndicator width={'24px'} height={'24px'} visible={true} />
                  : 'Resetar minha senha'
              }
            </span>
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className={'login-link'}>
            Retornar para o <Link to={'/login'}>Login</Link>
          </div>
        </Item>
      </Form>
    </form>
  );
}

const emailEditorOptions = { stylingMode: 'filled', placeholder: 'Email', mode: 'email' };
const submitButtonAttributes = { class: 'submit-button' };
