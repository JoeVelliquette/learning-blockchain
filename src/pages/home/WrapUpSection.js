import React, {Component} from 'react';
import {Typography} from "antd";
import WrapUpList from "../../components/wrapUp/WrapUpList";

const { Title } = Typography;

class WrapUpSection extends Component {
    render() {
        return (
            <div className={'section-wrapper'}>
                <Title level={4}>What's Next?</Title>
                <WrapUpList/>
            </div>
        );
    }
}

export default WrapUpSection;
