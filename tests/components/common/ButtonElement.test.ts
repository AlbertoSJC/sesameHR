import ButtonElement from '@components/common/ButtonElement.vue';
import { mount } from '@vue/test-utils';

describe('ButtonElement.vue', () => {
  it('renders the button with the correct text', () => {
    const wrapper = mount(ButtonElement, {
      props: { text: 'Click Me' },
    });
    expect(wrapper.text()).toBe('Click Me');
  });

  it('applies disabled styles when the disabled prop is true', () => {
    const wrapper = mount(ButtonElement, {
      props: { text: 'Click Me', disabled: true },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('!bg-[#535353]');
    expect(button.classes()).toContain('pointer-events-none');
  });

  it('applies additional classes passed via the classes prop', () => {
    const wrapper = mount(ButtonElement, {
      props: { text: 'Click Me', classes: 'custom-class' },
    });
    const button = wrapper.find('button');
    expect(button.classes()).toContain('custom-class');
  });

  it('is clickable when not disabled', async () => {
    const wrapper = mount(ButtonElement, {
      props: { text: 'Click Me' },
    });
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(button.attributes('disabled')).toBeUndefined();
  });
});
