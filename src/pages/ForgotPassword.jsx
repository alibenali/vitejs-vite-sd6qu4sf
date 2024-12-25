import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import AuthCard from '../components/ui/AuthCard';
import InputField from '../components/forms/InputField';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const form = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-background p-6 flex items-center">
      <AuthCard title="Reset Password">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <InputField form={form} name="email" label="Email" type="email" />
            <div className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
              <div className="text-center text-sm">
                Remember your password?{' '}
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

export default ForgotPassword;
