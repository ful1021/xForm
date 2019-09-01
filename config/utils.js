process.argv.slice(2).forEach(arg => {
  if(/--NODE_ENV=/.test(arg)){
    process.env.NODE_ENV = arg.split('=')[1];
  }

  if(/--RELEASE_VERSION=/.test(arg)){{
    process.env.RELEASE_VERSION = arg.split('=')[1];
  }}
})

module.exports = {}