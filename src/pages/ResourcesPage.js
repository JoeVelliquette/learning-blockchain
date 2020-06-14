import React, {Component} from 'react';
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import ResourcesSections from "./home/ResourcesSections";

class ResourcesPage extends Component {
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
                        <Link to={'/resources'}>
                            Resources
                        </Link>
                    </Breadcrumb.Item>
                </Breadcrumb>

                <ResourcesSections/>
            </div>
        );
    }
}

export default ResourcesPage;
