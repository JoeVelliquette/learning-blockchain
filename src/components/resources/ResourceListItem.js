import React, {Component} from 'react';
import {List, Space} from "antd";
import { CheckOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";


class ResourceListItem extends Component {
    render() {
        return (
            <div key={this.props.item.title} className={'hoverable-list-item'}>
                <Link to={this.props.link}>
                    <List.Item
                        actions={
                            this.props.item.completed &&
                            [ <Space style={{color: '#1DA57A'}}> <CheckOutlined style={{color: '#1DA57A'}}/> Completed </Space> ]}
                        extra={
                            <div style={{width: 250, position: 'relative', paddingBottom: '56.2%'}}>
                                <img src={`https://img.youtube.com/vi/${this.props.item.videoId}/0.jpg`} alt={this.props.item.title}
                                     style={{position: 'absolute', objectFit: 'cover', width: '100%', height: '100%', backgroundColor: '#ccc'}}/>
                            </div>
                        }
                    >
                        <List.Item.Meta
                            title={this.props.item.title}
                            description={this.props.item.description}
                        />
                        <p style={{color: 'grey'}}>{this.props.item.content}</p>
                    </List.Item>
                </Link>
            </div>
        );
    }
}

export default ResourceListItem;
