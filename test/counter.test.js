import { mount } from '@vue/test-utils';

import counter from '../src/components/counter';

test('increments counter value on click', async () => {

    const wrapper = mount(counter);
    
    const button = wrapper.find('button');

    expect(button.text()).toContain('You clicked me 0 times.');

    await button.trigger('click');

    expect(button.text()).toContain('You clicked me 1 times.');
});