import React, {Component} from 'react';
import ProgressIndicator from "../../components/common/ProgressIndicator";
import IntroductionSection from "./IntroductionSection";
import ResourcesSections from "./ResourcesSections";
import WrapUpSection from "./WrapUpSection";
import {ShareSection} from "../../components/common/ShareSection";
import MoreResourcesSection from "../../components/moreResources/MoreResourcesSection";
import {Col, Row, Typography, Button} from "antd";
import {CloseOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import { markIntroParagraphComplete} from "../../redux/actions/MarkCompleteActions";

const { Title, Paragraph } = Typography;

class Home extends Component {
    render() {
        return (
            <div>
                <MoreResourcesSection/>

                { this.props.introOpen &&
                    <div className={'section-wrapper'}>
                        <Row justify={'space-between'} align={'middle'}>
                            <Col>
                                <Title level={4}>What is this?</Title>
                            </Col>
                            <Col>
                                <Button size={'small'} type="dashed" shape="circle" icon={<CloseOutlined />} onClick={() => this.props.markIntroParagraphComplete()} />
                            </Col>
                        </Row>

                        <Paragraph>
                            I made this guide because a lot of people have asked me for good resources to learn about
                            blockchain. There are a lot of resources out there and it's difficult to know which videos
                            to watch and which order to watch them. This guide is an aggregation of the best blockchain
                            resources and are organized in a way that will allow you to learn without feeling overwhelmed
                            or lost.
                        </Paragraph>

                        <Paragraph underline>
                            These are the same videos, books, and whitepapers that I used to first learn about blockchain.
                        </Paragraph>

                        <Paragraph>
                            The introduction section is supposed to give you a little bit of background on
                            the importance of blockchain and bitcoin. You should learn what it is, why it's important,
                            and the difference between bitcoin vs. blockchain.
                        </Paragraph>

                        <Paragraph>
                            The second section takes a deep dive into the bitcoin whitepaper. Learning about bitcoin
                            is still the best way to learn about blockchain.
                        </Paragraph>

                        <Paragraph>
                            The last section is all about RAE, the network that Rokfin uses to reward creators on the
                            Rokfin network. Although bitcoin and blockchain are tightly juxtaposed, bitcoin is not the
                            only application that uses a blockchain.
                            Learn how Rokfin uses a blockchain to meet specific business requirements.
                        </Paragraph>

                        <Paragraph>
                            And, of course, if you find any of this information useful, please share it on social or buy
                            me a coffee.
                        </Paragraph>
                    </div>
                }

                <ProgressIndicator/>

                <IntroductionSection/>

                <ResourcesSections/>

                <WrapUpSection/>

                <ShareSection/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    introOpen: state.data.introParagraphOpen
});

export default connect(mapStateToProps, {markIntroParagraphComplete})(Home);
