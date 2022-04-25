module.exports = {
  reactStrictMode: true,
}

const dotenv = require('dotenv').config()

module.exports = {
  env: {
    SITE_DOMAIN_URL: 'https://perucheck.pe',
    KEY_FB_ID: '184649543590704',
    KEY_FB_PAGE: '116832580445194',
    CNAME_CRONOS: 'https://imgmedia.perucheck.pe',
    SITE_TWITTER: 'https://twitter.com/peru_check',
    SITE_TWITTER_ACCOUNT: 'perucheck_pe',
    SITE_FACEBOOK: 'https://www.facebook.com/Per%C3%BACheck-116832580445194',

    IMG_16x16: '/static/images/16x16_v1.png',
    IMG_32x32: '/static/images/32x32_v1.png',
    IMG_150x150: '/static/images/150x150_v1.png',
    IMG_180x180: '/static/images/180x180_v1.png',
    IMG_192x192: '/static/images/192x192_v1.png',
    META_IMAGE_DEFAULT: '/static/images/perucheck_meta_image.png',

    ...dotenv.parsed
  }
}