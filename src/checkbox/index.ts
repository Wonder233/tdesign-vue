import _Group from './group';
import _Checkbox from './checkbox';
import mapProps from '../utils/map-props';
import withInstall from '../utils/withInstall';
import { TdCheckboxProps, TdCheckboxGroupProps } from './type';

import './style/';

export type CheckboxProps = TdCheckboxProps;
export type CheckboxGroupProps = TdCheckboxGroupProps;
export * from './type';

export const Checkbox = withInstall('Checkbox', mapProps(['checked'], {
  model: { prop: 'checked', event: 'change' },
})(_Checkbox));
export const CheckboxGroup = withInstall('CheckboxGroup', mapProps(['value'], {
  model: { prop: 'value', event: 'change' },
})(_Group));
export default Checkbox;
