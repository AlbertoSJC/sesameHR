import TextInput from '@components/common/TextInput.vue';
import { mount, VueWrapper } from '@vue/test-utils';

const exampleProps = {
  label: 'Test Label',
  classes: 'test-class',
  id: 'test-id',
  placeholder: 'Enter number',
};

describe('Text Input', () => {
  let wrapper: VueWrapper;

  beforeAll(() => {
    wrapper = mount(TextInput, { props: exampleProps });
  });

  test('Should mount correctly', () => {
    expect(wrapper).toBeDefined();
  });

  test('Should render input with correct attributes', () => {
    const input = wrapper.find('input');
    expect(input.attributes('id')).toBe('test-id');
    expect(input.attributes('placeholder')).toBe('Enter number');
    expect(input.classes()).toContain('test-class');
  });

  test('Should set value example', async () => {
    const input = wrapper.find('input');
    await input.setValue('example');
    expect(input.element.value).toBe('example');
  });
});
