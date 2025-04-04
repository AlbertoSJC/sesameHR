import { describe, test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import HeaderTools from '@components/recruitment/HeaderTools.vue';
import TextInput from '@components/common/TextInput.vue';
import ButtonElement from '@components/common/ButtonElement.vue';
import { createPinia, setActivePinia } from 'pinia';
import { useRecruitmentStore } from '@stores/recruitment';

describe('HeaderTools', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('Should mount', () => {
    const wrapper = mount(HeaderTools);
    expect(wrapper).toBeDefined();
  });

  test('Should render TextInput component with correct props', () => {
    const wrapper = mount(HeaderTools);
    const textInput = wrapper.findComponent(TextInput);

    expect(textInput.exists()).toBe(true);
    expect(textInput.props('placeholder')).toBe('Buscar');
    expect(textInput.props('icon')).toBe('src/images/icon-search.svg');
  });

  test('Should bind TextInput to recruitmentFilterInput in the store', async () => {
    const recruitmentStore = useRecruitmentStore();
    const wrapper = mount(HeaderTools);
    const textInput = wrapper.findComponent(TextInput);

    await textInput.setValue('test input');
    expect(recruitmentStore.recruitmentFilterInput).toBe('test input');
  });

  test('Should render ButtonElement component with correct props', () => {
    const wrapper = mount(HeaderTools);
    const buttonElement = wrapper.findComponent(ButtonElement);

    expect(buttonElement.exists()).toBe(true);
    expect(buttonElement.props('text')).toBe('Añadir candidato');
    expect(buttonElement.props('classes')).toBe('text-sm');
  });
});
