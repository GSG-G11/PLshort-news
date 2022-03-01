// ----- Helper Selector ---------------

const checkEmail = () => {
  const { value: email } = querySelector('#email');
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  removeHandleError('#email-label-error');
  if (!regexEmail.test(email) || email.length <= 0) {
    handleError(
      '#email-label',
      'email-label-error',
      'Please Enter a valid E-mail',
    );
  } else if (email.length <= 8 || email.length >= 100) {
    handleError(
      '#email-label',
      'email-label-error',
      'Email at least 8 characters,and less than 100 characters',
    );
  } else {
    return true;
  }
};

const checkPassword = () => {
  const { value: password } = querySelector('#password');
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  removeHandleError('#password-label-error');
  if (!regexPassword.test(password) || password.length <= 0) {
    handleError(
      '#password-label',
      'password-label-error',
      'Please Enter a valid Password,password has (0-9,a-z,A-Z,%!@#...)',
    );
  } else if (password.length <= 8 || password.length >= 255) {
    handleError(
      '#password-label',
      'password-label-error',
      'Password at least 8 characters,and less than 255 characters',
    );
  } else {
    return true;
  }
};

const handleSubmitFrom = (event) => {
  if (checkEmail() && checkPassword() ) {
    event.preventDefault();
    //redirect to news page
    window.location.assign('/home');
    // window.location.href = '../news.html';
  } else {
    event.preventDefault();
  }
};

addListener('#email', 'focusout', checkEmail);
addListener('#password', 'focusout', checkPassword);
addListener('form', 'submit', handleSubmitFrom);



