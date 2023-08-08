import { Code } from 'nextra/components';
import React, { useState } from 'react';

export interface ParameterInfo {
  property: string;
  description: string;
  example: string;
  optional: boolean;
  enums: any[];
  array: boolean;
  object: boolean;
  type: string;
  arraySchema?: any;
  objectProperties?: ParameterInfo[];
  oneOf?: ParameterInfo[];
}

interface ParametersProps {
  params: ParameterInfo[] | undefined;
}

const RecursiveParameters: React.FC<ParametersProps> = ({ params }) => {
  const [showChildren, setShowChildren] = useState<number | null>(null);

  const toggleChildren = (index: number) => {
    setShowChildren((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {params?.map((param, index) => {
        const hasChildren =
          param.objectProperties || param?.arraySchema?.objectProperties;

        return (
          <div
            key={index}
            className="border-t border-gray-200 dark:border-zinc-800 py-3.5"
          >
            <div className="flex items-center justify-between">
              <p>
                <code className="font-bold text-sm mr-1">{param.property}</code>
                <span className="text-xs font-medium text-gray-400">
                  {param.type}
                </span>
              </p>
              {hasChildren && (
                <button
                  className="nx-text-gray-500  rounded-full px-4 py-1 text-xs "
                  onClick={() => toggleChildren(index)}
                >
                  {showChildren === index
                    ? 'Hide child params'
                    : 'Show child params'}
                </button>
              )}
            </div>
            <p className="mt-2">
              {param.description || param?.arraySchema?.description}
            </p>
            <p className="mt-2">
              {param.enums && param.enums.length > 0 && (
                <span>
                  Enum:{' '}
                  {param.enums.map((enumValue, enumIndex) => (
                    <Code className="ml-2" key={enumIndex}>
                      {enumValue}
                    </Code>
                  ))}
                </span>
              )}
            </p>

            {param.oneOf && (
              <div className=" border p-3 border-gray-200 rounded-lg dark:border-neutral-700">
                <p className="mb-2 text-sm font-semibold">One of:</p>
                {param.oneOf.map((alternativeSchema, altIndex) => (
                  <div key={altIndex} className="mt-3">
                    <RecursiveParameters params={[alternativeSchema]} />
                  </div>
                ))}
              </div>
            )}

            {hasChildren && showChildren === index && (
              <div className="m-3 border p-3 border-gray-200 rounded-lg dark:border-neutral-700">
                <p className="mb-2 text-sm font-semibold">Child parameters</p>
                <RecursiveParameters
                  params={
                    param.objectProperties ||
                    param.arraySchema?.objectProperties
                  }
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

const Parameters: React.FC<ParametersProps> = ({ params }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-medium mb-2">Parameters</h3>
      {!params || params.length === 0 ? (
        <p>No parameters available.</p>
      ) : (
        <RecursiveParameters params={params} />
      )}
    </div>
  );
};

export default Parameters;
