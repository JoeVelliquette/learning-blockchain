import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MoreResourcesSection extends Component {
    render() {
        return (
            <Link to={'/resources/more'}>
                <div style={{height: 100, position: 'relative', textAlign: 'center', color: '#fff', backgroundSize: 'cover',
                    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80)'}}>
                    <div style={{width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 28, fontWeight: 'bold'}}>
                        Books & Whitepapers
                        <div style={{fontSize: 14, fontWeight: 'bold', textDecoration: 'underline'}}>
                            Click Here
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default MoreResourcesSection;
