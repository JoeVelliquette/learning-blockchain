import React, {Component} from 'react';
import {List} from "antd";
import ResourceListItem from "../resources/ResourceListItem";
import {connect} from "react-redux";

class WrapUpList extends Component {
    render() {
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={this.props.wrapUp}
                renderItem={item =>  <ResourceListItem link={`/wrap-up/${item.id}`} item={item}/>}
            />
        );
    }
}

const mapStateToProps = state => ({
    wrapUp: state.data.wrapUp,
});

export default connect(mapStateToProps, null)(WrapUpList);
