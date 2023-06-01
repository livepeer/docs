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
}

interface ParametersProps {
  params: ParameterInfo[] | undefined;
}

const RecursiveParameters: React.FC<ParametersProps> = ({ params }) => {
  return (
    <>
      {params?.map((param, index) => {
        const [showChildren, setShowChildren] = useState(false);

        console.log(params);

        const toggleChildren = () => {
          setShowChildren(!showChildren);
        };

        return (
          <div
            key={index}
            className="border-t border-gray-200 dark:border-zinc-800 py-3.5"
          >
            <div className="flex items-center justify-between">
              <p>
                <code className="font-bold text-sm">
                  {param.property || 'undefined'}
                </code>
                <span className="text-xs font-medium text-gray-400 ml-1">
                  {param.type} {param.optional && 'optional'}
                </span>
              </p>
              {(param.objectProperties ||
                param?.arraySchema?.objectProperties) && (
                <button
                  className="nx-text-gray-500  rounded-full px-4 py-1 text-xs "
                  onClick={toggleChildren}
                >
                  {showChildren ? 'Hide child params' : 'Show child params'}
                </button>
              )}
            </div>
            <p className="mt-2">
              {param.description || param?.arraySchema?.description}
            </p>
            {(param.objectProperties || param?.arraySchema?.objectProperties) &&
              showChildren && (
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
