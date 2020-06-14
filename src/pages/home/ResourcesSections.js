import React, {Component} from 'react';
import ResourceList from "../../components/resources/ResourceList";
import {Typography} from "antd";

const { Title } = Typography;

class ResourcesSections extends Component {
    render() {
        return (
            <div className={'section-wrapper'}>
                <Title level={4}>Resources</Title>
                <ResourceList/>
            </div>
        );
    }
}

export default ResourcesSections;
