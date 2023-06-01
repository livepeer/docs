import { Code, Table, Td, Th } from 'nextra/components';

import React, { ReactNode } from 'react';

import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

import Pre from './Pre';

interface MarkdownProps {
  children: string;
}

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  const replaceTags = (child: ReactNode): ReactNode => {
    if (React.isValidElement(child)) {
      if (child.type === 'th') {
        return <Th>{child.props.children}</Th>;
      }
      if (child.type === 'td') {
        return <Td>{child.props.children}</Td>;
      }
      const updatedChildren = React.Children.map(
        child.props.children,
        replaceTags,
      );
      return React.cloneElement(child, child.props, updatedChildren);
    }

    return child;
  };

  const renderCode = ({ className, children, ...props }: any): JSX.Element => {
    return (
      <Code {...props} className={className}>
        {children}
      </Code>
    );
  };

  const renderPre = ({ className, children, ...props }: any): JSX.Element => {
    return (
      <Pre {...props} className={className}>
        {children}
      </Pre>
    );
  };

  const renderH2 = ({ children }: any): JSX.Element => {
    return <h2 className="text-xl font-semibold mt-4 mb-1">{children}</h2>;
  };

  const renderUl = ({ children }: any): JSX.Element => {
    return <p>{children}</p>;
  };

  const renderTable = ({ children }: any): JSX.Element => {
    const updatedChildren = React.Children.map(children, replaceTags);
    return <Table className="my-4">{updatedChildren}</Table>;
  };
  return (
    <ReactMarkdown
      children={children}
      remarkPlugins={[remarkGfm]}
      className="mt-4"
      components={{
        code: renderCode,
        pre: renderPre,
        h2: renderH2,
        ul: renderUl,
        table: renderTable,
      }}
    />
  );
};

export default Markdown;
