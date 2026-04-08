/**
 * @script      solidity-parser
 * @type              integrator
 * @concern     content
 * @niche       data
 * @purpose     content:contract-data
 * @description Contract data pipeline module: solidity-parser
 * @mode        execute
 * @pipeline    manual -> contract data sources -> contract data files
 * @scope       operations/scripts/integrators/content/data/contracts/
 * @usage       Internal module — imported by fetch-contract-addresses.js
 */
const parser = require("@solidity-parser/parser");

function toParameterArray(parameters) {
  if (!parameters) return [];
  if (Array.isArray(parameters)) return parameters;
  if (Array.isArray(parameters.parameters)) return parameters.parameters;
  return [];
}

function stringifyTypeName(node) {
  if (!node) return "unknown";

  switch (node.type) {
    case "ElementaryTypeName":
      return node.name;
    case "UserDefinedTypeName":
      return node.namePath;
    case "ArrayTypeName":
      return `${stringifyTypeName(node.baseTypeName)}[]`;
    case "Mapping":
      return `mapping(${stringifyTypeName(node.keyType)} => ${stringifyTypeName(node.valueType)})`;
    case "FunctionTypeName": {
      const params = toParameterArray(node.parameterTypes).map(stringifyParameter).join(", ");
      const returns = toParameterArray(node.returnTypes).map(stringifyParameter).join(", ");
      return `function(${params})${returns ? ` returns (${returns})` : ""}`;
    }
    default:
      return node.name || node.type || "unknown";
  }
}

function stringifyParameter(parameter) {
  if (!parameter) return "unknown";
  const type = stringifyTypeName(parameter.typeName);
  const location = parameter.storageLocation && parameter.storageLocation !== "default"
    ? ` ${parameter.storageLocation}`
    : "";
  const name = parameter.name ? ` ${parameter.name}` : "";
  return `${type}${location}${name}`.trim();
}

function stringifyReturns(parameters = []) {
  const items = toParameterArray(parameters).map(stringifyParameter).filter(Boolean);
  if (!items.length) return null;
  return items.length === 1 ? items[0] : `(${items.join(", ")})`;
}

function formatFunctionSignature(contractName, fn) {
  const visibility = fn.visibility || "public";
  const params = toParameterArray(fn.parameters).map(stringifyParameter).filter(Boolean);
  const returns = stringifyReturns(fn.returnParameters);
  const mutability = fn.stateMutability && fn.stateMutability !== "nonpayable"
    ? ` ${fn.stateMutability}`
    : "";
  return `${contractName}.${fn.name}(${params.join(", ")})${returns ? ` returns ${returns}` : ""}${mutability}`;
}

function extractContractMetadata(source, contractName) {
  if (!source || !contractName) {
    return {
      contractFound: false,
      contractKind: null,
      bases: [],
      functions: [],
      error: null,
    };
  }

  try {
    const ast = parser.parse(source, { tolerant: true });
    const contract = (ast.children || []).find(
      (node) => node.type === "ContractDefinition" && node.name === contractName
    );

    if (!contract) {
      return {
        contractFound: false,
        contractKind: null,
        bases: [],
        functions: [],
        error: `Contract ${contractName} not found in parsed source.`,
      };
    }

    const functions = (contract.subNodes || [])
      .filter((node) => node.type === "FunctionDefinition")
      .filter((node) => node.visibility === "public" || node.visibility === "external")
      .filter((node) => node.isConstructor !== true && node.name)
      .map((node) => ({
        name: node.name,
        params: toParameterArray(node.parameters).map(stringifyParameter).filter(Boolean),
        returns: stringifyReturns(node.returnParameters),
        stateMutability: node.stateMutability || null,
        declaredIn: contract.name,
        signature: formatFunctionSignature(contract.name, node),
      }));

    return {
      contractFound: true,
      contractKind: contract.kind || "contract",
      bases: (contract.baseContracts || []).map((base) => base.baseName?.namePath).filter(Boolean),
      functions,
      error: null,
    };
  } catch (error) {
    return {
      contractFound: false,
      contractKind: null,
      bases: [],
      functions: [],
      error: error.message,
    };
  }
}

module.exports = {
  extractContractMetadata,
  stringifyParameter,
};
