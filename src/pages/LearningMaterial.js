import React, {Component} from 'react';
import {Avatar, Breadcrumb, Col, Divider, Row, Typography} from "antd";
import {Link} from "react-router-dom";
import {ShareSection} from "../components/common/ShareSection";

const { Title } = Typography;

class LearningMaterial extends Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        More Resources
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div className={'section-wrapper'}>
                    <Title level={4}>Books</Title>

                    <div className={'flex-card-container'}>
                        <div>
                            <img style={{minWidth: 300}} width={'100%'} alt={''} src={'https://images-na.ssl-images-amazon.com/images/I/51l9qs2GqGL._SX340_BO1,204,203,200_.jpg'}/>
                        </div>
                        <div className={'flex-card-child'}>
                            <Title level={4}>Understanding Bitcoin: Cryptography, Engineering and Economics (The Wiley Finance Series)</Title>
                            <p>
                                Discover Bitcoin, the cryptocurrency that has the finance world buzzing
                                Bitcoin is arguably one of the biggest developments in finance since the advent of fiat currency. With Understanding Bitcoin, expert author Pedro Franco provides finance professionals with a complete technical guide and resource to the cryptography, engineering and economic development of Bitcoin and other cryptocurrencies. This comprehensive, yet accessible work fully explores the supporting economic realities and technological advances of Bitcoin, and presents positive and negative arguments from various economic schools regarding its continued viability.
                            </p>
                            <br/>
                            <p style={{paddingBottom: 10}}><strong>Available on Amazon!</strong></p>
                            <a href="https://www.amazon.com/gp/product/1119019168/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1119019168&linkCode=as2&tag=learningblock-20&linkId=c6af203666cbd125c403cfede571196b" target="_blank" rel="noopener noreferrer" style={{border:'none', textDecoration:'none'}}>
                                <img alt='' src="https://www.niftybuttons.com/amazon/amazon-button2.png"/>
                            </a>
                        </div>
                    </div>

                    <Divider/>

                    <div className={'flex-card-container'}>
                        <div>
                            <img style={{minWidth: 300}} width={'100%'} alt={''} src={'https://images-na.ssl-images-amazon.com/images/I/51nnYGq964L._SX381_BO1,204,203,200_.jpg'}/>
                        </div>
                        <div className={'flex-card-child'}>
                            <Title level={4}>Mastering Bitcoin: Programming the Open Blockchain</Title>
                            <p>
                                Join the technological revolution that's taking the world of finance by storm. Mastering Bitcoin is your guide through the seemingly complex world of bitcoin, providing the knowledge you need to participate in the internet of money. Whether you're building the next killer app, investing in a startup, or simply curious about the technology, this revised and expanded second edition provides essential detail to get you started.
                                Bitcoin, the first successful decentralized digital currency, is still in its early stages and yet it's already spawned a multi billion dollar global economy. This economy is open to anyone with the knowledge and passion to participate. Mastering Bitcoin provides the knowledge. You simply supply the passion.
                            </p>
                            <br/>
                            <p style={{paddingBottom: 10}}><strong>Available on Amazon!</strong></p>
                            <a href="https://www.amazon.com/gp/product/B071K7FCD4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B071K7FCD4&linkCode=as2&tag=learningblock-20&linkId=31ebeb72c766e2eb4372266790a9464c" target="_blank" rel="noopener noreferrer" style={{border:'none', textDecoration:'none'}}>
                                <img alt={''} src="https://www.niftybuttons.com/amazon/amazon-button2.png"/>
                            </a>
                        </div>
                    </div>

                    <Divider/>

                    <div className={'flex-card-container'}>
                        <div>
                            <img style={{minWidth: 300}} width={'100%'} alt={''} src={'https://images-na.ssl-images-amazon.com/images/I/51mG1hJeftL._SX328_BO1,204,203,200_.jpg'}/>
                        </div>
                        <div className={'flex-card-child'}>
                            <Title level={4}>Blockchain Basics: A Non-Technical Introduction in 25 Steps</Title>
                            <p>
                                In 25 concise steps, you will learn the basics of blockchain technology. No mathematical formulas, program code, or computer science jargon are used. No previous knowledge in computer science, mathematics, programming, or cryptography is required. Terminology is explained through pictures, analogies, and metaphors.

                                This book bridges the gap that exists between purely technical books about the blockchain and purely business-focused books. It does so by explaining both the technical concepts that make up the blockchain and their role in business-relevant applications.
                            </p>
                            <br/>
                            <p style={{paddingBottom: 10}}><strong>Available on Amazon!</strong></p>
                            <a href="https://www.amazon.com/gp/product/B06XNWF5GP/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B06XNWF5GP&linkCode=as2&tag=learningblock-20&linkId=601535f4a7c286f6d183b3c59537575b" target="_blank" rel="noopener noreferrer" style={{border:'none', textDecoration:'none'}}>
                                <img alt={''} src="https://www.niftybuttons.com/amazon/amazon-button2.png"/>
                            </a>
                        </div>
                    </div>

                </div>

                <div className={'section-wrapper'}>
                    <Title level={4}>White Papers</Title>

                    <br/>

                    <Row gutter={15} align={'middle'}>
                        <Col>
                            <Avatar shape="square" size="large" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png'}/>
                        </Col>
                        <Col>
                            <Link to={'/resources/more/bitcoin-whitepaper'}>
                                <Title level={4}>Bitcoin Whitepaper</Title>
                            </Link>
                        </Col>
                    </Row>

                    <Divider/>

                    <Row gutter={15} align={'middle'}>
                        <Col>
                            <Avatar shape="square" size="large" src={'https://pbs.twimg.com/profile_images/1105126364229832704/lJlYl0zU_400x400.png'}/>
                        </Col>
                        <Col>
                            <Link to={'/resources/more/rae-whitepaper'}>
                                <Title level={4}>RAE Whitepaper</Title>
                            </Link>
                        </Col>
                    </Row>
                </div>

                <ShareSection/>
            </div>
        );
    }
}

export default LearningMaterial;
