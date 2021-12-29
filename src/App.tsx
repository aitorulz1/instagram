import React from 'react';
import Card from './components/Card'
import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'
import Title from './components/Title'
import Link from './components/Link'

import './App.css';

function App() {
  return (
  <div>
    <Container>
      <Card>
        <Title>Iniciar Sesión</Title>
        <Input label='Correo' placeholder='Correo' />
        <Input label='Contraseña'  placeholder='Contraseña' />
        <Button block={true}>Enviar</Button>
        <Link >Ir al Registro</Link>
      </Card>
    </Container>
  </div>
  );
}

export default App;
