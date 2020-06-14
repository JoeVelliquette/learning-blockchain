import React, {Component} from 'react';
import {Typography} from "antd";
import IntroductionList from "../../components/introduction/IntroductionList";

const { Title } = Typography;

class IntroductionSection extends Component {
    render() {
        return (
            <div className={'section-wrapper'}>
                <Title level={4}>Introduction</Title>
                <IntroductionList/>
            </div>
        );
    }
}

export default IntroductionSection;
