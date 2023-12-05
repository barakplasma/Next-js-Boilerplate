import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IBaseTemplateProps = {
  leftNav: ReactNode;
  rightNav?: ReactNode;
  children: ReactNode;
};

const BaseTemplate = (props: IBaseTemplateProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    <div className="mx-auto max-w-screen-md">
      <header className="border-b border-gray-300">
        <div className="pb-8 pt-16">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.title}
          </h1>
          <h2 className="text-xl">{AppConfig.description}</h2>
        </div>

        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-wrap text-xl [&_li]:mr-6">
              {props.leftNav}
            </ul>
          </nav>

          <nav>
            <ul className="flex flex-wrap text-xl [&_li]:mr-6">
              {props.rightNav}
            </ul>
          </nav>
        </div>
      </header>

      <main>{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </div>
  </div>
);

export { BaseTemplate };