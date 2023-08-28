const componentTemplate = sliceName => {
  return `import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/libs/class-names';

import cls from './${sliceName.kebabCase}.module.scss';

interface Props {
  className?: string;
}

const ${sliceName.pascalCase} = memo((props: Props) => {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <div className={classNames(cls.${sliceName.camelCase}, className)}>
      ${sliceName.pascalCase}
    </div>
  );
});

export { ${sliceName.pascalCase} }
`;
};

export default componentTemplate;
