import React, {Component} from 'react';
import {Breadcrumb, Col, Row, Button, Divider, Typography} from 'antd';
import {Link} from "react-router-dom";
import { LeftOutlined, RightOutlined, CheckOutlined } from '@ant-design/icons';
import {ShareSection} from "../common/ShareSection";
import {connect} from "react-redux";
import {markResourceComplete} from '../../redux/actions/MarkCompleteActions';
import YouTube from 'react-youtube';
import {isMobile} from 'react-device-detect';

const { Title } = Typography;

class ResourcePageFiller extends Component {

    componentDidMount() {
        this.props.markResourceComplete(this.props.match.params.id - 1);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.markResourceComplete(this.props.match.params.id - 1);
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
                        <Link to={'/resources'}>
                            Resources
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {this.props.resources[this.props.match.params.id - 1].title}
                    </Breadcrumb.Item>
                </Breadcrumb>

                <br/>

                <div style={{ width: '100%', backgroundColor: '#fff', padding: 25}}>
                    <Title level={4}>{this.props.resources[this.props.match.params.id - 1].title}</Title>
                    <YouTube videoId={this.props.resources[this.props.match.params.id - 1].videoId} opts={{ width: '100%', height: isMobile ? 160 : 563 }}/>
                    <br/>
                    <p>{this.props.resources[this.props.match.params.id - 1].description}</p>
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
                                onClick={() => this.props.history.push(`/resource/${Number(this.props.match.params.id) - 1}`)}>
                                <LeftOutlined /> Back
                            </Button>
                        </Col>
                        <Col>
                            <div style={{fontWeight: 'bold', color: '#000', textAlign: 'center'}}>
                                {`${this.props.match.params.id} of ${this.props.resources.length}`}
                            </div>
                        </Col>
                        <Col>
                            <Button
                                disabled={Number(this.props.match.params.id) === this.props.resources.length}
                                size={'large'}
                                type={'primary'}
                                style={{width: 100}}
                                onClick={() => this.props.history.push(`/resource/${Number(this.props.match.params.id) + 1}`)}
                            >
                                Next <RightOutlined />
                            </Button>
                        </Col>
                    </Row>
                </div>

                { Number(this.props.match.params.id) === this.props.resources.length &&
                <div style={{ marginTop: 25, width: '100%',  padding: 25, background: 'linear-gradient(to bottom right, rgba(29, 165, 122, 0.8), #1DA57A)', color: '#fff'}}>
                    <Row justify={'space-between'} align={'middle'}>
                        <Col span={14}>
                            <div style={{fontWeight: 'bold', color: '#fff'}}>
                                <CheckOutlined /> Section Completed!
                            </div>
                            <div style={{fontWeight: 'bold', color: '#f9f9f9'}}>
                                {`Next: ${this.props.wrapUp[0].title}`}
                            </div>
                        </Col>
                        <Col>
                            <Button
                                size={'large'}
                                type={'default'}
                                style={{width: 100}}
                                onClick={() => this.props.history.push(`/wrap-up/1`)}
                            >
                                Next <RightOutlined />
                            </Button>
                        </Col>
                    </Row>
                </div>
                }

                <ShareSection/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    resources: state.data.resources,
    wrapUp: state.data.wrapUp,
});

export default connect(mapStateToProps, {markResourceComplete})(ResourcePageFiller);
