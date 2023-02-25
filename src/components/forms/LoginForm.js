import {Button, Card, Input, Row, Spacer, Text} from '@nextui-org/react';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';

const LoginForm = ({title = 'Login', errors, isSubmitting, onSubmit = () => {}}) => {
  const {register, setError, handleSubmit, formState} = useForm({
    shouldFocusError: true,
    reValidateMode: 'onChange',
  });

  const onPress = () => {
    handleSubmit(onSubmit)();
  };

  useEffect(() => {
    if (errors) {
      Object.entries(errors).forEach(([key, value]) => {
        setError(key, {
          type: 'manual',
          message: value,
        });
      });
    }
  }, [errors]);

  return (
    <Card>
      <Card.Header css={{justifyContent: 'center'}}>
        <Text>{title}</Text>
      </Card.Header>
      <Card.Body>
        <Input
          {...register('username', {required: 'This is required field'})}
          placeholder="Username"
          aria-label="Username"
          helperText={formState.errors.username?.message}
          helperColor="error"
          disabled={isSubmitting}
        />
        <Spacer />
        <Input.Password
          {...register('password', {required: 'This is required field'})}
          placeholder="Password"
          aria-label="Password"
          helperText={formState.errors.password?.message}
          helperColor="error"
          disabled={isSubmitting}
        />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between" align="center">
          <Button onPress={onPress} disabled={isSubmitting}>
            Login
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default LoginForm;
