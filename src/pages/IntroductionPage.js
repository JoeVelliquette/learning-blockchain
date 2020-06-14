import React, {Component} from 'react';
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import IntroductionSection from "./home/IntroductionSection";

class IntroductionPage extends Component {
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
                        <Link to={'/introduction'}>
                            Introduction
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <IntroductionSection/>
            </div>
        );
    }
}

export default IntroductionPage;
