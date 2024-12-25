import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import AuthCard from '../components/ui/AuthCard';
import InputField from '../components/forms/InputField';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-background p-6 flex items-center">
      <AuthCard title="Sign Up">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <InputField form={form} name="name" label="Full Name" />
            <InputField form={form} name="email" label="Email" type="email" />
            <InputField
              form={form}
              name="password"
              label="Password"
              type="password"
            />
            <InputField
              form={form}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
            <div className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <div className="text-center text-sm">
                Already have an account?{' '}
                <Link to="/signin" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </AuthCard>
    </div>
  );
};

export default SignUp;
