const baseApi = (url: string) => {
  return process.env.VUE_APP_BASE_ENDPOINT + url;
};

export default baseApi;
