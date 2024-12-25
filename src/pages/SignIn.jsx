import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import AuthCard from '../components/ui/AuthCard';
import InputField from '../components/forms/InputField';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-background p-6 flex items-center">
      <AuthCard title="Sign In">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <InputField form={form} name="email" label="Email" type="email" />
            <InputField
              form={form}
              name="password"
              label="Password"
              type="password"
            />
            <div className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              <div className="text-center space-y-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
                <div className="text-sm">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </AuthCard>
    </div>
  );
};

export default SignIn;
