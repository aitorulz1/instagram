import * as React from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Link from '../../components/Link'
import Center from '../../components/Center'

export default class Login extends React.Component {
    public render() {
        return(
            <Container>
                <Card>
                    <Title>Iniciar Sesión</Title>
                    <Input label='Correo' placeholder='Correo' />
                    <Input label='Contraseña'  placeholder='Contraseña' />
                    <Button block={true}>Enviar</Button>
                    <Center>
                    <Link >Ir al Registro</Link>
                    </Center>
                </Card>
            </Container>
        )
    }
}