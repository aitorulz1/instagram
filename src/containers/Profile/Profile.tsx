import * as React from 'react'

import Navbar from '../../components/Navbar';
import Container from '../../components/Container'
import ProfileImg from '../../components/ProfileImg'
import Card from '../../components/Card'

const style = {
    container: {
        padding: '15px',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px',
        marginBottom: '10px'
    },
    button: {
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '5px'
    }
}

export default class Profile extends React.Component {
    public render() {
        return(
            <>
                <Navbar />
                <Container>
                    <div style={style.container}>
                        <div style={style.row}>
                            <ProfileImg />
                            <button style={style.button}>Agregar</button>
                        </div>
                    </div>
                    <div style={style.row}>                    
                        <Card><img src="http://placekitten.com/200/200" /></Card>
                        <Card><img src="http://placekitten.com/200/200" /></Card>
                        <Card><img src="http://placekitten.com/200/200" /></Card>
                    </div>
                    
                    <div style={style.row}>                    
                        <Card><img src="http://placekitten.com/200/200" /></Card>
                        <Card><img src="http://placekitten.com/200/200" /></Card>
                        <Card><img src="http://placekitten.com/200/200" /></Card>
                    </div>

                </Container>
            </>
        )
    }
}