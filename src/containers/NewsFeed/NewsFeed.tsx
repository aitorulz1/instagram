import * as React from 'react'

import Post from '../../components/Post'
import Navbar from '../../components/Navbar';
import Container from '../../components/Container'


export default class NewsFeed extends React.Component {
    public render() {
        return(
            <>
                <Navbar />
                <Container>
                    <div style={{margin:"0 auto"}}>
                        <Post image={"http://placekitten.com/300/200"}/>
                        <Post image={"http://placekitten.com/300/200"}/>
                    </div>
                </Container>    
            </>        
        )
    }
}