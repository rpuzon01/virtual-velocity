import { Alert, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SubmitHandler, useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useLoginMutation } from '../redux/slices/authApiSlice';
import { setCredentials } from '../redux/slices/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { isAPIError } from '../utils';
import { useGetCartQuery } from '../redux/slices/ordersApiSlice';
import { useNavigate } from 'react-router-dom';

type LoginInputs = {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginInputs>();
  const [login, {isError, error, isLoading}] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<LoginInputs> = async ({username, password}) => {
    navigate('/');
    const { token, user } = await login({username, password}).unwrap();
    dispatch(setCredentials({token, user}))
    localStorage.setItem('token', token);
    swal(`Welcome back ${username}!`, 'Good to see you again.');
  };

  return (
    <div className="flex gap-2 items-center">
      {isError && (
        isAPIError(error) &&
        <Alert className='m-0 p-2' variant="danger">
          {error.data.message}
        </Alert>
      )}
      <Form 
        className='flex gap-2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl
          {...register('username', {
            required: 'Username is required'
          })}
          type='text'
          placeholder='username'
        />
        <FormControl
          {...register('password', {
            required: 'Password is required'
          })}
          type='password'
          placeholder='password'
        />
        <Button 
          disabled={isLoading}
          type='submit'
        >Login</Button>
      </Form>
    </div>
  );
};

export default Login;
