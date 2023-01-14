import React from "react";
import { Button, Form, Input } from "antd";
import Foter from "../Footer/Foter";
import "../login/Login.css";
const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <h1
        className="text-center my-4"
        style={{ color: "hsl(206deg 87% 38%)", fontSize: "40px" }}
      >
        Login
      </h1>
      <div className="container" style={{ marginTop: "6vh" }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>Email</label>
            }
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input className="login-input-width" />
          </Form.Item>

          <Form.Item
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>password</label>
            }
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password className="login-input-width" />
          </Form.Item>

          <Form.Item
            label={
              <label style={{ color: "hsl(206deg 87% 38%)" }}>conf Pass</label>
            }
            name="conf Pass"
            rules={[
              {
                required: true,
                message: "Please input your confirm conf Password!",
              },
            ]}
          >
            <Input.Password className="login-input-width" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <div className="loginbtns">
            <div class="open-ids">
              <div class="telegram-login">
                <script
                  async=""
                  data-onauth="return;"
                  data-request-access="write"
                  data-telegram-login="mangcut_test_bot"
                  src="https://telegram.org/js/telegram-widget.js?4"
                ></script>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div className="footer">
        <Foter />
      </div>
    </>
  );
};

export default Login;
