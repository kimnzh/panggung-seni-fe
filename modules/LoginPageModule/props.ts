// interfaces
export interface ResponseProps {
  code: string;
  message: string;
}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

// constants
export const roles = ["PENGGUNA", "KOMUNITAS"];
