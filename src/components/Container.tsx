import * as React from 'react'

const style = (center:boolean) => ({
    backgroundColor: '#eee',
    padding: '10px 15px',
    height: 'Calc(100vh - 20px)',
    width: 'Calc(100vw - 30px)',
    display: 'flex',
    justifyContent: center ? 'center' : undefined,
    alignItems: center ? 'center' : undefined,
    flexDirection: 'column'
}as React.CSSProperties)

interface ICenterProps {
    center?: boolean
}

export default class Container extends React.Component<ICenterProps>{
    public render() {
        const {children, center=false} = this.props
        return(
            <div style={style(center)}>
                {children}
            </div>
        )
    }
}