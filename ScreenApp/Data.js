import React, { useState } from 'react';
import { Input, Button } from 'react-native';

const Data = () => {
  const [email, setEmail] = useState('');

  const onSubmit = async () => {
    const response = await fetch('https://5ec0-2401-4900-1c5a-9e08-98bd-3383-3a4c-ab47.ngrok-free.app/register', {
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

      <Input placeholder="Disbursed" >
      
      </Input>
      
      <Button title="Submitbtn" onPress={onSubmit} />
    </form>
  );
};

export default Data;
