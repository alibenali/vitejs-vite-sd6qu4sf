import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
        <div className="flex gap-4">
          <Button onClick={() => navigate('/signin')}>Sign In</Button>
          <Button variant="outline" onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
