import { Client } from "@notionhq/client"
import * as dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()
const port = process.env.PORT

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

async function addToDatabase(databaseId, title) {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: title,
              },
            },
          ],
        },
      },
    })
    console.log(response)
  } catch (error) {
    console.error(error.body)
  }
}

app.get("/", (req, res) => {
  addToDatabase(databaseId, "From localhost").then(() => {
    console.log("added...")
  })
  res.send("Express + TypeScript Server")
})

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`)
})
