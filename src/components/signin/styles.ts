import styled from 'styled-components/native'

export const SignInContainer = styled.View`
    width: 70%;
    height: 50%;
    border-radius: 15;
    background-color: #505b6b;
    align-items: center;
    justify-content: center;
`;

export const EmailInput = styled.TextInput`
    width: 90%;
    margin-bottom: 20px;
    height: 30px;
    border-radius: 5px;
    background-color: white;
`;

export const PasswordInput = styled.TextInput`
    width: 90%;
    height: 30px;
    border-radius: 5px;
    background-color: white;
`;

export const SignInButton = styled.TouchableOpacity`
    width: 90%;
    height: 30px;
`