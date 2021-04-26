import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
        placeholder="Full Name"
        value={name}
        onChange={({ target }) => {
          setName(target.value)
        }} required
      />
      <input type='tel'
        placeholder= "Phone Number"
        value={phone}
        pattern='(\(?(\b[0-9]{2,3}|0((x|[0-9]){2,3}[0-9]{2}))\)?\s*[0-9]{4,5}[- ]*[0-9]{4}\b)'
        onChange={({target}) => {
          setPhone(target.value)
    }}
    />
      <input type='email'
        placeholder="E-mail"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value)
        }}
        required
      />
      <input type='submit'
      />
    </form>
  );
};