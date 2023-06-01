const fs = require('fs');
const yaml = require('js-yaml');

const API_SCHEMA_URL =
  'https://raw.githubusercontent.com/livepeer/studio/master/packages/api/src/schema/api-schema.yaml';

async function fetchAPISchema() {
  try {
    const response = await fetch(API_SCHEMA_URL);
    const schemaYaml = await response.text();
    const schema = yaml.load(schemaYaml);
    return schema;
  } catch (error) {
    throw new Error(`Error fetching the API schema YAML: ${error.message}`);
  }
}

function generateJSONOutput(schema) {
  const jsonOutput = {};

  for (const path in schema.paths) {
    const methods = schema.paths[path];

    for (const method in methods) {
      const { summary = '' } = methods[method];
      const summaryName = summary.replace(/ /g, '-').toLowerCase();
      const href = `/reference/api/#${summaryName}`;

      if (summary) {
        jsonOutput[summaryName] = {
          title: summary,
          href,
        };
      }
    }
  }

  return jsonOutput;
}

async function saveFile(filePath, data) {
  await fs.promises.writeFile(filePath, data);
}

async function main() {
  try {
    const schema = await fetchAPISchema();
    const jsonOutput = generateJSONOutput(schema);
    const outputPath = './pages/reference/api/_meta.en-US.json';

    await saveFile(outputPath, JSON.stringify(jsonOutput, null, 2));
    console.log(`JSON output saved to ${outputPath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
