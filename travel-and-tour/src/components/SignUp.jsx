import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

function SignUp() {
  const { signup } = useAuth(); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    if (!termsAgreed) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    // Call signup function from context
    signup(email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md mx-auto mt-10">
        <CardHeader
          variant="gradient"
          color="purple"
          className="mb-4 grid h-24 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          <Typography color="gray" className="text-center text-base font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <Input
            label="Your Name"
            size="lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-purple-900 ml-1"
                  >
                    Terms and Conditions
                  </a>
                </Typography>
              }
              checked={termsAgreed}
              onChange={(e) => setTermsAgreed(e.target.checked)}
            />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="purple"
            fullWidth
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
