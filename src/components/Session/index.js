import React, { useState, useMemo } from "react";

import { useDispatch } from "react-redux";

import { Form, Input } from "../Unform";

import {
  MdEmail,
  MdPerson,
  MdVpnKey,
  MdLockOpen,
  MdLock,
} from "react-icons/md";

import { Section, Container, Submit, PasswordIcon } from "./styles";

import { sessionStoreRequest } from "../../store/modules/Session/actions";
import { storeUserRequest } from "../../store/modules/User/actions";

export default function Session() {
  const dispatch = useDispatch();

  const [isSignin, setIsSgin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  function handleForm(data) {
    const siginOrSiginUp = isSignin ? storeUserRequest : sessionStoreRequest;

    dispatch(siginOrSiginUp(data));
  }
  const passwordType = useMemo(() => (showPassword ? "text" : "password"), [
    showPassword,
  ]);

  return (
    <Section>
      <Container>
        <Form handleForm={handleForm}>
          {isSignin && (
            <label>
              Name:
              <MdPerson size={24} />
              <Input type="name" name="name" />
            </label>
          )}

          <label>
            E-mail:
            <Input type="email" name="email" />
            <MdEmail size={24} />
          </label>

          <label>
            Password:
            <MdVpnKey size={24} />
            <Input type={passwordType} name="password" />
            <PasswordIcon onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <MdLock size={24} /> : <MdLockOpen size={24} />}
            </PasswordIcon>
          </label>
          <Submit type="submit">{isSignin ? "Login" : "Create account"}</Submit>
          <span>
            {!isSignin && (
              <>
                <span>if you dont have account</span>
                <button type="button" onClick={() => setIsSgin(true)}>
                  Register
                </button>
              </>
            )}

            {isSignin && (
              <>
                <span> if you have account</span>
                <button type="button" onClick={() => setIsSgin(false)}>
                  Sigin In
                </button>
              </>
            )}
          </span>
        </Form>
      </Container>
    </Section>
  );
}
