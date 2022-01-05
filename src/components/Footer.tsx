import * as React from 'react'

import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
    footer: {
        backgroundColor: '#eee', 
        marginLeft:'-15px', 
        marginBottom:'-10px', 
        width:'Calc(100% + 30px)'
    },
    button: {
        width:'Calc(50% - 30px)', 
        float:'left', 
        padding:'10px 15px',
        textAlign:'center', 
    } as React.CSSProperties,
    
}

export default class Footer extends React.Component {

    public render() {
        return(        
        <div style={styles.footer}>
            <div style={styles.button}><FontAwesomeIcon icon={faThumbsUp}/>like</div>
            <div style={styles.button}><FontAwesomeIcon icon={faRetweet}/>compartir</div>
        </div>
        )
    }
}