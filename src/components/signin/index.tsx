import React, { useState } from "react";
import { Button, TouchableOpacity } from "react-native";
import { 
SignInContainer, EmailInput, PasswordInput, TextSignIn, SignInForm, SignInButton,
SecondaryText, PrimaryText, SignUpButton } from "./styles";

export default function SignIn ( {  }){
    return (
        <SignInContainer>
            <SignInForm>

            <PrimaryText>
                E-mail ou celular
            </PrimaryText>
            <EmailInput/>

            <PrimaryText>
                Senha
            </PrimaryText>
            <PasswordInput/>

            <SecondaryText>
                Esqueci a senha
            </SecondaryText>

            <SignInButton>
                <TextSignIn>
                    Entrar
                </TextSignIn>
            </SignInButton>
            
            <SignUpButton>
                <TextSignIn>
                    Cadastre-se
                </TextSignIn>
            </SignUpButton>

            </SignInForm>
        </SignInContainer>
    )
}

