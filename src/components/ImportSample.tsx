import React from 'react';
import {useLocation} from 'react-router-dom';
import {getPageFromRoute} from '@core/routeMap';
import {CodeBlock} from '@components/CodeBlock';
import {Subheading} from '@components/StyledTypography';

interface ImportSampleProps {
  importCode?: string;
}

export const PageHeader = ({importCode: code}: ImportSampleProps) => {
  const location = useLocation();
  const info = getPageFromRoute(location.pathname);

  return (
    <>
      <Subheading>Import</Subheading>

      <CodeBlock
        code={code ?? `import {${info.name}} from 'mui-nested-menu';`}
      />

      <Subheading>Overview</Subheading>
    </>
  );
};
