import { siteTitle } from '@/components/config';

import type { VFC } from 'react';

type Props = {
  pageTitle?: string;
};

export const HeadTitle: VFC<Props> = ({ pageTitle }) => {
  let title = siteTitle;
  if (pageTitle) {
    title += ` | ${pageTitle}`;
  }
  return <title>{title}</title>;
};

export const headTitle = (pageTitle: string) => {
  let title = siteTitle;
  if (pageTitle) {
    title += ` | ${pageTitle}`;
  }
  return <title>{title}</title>;
};
