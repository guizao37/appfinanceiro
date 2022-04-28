import React, { useState } from "react";
import { SignInContainer, EmailInput, PasswordInput } from "./styles";

export default function SignIn (){
    return (
        <SignInContainer>
            <EmailInput placeholder="E-mail"/>
            <PasswordInput placeholder="Senha"/>
        </SignInContainer>
    )
}

