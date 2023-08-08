import { useState, useEffect } from 'react';
import { ParameterInfo } from '@components/openapi/Parameters';

interface Snippet {
  languageName: string;
  request: string;
}

function useCodeSnippets(
  baseUrl: string | undefined,
  params: ParameterInfo[] | undefined,
  method: string,
  path: string,
): Snippet[] {
  const [codeSnippets, setCodeSnippets] = useState<Snippet[]>([]);

  useEffect(() => {
    const generateCurlCommand = (): string => {
      // Generate cURL command
      const requestBody = constructRequestBody(params);

      const curlCommand = `curl -X ${method.toUpperCase()} -H 'content-type: application/json' -d '${requestBody}' ${
        baseUrl ? baseUrl + path : path
      }`;
      return curlCommand;
    };

    const generateRubySnippet = (): string => {
      // Generate Ruby code snippet
      const requestBody = constructRequestBody(params);
      const rubySnippet = `require 'net/http'
require 'uri'

url = URI.parse('${baseUrl ? baseUrl + path : path}')
http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::${
        method.charAt(0).toUpperCase() + method.slice(1)
      }(url.path)
request.add_field('Content-Type', 'application/json')
request.body = '${requestBody}'

response = http.request(request)
puts response.body`;
      return rubySnippet;
    };

    const generatePythonSnippet = (): string => {
      // Generate Python code snippet
      const requestBody = constructRequestBody(params);
      const pythonSnippet = `import requests

url = '${baseUrl ? baseUrl + path : path}'
headers = {'Content-Type': 'application/json'}
data = ${requestBody}

response = requests.${method.toLowerCase()}(url, headers=headers, json=data)
print(response.json())`;
      return pythonSnippet;
    };

    const generatePhpSnippet = (): string => {
      // Generate PHP code snippet
      const requestBody = constructRequestBody(params);
      const phpSnippet = `<?php

$url = '${baseUrl ? baseUrl + path : path}';
$data = ${requestBody};

$options = array(
  'http' => array(
    'header' => "Content-Type: application/json",
    'method' => '${method.toUpperCase()}',
    'content' => json_encode($data),
  ),
);

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
  die("Error occurred");
}

echo $response;
?>`;
      return phpSnippet;
    };

    const generateJavaSnippet = (): string => {
      // Generate Java code snippet
      const requestBody = constructRequestBody(params);
      const javaSnippet = `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Main {
  public static void main(String[] args) throws Exception {
    String url = "${baseUrl ? baseUrl + path : path}";
    String jsonInputString = "${requestBody}";

    URL obj = new URL(url);
    HttpURLConnection con = (HttpURLConnection) obj.openConnection();
    con.setRequestMethod("${method.toUpperCase()}");
    con.setRequestProperty("Content-Type", "application/json");
    con.setDoOutput(true);
    con.getOutputStream().write(jsonInputString.getBytes("UTF-8"));

    BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
    String inputLine;
    StringBuffer content = new StringBuffer();
    while ((inputLine = in.readLine()) != null) {
      content.append(inputLine);
    }
    in.close();

    System.out.println(content.toString());
  }
}`;
      return javaSnippet;
    };

    const generateNodejsSnippet = (): string => {
      // Generate Node.js code snippet
      const requestBody = constructRequestBody(params);
      const nodejsSnippet = `const axios = require('axios');

const url = '${baseUrl ? baseUrl + path : path}';
const data = ${requestBody};

axios.${method.toLowerCase()}(url, data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });`;
      return nodejsSnippet;
    };

    const generateGoSnippet = (): string => {
      // Generate Go code snippet
      const requestBody = constructRequestBody(params);
      const goSnippet = `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "${baseUrl + path}"
	method := "${method.toUpperCase()}"

	payload := ${requestBody}
	payloadBytes, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
		return
	}

	req, err := http.NewRequest(method, url, bytes.NewBuffer(payloadBytes))
	if err != nil {
		fmt.Println(err)
		return
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer resp.Body.Close()

	fmt.Println("Response Status:", resp.Status)
}

`;
      return goSnippet;
    };

    const generateDotNetSnippet = (): string => {
      // Generate .NET code snippet
      const requestBody = constructRequestBody(params);
      const dotNetSnippet = `using System;
using System.IO;
using System.Net;

class Program
{
    static void Main(string[] args)
    {
        string url = "${baseUrl + path}";
        string method = "${method.toUpperCase()}";

        string json = "${requestBody}";

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
        request.Method = method;
        request.ContentType = "application/json";

        using (StreamWriter writer = new StreamWriter(request.GetRequestStream()))
        {
            writer.Write(json);
        }

        HttpWebResponse response = (HttpWebResponse)request.GetResponse();
        using (StreamReader reader = new StreamReader(response.GetResponseStream()))
        {
            string result = reader.ReadToEnd();
            Console.WriteLine(result);
        }
    }
}`;
      return dotNetSnippet;
    };

    const buildNestedObject = (
      properties: ParameterInfo[],
    ): { [key: string]: any } => {
      const nestedObject: { [key: string]: any } = {};

      properties.forEach((property: ParameterInfo) => {
        nestedObject[property.property] =
          property.example || property?.enums[0] || property.type;

        if (property.objectProperties && property.objectProperties.length > 0) {
          const nestedNestedObject = buildNestedObject(
            property.objectProperties,
          );

          if (Object.keys(nestedNestedObject).length > 0) {
            nestedObject[property.property] = nestedNestedObject;
          }
        }
      });

      return nestedObject;
    };

    const constructRequestBody = (
      params: ParameterInfo[] | undefined,
    ): string => {
      const requestBody: { [key: string]: any } = {};

      params?.forEach((property) => {
        if (property.oneOf && property.oneOf.length > 0) {
          const defaultOption = property.oneOf[0] as ParameterInfo;
          defaultOption.property = property.property;
          if (defaultOption.property && defaultOption.example) {
            requestBody[defaultOption.property] = defaultOption.example;
          }

          if (
            defaultOption.objectProperties &&
            defaultOption.objectProperties.length > 0
          ) {
            const nestedObject = buildNestedObject(
              defaultOption.objectProperties,
            );
            if (Object.keys(nestedObject).length > 0) {
              requestBody[defaultOption.property] = nestedObject;
            }
          }

          if (
            defaultOption.array &&
            defaultOption.arraySchema &&
            defaultOption.arraySchema.length > 0
          ) {
            const nestedArray: { [key: string]: any }[] = [];
            defaultOption.arraySchema.forEach((nestedItem: ParameterInfo) => {
              const nestedObject: { [key: string]: any } = {};
              nestedItem.objectProperties?.forEach((nestedProperty) => {
                if (nestedProperty.property && nestedProperty.example) {
                  nestedObject[nestedProperty.property] =
                    nestedProperty.example;
                }
              });
              if (Object.keys(nestedObject).length > 0) {
                nestedArray.push(nestedObject);
              }
            });
            if (nestedArray.length > 0) {
              requestBody[defaultOption.property] = nestedArray;
            }
          }

          return;
        }

        if (property.property && property.example) {
          requestBody[property.property] = property.example;
        }

        if (property.objectProperties && property.objectProperties.length > 0) {
          const nestedObject = buildNestedObject(property.objectProperties);

          if (Object.keys(nestedObject).length > 0) {
            requestBody[property.property] = nestedObject;
          }
        }

        if (
          property.array &&
          property.arraySchema &&
          property.arraySchema.length > 0
        ) {
          const nestedArray: { [key: string]: any }[] = [];
          property.arraySchema.forEach((nestedItem: ParameterInfo) => {
            const nestedObject: { [key: string]: any } = {};
            nestedItem.objectProperties?.forEach((nestedProperty) => {
              if (nestedProperty.property && nestedProperty.example) {
                nestedObject[nestedProperty.property] = nestedProperty.example;
              }
            });
            if (Object.keys(nestedObject).length > 0) {
              nestedArray.push(nestedObject);
            }
          });
          if (nestedArray.length > 0) {
            requestBody[property.property] = nestedArray;
          }
        }
      });

      return JSON.stringify(requestBody, null, 2);
    };

    const snippets: Snippet[] = [];

    snippets.push({
      languageName: 'cURL',
      request: generateCurlCommand(),
    });

    snippets.push({
      languageName: 'Ruby',
      request: generateRubySnippet(),
    });

    snippets.push({
      languageName: 'Python',
      request: generatePythonSnippet(),
    });

    snippets.push({
      languageName: 'PHP',
      request: generatePhpSnippet(),
    });

    snippets.push({
      languageName: 'Java',
      request: generateJavaSnippet(),
    });

    snippets.push({
      languageName: 'JavaScript',
      request: generateNodejsSnippet(),
    });

    snippets.push({
      languageName: 'Go',
      request: generateGoSnippet(),
    });

    snippets.push({
      languageName: '.NET',
      request: generateDotNetSnippet(),
    });

    setCodeSnippets(snippets);
  }, [baseUrl, params, method, path]);

  return codeSnippets;
}

export default useCodeSnippets;
