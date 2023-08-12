const PASSWORD_RULE =
  /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])(?!.*\s).{8,}$/;

export const REGEX = { PASSWORD_RULE };