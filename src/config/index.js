export default () => ({
  STORE_KEY: "__covidonation__",
  IS_PRODUCTION: process.env.NODE_ENV === "production",
  APP_HOSTNAME: process.env.REACT_APP_HOSTNAME,
  APP_BASEPATH: process.env.PUBLIC_URL,
  COVID19_API_HOSTNAME: process.env.REACT_APP_COVID19_API_HOSTNAME
});
