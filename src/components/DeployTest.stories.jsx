import DeployTest from './DeployTest';

export default {
  component: DeployTest,
  title: 'DeployTest',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    status: 'success',
    isChecked: false,
  },
};

export const Checked = {
  args: {
    status: 'success',
    isChecked: true,
  },
};

export const Fail = {
  args: {
    status: 'fail',
    isChecked: false,
  },
};
