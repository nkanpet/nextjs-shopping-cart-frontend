const {useState} = require('react');
const {useSelector} = require('react-redux');

export const useAuth = () => {
  const state = useSelector(state => state.auth);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const login = (username, password) => {
    
  };

  return {state, isSubmitting, login};
};
