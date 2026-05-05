import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { searchZipCode } from "./fetcher.js";

const server = new McpServer({
  name: "mcp-server-zipcode-jp",
  version: "1.0.0",
});

server.registerTool("search_zip_code", {
  description: "Search zip code data",
  inputSchema: z.object({
    zipCode: z.string(),
  }),
}, async (args) => {
  const result = await searchZipCode(args.zipCode);

  if (!result.results || result.results.length === 0) {
    return {
      content: [
        {
          type: "text",
          text: "No results found",
        },
      ],
    };
  }

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(result),
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Zip Code JP MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
