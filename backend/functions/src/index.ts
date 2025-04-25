import { neon } from "@neondatabase/serverless";
import { defineString } from "firebase-functions/params";
import { onCall } from "firebase-functions/v2/https";

// Define secrets for your Neon DB connection
const NEON_CONNECTION_STRING = defineString("NEON_CONNECTION_STRING");

// onCall function to get all projects
export const getProjects = onCall(
  {
    maxInstances: 10,
  },
  async (request) => {
    try {
      // Create a Neon SQL client with the connection string
      const sql = neon(NEON_CONNECTION_STRING.value());

      // Query all projects
      const projects = await sql`SELECT * FROM projects ORDER BY id ASC`;

      // Return projects
      return {
        success: true,
        data: projects,
      };
    } catch (error: any) {
      console.error("Error fetching projects:", error);
      throw new Error(`Failed to fetch projects: ${error.message}`);
    }
  }
);
