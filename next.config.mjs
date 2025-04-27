import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config options here
};

// Wrap nextConfig once with withPayload
export default withPayload(nextConfig);
