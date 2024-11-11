export interface Department {
  name: string;
  uid: {
    _id: string;
    name: string;
    code: string;
  };
}

export interface Role {
  name: string;
  uid: {
    _id: string;
    code: string;
    name: string;
  };
  _id: string;
}

export interface PreferredLanguage {
  _id: string;
  valuedescription: string;
  valuecode: string;
  relatedvalue: string;
}

export interface User {
  _id: string;
  defaultdepartment: Department;
  defaultrole: {
    name: null | string;
    uid: string;
  };
  userdepartments: any[];
  roles: Role[];
  name: string;
  activefrom: string;
  iscareprovider: boolean;
  isradiologist: boolean;
  islaboratorist: boolean;
  orguid: string;
  defaultorguid: string;
  alldepartments: boolean;
  loginid: string;
  modifiepassworddat: string;
  password: string;
  islocked: boolean;
  noofinvalidlogins: number;
  userimageuid: null | string;
  activeto: null | string;
  description: string;
  parentorguid: string;
  preflanguid: PreferredLanguage;
  orgcode: string;
  organisationcode: string;
}

export interface AuthResponse {
  user: User;
}

export interface LoginCredentials {
  username: string;
  password: string;
}