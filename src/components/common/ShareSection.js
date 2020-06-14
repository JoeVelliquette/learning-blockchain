import React from 'react';
import {Col, Row} from "antd";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";
import { isMobile } from "react-device-detect";

export function ShareSection() {
    return (
        <div>

            <div style={{ width: '100%',  padding: 25, backgroundColor: '#fff', marginTop: 25}}>
                <Row justify={'space-between'} align={'middle'}>
                    <Col>
                        <h3>Think your friends would like this?</h3>
                        <p>Share to social...</p>
                        {isMobile && <br/>}
                    </Col>
                    <Col>
                        <Row gutter={25}>
                            <Col>
                                <TwitterShareButton url={window.location.href}>
                                    <TwitterIcon size={51} round={false} />
                                </TwitterShareButton>
                            </Col>
                            <Col>
                                <FacebookShareButton url={window.location.href}>
                                    <FacebookIcon size={51} round={false} />
                                </FacebookShareButton>
                            </Col>
                            <Col>
                                <LinkedinShareButton url={window.location.href}>
                                    <LinkedinIcon size={51} round={false} />
                                </LinkedinShareButton>
                            </Col>
                            <Col>
                                <EmailShareButton url={window.location.href}>
                                    <EmailIcon size={51} round={false} />
                                </EmailShareButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div style={{ width: '100%',  padding: 25, backgroundColor: '#fff', marginTop: 25}}>
                <Row justify={'space-between'} align={'top'}>
                    <Col>
                        <h3>Did you find this useful?</h3>
                        <p>Support my work & coffee addiction...</p>
                        {isMobile && <br/>}
                    </Col>
                    <Col>
                        <Row gutter={25}>
                            <Col>
                                <a href="https://www.buymeacoffee.com/joevelliquette" target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee"  className={'bmc-img'}/>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
    );
}


