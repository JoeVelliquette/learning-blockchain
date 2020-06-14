import React, {Component} from 'react';
import {List} from "antd";
import ResourceListItem from "./ResourceListItem";
import {connect} from "react-redux";

class ResourceList extends Component {
    render() {
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={this.props.resources}
                renderItem={item =>  <ResourceListItem link={`/resource/${item.id}`} item={item}/>}
            />
        );
    }
}

const mapStateToProps = state => ({
    resources: state.data.resources,
});

export default connect(mapStateToProps, null)(ResourceList);
