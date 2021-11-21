export default {
  // eslint-disable-next-line
  login: (username: string, password: string): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(username, password);
        resolve({
          data: {
            access_token: 'access_token',
          },
        });
      }, 5000);
      // reject(error);
    });
  },
  // eslint-disable-next-line
  validate: (token: string): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(token);
        resolve({
          data: {
            access_token: 'access_token',
          },
        });
      }, 1000);
      // reject(error);
    });
  },
};
