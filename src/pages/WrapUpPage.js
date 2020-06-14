import React, {Component} from 'react';
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import WrapUpSection from "./home/WrapUpSection";

class WrapUpPage extends Component {
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
                        <Link to={'/wrap-up'}>
                            Wrap Up
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <WrapUpSection/>
            </div>
        );
    }
}

export default WrapUpPage;
