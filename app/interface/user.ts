export interface User {
  id: number;
  displayName: string;
  mobile: string | null;
  email: string | null;
  createdDateTime: string;
  lastLoginDate: string;
  lastLoginIP: number | null;
  isPanelUser: number;
  isActive: number;
  authType: number;
  avatarUrl: string;
  avatar: string;
  rate: number;
}
