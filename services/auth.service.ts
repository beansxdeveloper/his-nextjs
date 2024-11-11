import { axiosInstance } from '@/lib/axios';
import { AuthResponse, LoginCredentials } from '@/types/auth';
import Cookies from 'js-cookie';

const MOCK_USER_RESPONSE: AuthResponse = {
  user: {
    _id: "66daa296f16bcf00694bfd1e",
    defaultdepartment: {
      name: "MANAGEMENT",
      uid: {
        _id: "569cb69f2d10b2d7eaf6fa5f",
        name: "MANAGEMENT",
        code: "MANAGEMENT"
      }
    },
    defaultrole: {
      name: null,
      uid: "64dc3b23bd512e2a6e75c56a"
    },
    userdepartments: [],
    roles: [
      {
        name: "Admin system Group",
        uid: {
          _id: "633ffcefb00e52001222051e",
          code: "ADMINSYSTEM",
          name: "Admin system Group"
        },
        _id: "65dd98d986a74000382e7be4"
      },
      {
        name: "Admin system CH3",
        uid: {
          _id: "64dc3b23bd512e2a6e75c56a",
          code: "ADMINSYSTEMCH003",
          name: "Admin system CH3"
        },
        _id: "65dd98d986a74000382e7be5"
      }
    ],
    name: "MICROSERVICES",
    activefrom: "2022-09-26T08:09:56.099Z",
    iscareprovider: false,
    isradiologist: false,
    islaboratorist: false,
    orguid: "633115e186198309e5a1d8f0",
    defaultorguid: "633115e186198309e5a1d8f0",
    alldepartments: true,
    loginid: "microservices",
    modifiepassworddat: "2024-12-14T10:19:19.014Z",
    password: "5a0e7d596d5f0b88a93651179cae791770a40bbd71371847703a26c004336b24",
    islocked: false,
    noofinvalidlogins: 0,
    userimageuid: null,
    activeto: null,
    description: "โรงพยาบาลจุฬารัตน์ 3 อินเตอร์ (UAT)",
    parentorguid: "569794170946a3d0d588efe6",
    preflanguid: {
      _id: "59eeee62a277d1052ea647c8",
      valuedescription: "Thai",
      valuecode: "THAI",
      relatedvalue: "th"
    },
    orgcode: "CH003",
    organisationcode: "CH3"
  }
};

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      // For development/mock
      if (process.env.NODE_ENV === 'development') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (credentials.username === 'admin' && credentials.password === 'admin') {
          return MOCK_USER_RESPONSE;
        }
        throw new Error('Invalid credentials');
      }

      // For production
      const response = await axiosInstance.post<AuthResponse>(
        '/framework/security/authenticate/microservices/5a0e7d596d5f0b88a93651179cae791770a40bbd71371847703a26c004336b24',
        credentials
      );
      return response.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  },

  async checkAuth(): Promise<boolean> {
    try {
      const token = Cookies.get('auth_token');
      return !!token;
    } catch (error) {
      return false;
    }
  },

  logout() {
    Cookies.remove('auth_token');
    Cookies.remove('user');
    window.location.href = '/login';
  },
};