import React, {Component} from 'react';
import {List} from "antd";
import ResourceListItem from "../resources/ResourceListItem";
import {connect} from "react-redux";

class IntroductionList extends Component {
    render() {
        return (
            <List
                itemLayout="vertical"
                size="large"
                dataSource={this.props.introduction}
                renderItem={item =>  <ResourceListItem link={`/introduction/${item.id}`} item={item}/>}
            />
        );
    }
}

const mapStateToProps = state => ({
    introduction: state.data.introduction,
});

export default connect(mapStateToProps, null)(IntroductionList);
