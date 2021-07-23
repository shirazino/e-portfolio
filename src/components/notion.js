import { Client } from "@notionhq/client";

export async function ToNotion(blockID) {
  // Listen on a specific host via the HOST environment variable
  var host = process.env.HOST || "0.0.0.0";
  // Listen on a specific port via the PORT environment variable
  var port = process.env.PORT || 8080;

  var cors_proxy = require("cors-anywhere");
  cors_proxy
    .createServer({
      originWhitelist: [], // Allow all origins
      requireHeader: ["origin", "x-requested-with"],
      // removeHeaders: ["cookie", "cookie2"],
    })
    .listen(port, host, function () {
      console.log("Running CORS Anywhere on " + host + ":" + port);
    });

  const notion = new Client({ auth: process.env.AUTH });
  //   const blockId = "9bd15f8d-8082-429b-82db-e6c4ea88413b";
  // try {
  //   const response = await notion.blocks.children.append({
  //     block_id: process.env.BLOCK,
  //     children: [
  //       {
  //         object: "block",
  //         type: "heading_2",
  //         heading_2: {
  //           text: [
  //             {
  //               type: "text",
  //               text: {
  //                 content: "Lacinato kale",
  //               },
  //             },
  //           ],
  //         },
  //       },
  //       {
  //         object: "block",
  //         type: "paragraph",
  //         paragraph: {
  //           text: [
  //             {
  //               type: "text",
  //               text: {
  //                 content: "the content",
  //                 link: {
  //                   url: "https://en.wikipedia.org/wiki/Lacinato_kale",
  //                 },
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   });
  //   console.log(response);
  //   return response;
  // } catch (error) {
  //   console.log(error);
  // }

  const response = await notion.blocks.children.list({
    block_id: blockID,
    page_size: 50,
  });
  console.log(response);
  return response;
}

// export function Cors() {

// }
