import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // turbo: {} // Add this if you encounter plugin resolution issues
  }
};

export default withNextIntl(nextConfig);