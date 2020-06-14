import React from 'react';
import {Col, Layout, Row} from 'antd';
import { Router, Switch, Route,} from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.less';
import Home from "./pages/home/Home";
import ResourcePageFiller from "./components/resources/ResourcePageFiller";
import HeaderLogo from "./components/common/HeaderLogo";
import ResourcesPage from "./pages/ResourcesPage";
import LearningMaterial from "./pages/LearningMaterial";
import BitcoinWhitepaperPage from "./pages/BitcoinWhitepaperPage";
import RaeWhitepaperPage from "./pages/RAEWhitepaperPage";
import IntroductionPage from "./pages/IntroductionPage";
import IntroductionPageFiller from "./components/introduction/IntroductionPageFiller";
import WrapUpPageFiller from "./components/wrapUp/WrapUpPageFiller";
import WrapUpPage from "./pages/WrapUpPage";
import {TwitterOutlined, FacebookFilled, LinkedinFilled, MailOutlined} from '@ant-design/icons';
import ReactGA from 'react-ga';

const { Header, Footer, Content } = Layout;
const history = createBrowserHistory();

history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});

function App() {
    return (
        <Router history={history}>
            <Layout className="app">
                <Header className={'app-header'}>
                    <HeaderLogo/>
                </Header>
                <Content className={'app-content'}>
                    <Switch>
                        <Route exact path="/" render={() => <Home/>}/>

                        <Route exact path="/introduction" render={(props) => <IntroductionPage {...props}/> } />
                        <Route exact path="/introduction/:id" render={(props) => <IntroductionPageFiller {...props}/> } />

                        <Route exact path="/resources" render={(props) => <ResourcesPage {...props}/> } />
                        <Route exact path="/resource/:id" render={(props) => <ResourcePageFiller {...props}/> } />

                        <Route exact path="/wrap-up" render={(props) => <WrapUpPage {...props}/> } />
                        <Route exact path="/wrap-up/:id" render={(props) => <WrapUpPageFiller {...props}/> } />

                        <Route exact path="/resources/more" render={(props) => <LearningMaterial {...props}/> } />
                        <Route exact path="/resources/more/bitcoin-whitepaper" render={(props) => <BitcoinWhitepaperPage {...props}/> } />
                        <Route exact path="/resources/more/rae-whitepaper" render={(props) => <RaeWhitepaperPage {...props}/> } />
                    </Switch>
                </Content>
                <Footer className={'app-footer'}>
                    <HeaderLogo/>
                    <div style={{paddingTop: 10}}>
                        Created by Joe Velliquette
                    </div>
                    <Row justify={'center'} style={{paddingTop: 15}} gutter={20}>
                        <Col>
                            <a href='https://twitter.com/j_velli' target="_blank" rel="noopener noreferrer">
                                <TwitterOutlined style={{color: "#1DA1F2", fontSize: 21}}/>
                            </a>
                        </Col>
                        <Col>
                            <a href='https://www.facebook.com/joe.velliquette' target="_blank" rel="noopener noreferrer">
                                <FacebookFilled style={{color: "#3b5998", fontSize: 21}}/>
                            </a>
                        </Col>
                        <Col>
                            <a href='https://www.linkedin.com/in/joseph-velliquette-74037599/' target="_blank" rel="noopener noreferrer">
                                <LinkedinFilled style={{color: "#0e76a8", fontSize: 21}}/>
                            </a>
                        </Col>
                        <Col>
                            <a href='mailto:joevelliquette@gmail.com' target="_blank" rel="noopener noreferrer">
                                <MailOutlined style={{color: "#a9a9a9", fontSize: 21}}/>
                            </a>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </Router>
    );
}

export default App;
