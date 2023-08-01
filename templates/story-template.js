const storyTemplate = (layer, sliceName) => {
  return `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ${sliceName.pascalCase} } from './${sliceName.kebabCase}';

export default {
  title: '${layer}/${sliceName.pascalCase}',
  component: ${sliceName.pascalCase},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ${sliceName.pascalCase}>;

const Template: ComponentStory<typeof ${sliceName.pascalCase}> = (args) => <${sliceName.pascalCase} {...args} />;

export const Default = Template.bind({});
Default.args = {

};
`;
};

export default storyTemplate;
