import React, { useState } from 'react';
import { Button, Modal, Form, Input, InputNumber } from 'antd';
import { connect } from 'umi';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const HooksForm = ({ visible, onCreate, confirmLoading, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="标记视频"
      okText="确定"
      cancelText={null}
      onCancel={() => {
        // 表单重置
        form.resetFields();
        onCancel();
      }}
      confirmLoading={confirmLoading}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            onCreate(values);
            // 表单重置
            form.resetFields();
          })
          .catch(info => {
            console.log('校验失败:', info);
          });
      }}
    >
      <Form
        form={form}
        {...layout}
        name="form_in_modal"
        hideRequiredMark
        // initialValues={{
        // }}
      >
        <Form.Item name="activity" label="测试单元">
          <Input />
        </Form.Item>
        <Form.Item name="testCount" label="数量">
          <InputNumber style={{ width: '100%' }} max={8888888888} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const HooksModal = ({ loading, dispatch, post_id }) => {
  const [visible, setVisible] = useState(false);

  const onCreate = values => {
    // console.log('收到表单内的值: ', values);
    dispatch({
      type: 'test/SendTestData',
      payload: { ...values, post_id },
    }).then(() => {
      setVisible(false);
    });
  };

  return (
    <div>
      <Button
        type="link"
        onClick={() => {
          setVisible(true);
        }}
      >
        点击测试hooksForm
      </Button>
      <HooksForm
        visible={visible}
        onCreate={onCreate}
        confirmLoading={loading}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

// export default CollectionsPage;
export default connect(({ test }) => ({
  test,
}))(HooksModal);
