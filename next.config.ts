import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @use "@/assets/scss/variables" as *;
      @use "@/assets/scss/mixins" as *;
    `,
  },
};

export default nextConfig;
