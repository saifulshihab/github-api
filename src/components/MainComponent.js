import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import GHApi from './GitHubComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  onFinish = (values) => {
    this.setState({
      userName: '',
    });
    this.setState({
      userName: values.username,
    });
  };
  render() {
    return (
      <div>
        <Row justify="center">
          <Col span={24} md={6} style={{ textAlign: 'center' }}>
            <GithubOutlined style={{ fontSize: '14rem', color: '#1890ff' }} />
          </Col>
        </Row>
        <Divider style={{ color: '#ddd' }} orientation="center">
          GitHub API
        </Divider>
        <Row justify="center">
          <Col span={24} md={6} style={{ textAlign: 'center' }}>
            <Form name="basic" onFinish={this.onFinish}>
              <Form.Item name="username">
                <Input className="srcInput" placeholder="Enter a GitHub Username" />
              </Form.Item>
              <Button type="primary" style={{background: "transparent"}} htmlType="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>

        <Row justify="center" style={{ marginTop: 20 }}>
          <Col span={24} md={6}>
            {this.state.userName !== '' ? (
              <GHApi userName={this.state.userName} />
            ) : (
              <div></div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
