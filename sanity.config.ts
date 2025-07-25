'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\app\admin\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

const allowOrigins = ['http://localhost:*'];


if (process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_URL) {
  allowOrigins.push(process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_URL);
}

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      previewUrl: {
        initial: process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_URL ?? "http://localhost:3000",
        previewMode: {
          enable: '/api/draft',
          disable: '/api/draft/disable',
        },
      },
      allowOrigins: allowOrigins,
    }),
  ],
})
