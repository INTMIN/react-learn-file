import { Button, Form, Input, Modal, Select } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'umi';

const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const EditForm = ({ record, visible, onCreate, confirmLoading, onCancel, title, form }) => (
  <Modal
    visible={visible}
    title={title || '添加'}
    okText="确定"
    cancelText={null}
    onCancel={() => {
      form.resetFields();
      onCancel();
    }}
    confirmLoading={confirmLoading}
    onOk={() => {
      form
        .validateFields()
        .then(values => {
          onCreate(values);
          form.resetFields();
        })
        .catch(info => {
          console.log('校验失败:', info);
        });
    }}
  >
    <Form form={form} {...layout} name="form_in_modal" hideRequiredMark>
      <Form.Item
        name="mobile"
        label="手机号"
        rules={[
          {
            required: true,
            message: '请输入手机号',
          },
          {
            pattern:
              '^(13[0-9]|14[5-9]|15[0-3,5-9]|16[2,5,6,7]|17[0-8]|18[0-9]|19[0-3,5-9])\\d{8}$',
            message: '请输入正确手机号',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <div style={{ textAlign: 'center' }}>联系手机手机号</div>
    </Form>
  </Modal>
);

const EditModal = ({
  loadData,
  loading,
  dispatch,
  record,
  buttonType,
  buttonName,
  dispatchType,
  title,
}) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  // const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await form.setFieldsValue({ mobile: record.mobile });
    })();
  }, [record]);

  const onCreate = values => {
    // console.log('收到表单内的值: ', values);
    // 此处加个判断到时候编辑名字也走这个组件吧
    dispatch({
      type: dispatchType,
      payload: record ? { ...values, id: record.id } : { ...values },
      load: loadData,
    }).then(() => {
      setVisible(false);
    });
    setVisible(false);
  };
  return (
    <Fragment>
      <Button
        style={{ marginLeft: 24 }}
        type={buttonType || 'primary'}
        onClick={() => {
          setVisible(true);
        }}
      >
        {buttonName || '添加'}
      </Button>
      <EditForm
        form={form}
        visible={visible}
        title={title}
        onCreate={onCreate}
        confirmLoading={loading}
        record={record}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </Fragment>
  );
};

export default connect(({ loading, manage }) => ({
  manage,
  loading: loading.effects['manage/editPhone'],
}))(EditModal);
