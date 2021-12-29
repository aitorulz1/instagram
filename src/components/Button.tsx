import * as React from 'react'

const style = (block:boolean) => ({
    backgroundColor: '#00D1B2',
    border: '0px',
    borderRadius: '4px',
    color:'#fff',
    padding: '10px 15px',
    width: block ? '100%' : undefined
})

interface IButtonBlock {
    block:boolean
}

export default class Card extends React.Component<IButtonBlock> {
    public render() {
        const {block} = this.props
        return(
            <button {...this.props} style={style(block)} />
        )
    }
}