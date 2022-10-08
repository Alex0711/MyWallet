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
    deleletOperation: (id) => `${API}/${VERSION}/operations/${id}`,
    patchOperation: (id) => `${API}/${VERSION}/operations/${id}`,
    getOperation: (id) => `${API}/${VERSION}/operations/${id}`,
    getEntries: (id) => `${API}/${VERSION}/users/${id}/entries`,
    getPayments: (id) => `${API}/${VERSION}/users/${id}/payments`,
  },
};

export default endPoints;
