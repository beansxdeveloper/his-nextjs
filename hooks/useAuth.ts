import { useMutation, useQuery } from '@tanstack/react-query';
import { authService } from '@/services/auth.service';
import { LoginCredentials, AuthResponse } from '@/types/auth';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (data: AuthResponse) => {
      // Store the auth token and user data
      Cookies.set('auth_token', data.user.password, { expires: 7 });
      Cookies.set('user', JSON.stringify(data.user), { expires: 7 });

      // Set default language from user preferences
      const userLang = data.user.preflanguid.relatedvalue;
      if (userLang) {
        Cookies.set('i18next', userLang);
      }

      // Redirect to dashboard
      // router.push('/dashboard');
    },
  });

  // Query to check authentication status
  const { data: isAuthenticated, isLoading: isCheckingAuth } = useQuery({
    queryKey: ['auth'],
    queryFn: authService.checkAuth,
    staleTime: Infinity,
  });

  const logout = () => {
    authService.logout();
  };

  return {
    login: loginMutation.mutate,
    logout,
    isLoading: loginMutation.isPending || isCheckingAuth,
    isAuthenticated,
    error: loginMutation.error,
  };
}