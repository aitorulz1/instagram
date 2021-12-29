import * as React from 'react'

const style = {
    color: '#555',
    padding: '10px 15px',
}

export default class Card extends React.Component {
    public render() {
        
        return(
            <h2 {...this.props} style={style} />   
        )
    }
}