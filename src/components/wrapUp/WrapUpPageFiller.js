import React, {Component} from 'react';
import {Breadcrumb, Col, Row, Button, Divider, Typography} from 'antd';
import {Link} from "react-router-dom";
import { LeftOutlined, RightOutlined, CheckOutlined } from '@ant-design/icons';
import {ShareSection} from "../common/ShareSection";
import {connect} from "react-redux";
import {markWrapUpComplete} from '../../redux/actions/MarkCompleteActions';
import YouTube from 'react-youtube';
import MoreResourcesSection from "../moreResources/MoreResourcesSection";
import {isMobile} from 'react-device-detect';

const { Title } = Typography;

class WrapUpPageFiller extends Component {

    componentDidMount() {
        this.props.markWrapUpComplete(this.props.match.params.id - 1);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.markWrapUpComplete(this.props.match.params.id - 1);
        }
    }

    render() {
        return (
            <div className={'resource-page'}>

                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={'/wrap-up'}>
                            What's Next?
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {this.props.wrapUp[this.props.match.params.id - 1].title}
                    </Breadcrumb.Item>
                </Breadcrumb>

                <br/>

                <div style={{ width: '100%', backgroundColor: '#fff', padding: 25}}>
                    <Title level={4}>{this.props.wrapUp[this.props.match.params.id - 1].title}</Title>
                    <YouTube videoId={this.props.wrapUp[this.props.match.params.id - 1].videoId} opts={{ width: '100%', height: isMobile ? 160 : 563 }}/>
                    <br/>
                    <p>{this.props.wrapUp[this.props.match.params.id - 1].description}</p>
                </div>
                <Divider/>
                <div style={{ width: '100%',  padding: 25, backgroundColor: '#fff'}}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col>
                            <Button
                                disabled={Number(this.props.match.params.id) === 1}
                                size={'large'}
                                type={'primary'}
                                style={{width: 100}}
                                onClick={() => this.props.history.push(`/wrap-up/${Number(this.props.match.params.id) - 1}`)}>
                                <LeftOutlined /> Back
                            </Button>
                        </Col>
                        <Col>
                            <div style={{fontWeight: 'bold', color: '#000', textAlign: 'center'}}>
                                {`${this.props.match.params.id} of ${this.props.wrapUp.length}`}
                            </div>
                        </Col>
                        <Col>
                            <Button
                                disabled={Number(this.props.match.params.id) === this.props.wrapUp.length}
                                size={'large'}
                                type={'primary'}
                                style={{width: 100}}
                                onClick={() => this.props.history.push(`/wrap-up/${Number(this.props.match.params.id) + 1}`)}
                            >
                                Next <RightOutlined />
                            </Button>
                        </Col>
                    </Row>
                </div>

                { Number(this.props.match.params.id) === this.props.wrapUp.length &&
                    <div>
                        <div style={{ marginTop: 25, width: '100%',  padding: 25, background: 'linear-gradient(to bottom right, rgba(29, 165, 122, 0.8), #1DA57A)', color: '#fff'}}>
                            <Row justify={'space-between'} align={'middle'}>
                                <Col span={14}>
                                    <div style={{fontWeight: 'bold', color: '#fff'}}>
                                        <CheckOutlined /> Course Completed!
                                    </div>
                                </Col>
                                <Col>
                                    <Button
                                        size={'large'}
                                        type={'default'}
                                        style={{width: 100}}
                                        onClick={() => this.props.history.push(`/resources/more`)}
                                    >
                                        Next <RightOutlined />
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <div style={{marginTop: 25}}>
                            <MoreResourcesSection/>
                        </div>
                    </div>
                }

                <ShareSection/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    wrapUp: state.data.wrapUp,
});

export default connect(mapStateToProps, {markWrapUpComplete})(WrapUpPageFiller);
