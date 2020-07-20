import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';

import './welcome.css';

const { Title, Paragraph } = Typography;

const { Header, Sider, Content } = Layout;

class Welcome extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
            {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
                </Menu.Item>
            </Menu>
            </Sider> */}
        <Layout className="site-layout">
        <Content className="site-layout" style={{ padding: '0 100px', marginTop: 64 }}>
        <div>
        <Title
             level={4}
             type="secondary"
             style={{ margin: 'auto' }}
            >
              WELCOME TO
            </Title>
            <Title
               level={2}
               style={{ margin: 'auto' }}
            >
              COOL RETRO
            </Title>
            <Paragraph
            style={{ marginBottom: '1.8em', fontStyle: 'italic', fontSize: 'large'}}
            >
              Prepare a board for your sprint to make retro fun, and track your work and briefing the key details for example what went good, actions to improve, suggestion, What went bad.
            </Paragraph>
        </div>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
        Content
      </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Welcome;