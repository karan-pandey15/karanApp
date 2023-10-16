import React, { useState } from 'react';
import { Input, Button } from 'react-native';

const Data = () => {
  const [email, setEmail] = useState('');

  const onSubmit = async () => {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      // Success!
    } else {
      // Error!
    }
  };

  return (
    <form>
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Submitbtn" onPress={onSubmit} />
    </form>
  );
};

export default Data;
