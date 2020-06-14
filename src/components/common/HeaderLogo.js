import React from 'react';
import {Col, Row} from "antd";
import {PartitionOutlined, DashOutlined, MinusOutlined, CheckSquareOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

class HeaderLogo extends React.Component {
    render() {
        return (
            <Link to={'/'}>
                <Row justify={'center'}>
                    <Col>
                        <DashOutlined style={{color: '#1DA57A'}}/>
                    </Col>
                    <Col>
                        <CheckSquareOutlined style={{color: '#1DA57A'}}/>
                    </Col>
                    <Col>
                        <MinusOutlined style={{color: '#1DA57A'}}/>
                    </Col>
                    <Col className={'header-text'}>
                        BLOCKCHAIN
                    </Col>
                    <Col>
                        <MinusOutlined style={{color: '#ccc'}}/>
                    </Col>
                    <Col>
                        <PartitionOutlined style={{color: '#ccc'}} />
                    </Col>
                </Row>
            </Link>
        );
    }
}

export default HeaderLogo;
