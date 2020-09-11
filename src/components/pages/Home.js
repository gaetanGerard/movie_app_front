import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atom/authAtom';

// Import custom Component
import Navbar from '../ui/Navbar';

// Import material-ui Component
import Box from '@material-ui/core/Box';

const Home = () => {
  const user = useRecoilValue(userState);

  // console.log(user);

  // Read this part of the documentation for learn about role and how to set them
  // https://firebase.google.com/docs/auth/admin/custom-claims
  // First i would like to have 3 kind of user
  // 1) superAdmin: can manage everything in the app and set role to user if needed and application content
  // 2) Admin: can manage application content
  // 3) user: can only access app and change its own profile

  return (
    <Box>
      <Navbar />
      This is the home of the Application
    </Box>
  );
};

export default Home;
