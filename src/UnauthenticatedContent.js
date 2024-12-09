import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SingleCard } from "./layouts";
import {
  LoginForm,
  ResetPasswordForm,
  ChangePasswordForm,
  CreateAccountForm,
} from "./components";

import LogoMetamina from "./assets/logo/logo2.jpg"


export default function UnauthenticatedContent() {
  return (
    <Switch>
      <Route exact path="/login">
        <SingleCard>
          <div style={{textAlign: "center", margin: "0rem 0 2rem 0"}}>
            <img alt={"Logo Metamina"} src={LogoMetamina} width={"150rem"} />
          </div>
          <LoginForm />
        </SingleCard>
      </Route>
      <Route exact path="/create-account">
        <SingleCard title="Cadastrar">
          <CreateAccountForm />
        </SingleCard>
      </Route>
      <Route exact path="/reset-password">
        <SingleCard
          title="Resetar senha"
          description="Por favor, coloque o email para que seja enviado uma senha."
        >
          <ResetPasswordForm />
        </SingleCard>
      </Route>
      <Route exact path="/change-password/:recoveryCode">
        <SingleCard title="Mudar senha">
          <ChangePasswordForm />
        </SingleCard>
      </Route>
      <Redirect to={"/login"} />
    </Switch>
  );
}
