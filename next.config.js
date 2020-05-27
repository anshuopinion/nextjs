const path = require('path')
require('dotenv').config
const withSass = require('@zeit/next-sass')
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {

    env:{
            API_URL:process.env.API_URL
    },
    
    publicRuntimeConfig:{
        API_URL:process.env.API_URL
    }
   ,
    webpack:config =>{
        config.resolve.alias['components'] = path.join(__dirname,
            'components')
            config.resolve.alias['public'] = path.join(__dirname,
                'public')

                return config
        
    }
}

module.exports = withPlugins(
    
    
    [withImages(withSass({
        cssModules: true
      }))],

      nextConfig
);


