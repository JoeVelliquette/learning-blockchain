import React, {Component} from 'react';
import {Progress, Typography} from "antd";
import {connect} from "react-redux";

const { Title } = Typography;

class ProgressIndicator extends Component {
    render() {
        let numResourcesCompleted = this.props.resources.filter(item => item.completed).length;
        let totalResources = this.props.resources.length;

        let numIntroductionCompleted = this.props.introduction.filter(item => item.completed).length;
        let totalIntroduction = this.props.introduction.length;

        let numWrapUpCompleted = this.props.wrapUp.filter(item => item.completed).length;
        let totalWrapUp = this.props.wrapUp.length;
        return (
            <div className={'section-wrapper'}>
                <Title level={4}>{numResourcesCompleted + numIntroductionCompleted + numWrapUpCompleted} of {totalResources + totalIntroduction + totalWrapUp} Completed</Title>
                <Progress
                    percent={((numResourcesCompleted + numIntroductionCompleted + numWrapUpCompleted) / (totalResources + totalIntroduction + totalWrapUp)) * 100}
                    showInfo={false}
                    strokeLinecap={'square'}
                    strokeColor={'#1DA57A'}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    introduction: state.data.introduction,
    resources: state.data.resources,
    wrapUp: state.data.wrapUp
});

export default connect(mapStateToProps, null)(ProgressIndicator);

