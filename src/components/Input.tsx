import * as React from 'react'

const style = {
    backgroundColor: '#fff',
    border: '1px solid #eee',
    padding: '10px 15px',
    borderRadius: '5px',
    width: 'Calc(100% - 30px)',
    marginBottom: '10px'
}

const spanStyle = {
    color: '#777',
    fontSize: '11px',
    textTransform: 'uppercase',
    fontWeight: '900'
} as React.CSSProperties

interface IInputProps {
    placeholder: string,
    label: string
}

export default class Card extends React.Component<IInputProps> {
    public render() {   
        const {label} = this.props
        return(
        <div>
            <span style={spanStyle}>{label}</span>
            <input {...this.props} style={style} />
        </div>
        )
    }
}