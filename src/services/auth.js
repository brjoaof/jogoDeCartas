export const login = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          name: "João Felipe",
          email: "brjoaof@gmail.com",
        },
        token: "skldjfdsjklh23962579oashlasflhfl20382fslkdfskdf",
      });
    }, 2000);
  });
};
