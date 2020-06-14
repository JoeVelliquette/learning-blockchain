import React, {Component} from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";

class BitcoinWhitepaperPage extends Component {
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
                        Bitcoin Whitepaper
                    </Breadcrumb.Item>
                </Breadcrumb>

                <div style={{paddingTop: 15}}>
                    <PDFViewer
                        document={{
                            url: ' https://cors-anywhere.herokuapp.com/https://www.lopp.net/pdf/bitcoin.pdf',
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default BitcoinWhitepaperPage;
