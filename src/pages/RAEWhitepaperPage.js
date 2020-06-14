import React, {Component} from 'react';
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import PDFViewer from "pdf-viewer-reactjs";

class RaeWhitepaperPage extends Component {
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
                        <Link to={'/resources/more'}>
                            More Resources
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        RAE Whitepaper
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div style={{paddingTop: 15}}>
                    <PDFViewer
                        document={{
                            url: ' https://cors-anywhere.herokuapp.com/https://rkfn-production-media.s3-us-west-2.amazonaws.com/assets/RAE+White+Paper.pdf',
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default RaeWhitepaperPage;
