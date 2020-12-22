module.exports = {
  apps: [{
    name: 'aws-practice',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-188-82-218.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:baezus/aws-practice.git',
      path: '/home/ubuntu/aws-practice',
      'post-deploy': 'pm2 startOrRestart ecosystem.config.js'
    }
  }
}
