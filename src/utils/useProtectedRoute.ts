import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useProtectedRoute = () => {
  const router = useRouter();

  const isAuthenticated = useSelector((state)=>state.isLoggedIn);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/Login'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, router]);
};

export default useProtectedRoute;