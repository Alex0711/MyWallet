const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  login: `${API}/${VERSION}/login`,
  user: {
    getUser: (id) => `${API}/${VERSION}/users/${id}`,
  },
  users: `${API}/${VERSION}/users`,
  wallet: {
    postOperation: (id) => `${API}/${VERSION}/wallet/${id}`,
  },
};

export default endPoints;
