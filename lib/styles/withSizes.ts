import reactSizes from 'react-sizes';
import { DeviceSize } from './themedComponents';

type Props = {
  device: DeviceSize;
};

const withSizes = (component: { width: number }): Props => {
  const { width } = component;
  let device: DeviceSize;
  if (!width) {
    device = 'desktop';
  } else if (width <= 1000) {
    device = 'pad';
  } else if (width <= 840) {
    device = 'mobile';
  } else {
    device = 'desktop';
  }
  return {
    device
  };
};

export default reactSizes(withSizes) as any;
