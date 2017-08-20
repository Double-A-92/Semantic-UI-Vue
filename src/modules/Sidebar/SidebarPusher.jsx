import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiSidebarPusher',
  render() {
    const ElementType = getElementType(this);
    return <ElementType {...getChildProps(this)} class="pusher">{this.$slots.default}</ElementType>;
  },
  meta: {
    parent: 'SuiSidebar',
  },
};