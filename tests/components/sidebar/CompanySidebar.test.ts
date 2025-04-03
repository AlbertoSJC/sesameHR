import { describe, test, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import CompanySidebar from '@components/sidebar/CompanySidebar.vue';

describe('CompanySidebar', () => {
  test('should render the component correctly', () => {
    const wrapper = shallowMount(CompanySidebar);
    const rootDiv = wrapper.find('div');
    expect(rootDiv.exists()).toBe(true);

    expect(rootDiv.classes()).toContain('h-full');
    expect(rootDiv.classes()).toContain('w-[20%]');
    expect(rootDiv.classes()).toContain('flex');
    expect(rootDiv.classes()).toContain('flex-row');
    expect(rootDiv.classes()).toContain('shadow-inset-lg');
  });

  test('should render the component child classes correctly', () => {
    const wrapper = shallowMount(CompanySidebar);
    const childDivs = wrapper.findAll('.shadow-inset-lg > div');

    expect(childDivs.length).toBe(2);

    expect(childDivs[0].classes()).toContain('h-full');
    expect(childDivs[0].classes()).toContain('w-[20%]');
    expect(childDivs[0].classes()).toContain('bg-[#f1f5f9]');

    expect(childDivs[1].classes()).toContain('h-full');
    expect(childDivs[1].classes()).toContain('w-[80%]');
    expect(childDivs[1].classes()).toContain('bg-white');
  });
});
