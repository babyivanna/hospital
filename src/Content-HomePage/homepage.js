
import { Carousel } from 'antd';
import '../App.css';

const contentStyle = {
    width: '100%',
    color: '#fff',
    lineHeight: '40vh',
    textAlign: 'ceter',
    background: '#364d79',
};

const dotstyle = {
    color: 'red'
}

export let Homepage = () => {
    return (
        
            <Carousel autoplay dots={ dotstyle } dotPosition="left" effect="fade" style={{width: '100%'}}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>    
    )
}