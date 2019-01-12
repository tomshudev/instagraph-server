class LoginFailedException(Exception):

    def __init__(self, message):
        super(LoginFailedException, self).__init__(message)


class UserNotFoundException(Exception):

    def __init__(self, message):
        super(UserNotFoundException, self).__init__(message)


class MediaNotFoundException(Exception):

    def __init__(self, message):
        super(MediaNotFoundException, self).__init__(message)


class AccountBlockedException(Exception):

    def __init__(self, message):
        super(AccountBlockedException, self).__init__(message)


class PasswordIncorrectException(Exception):

    def __init__(self, message):
        super(PasswordIncorrectException, self).__init__(message)


class LimitReachedException(Exception):

    def __init__(self, message):
        super(LimitReachedException, self).__init__(message)


class LoginRequired(Exception):

    def __init__(self, message):
        super(LoginRequired, self).__init__(message)


class SentryBlockException(Exception):

    def __init__(self, message):
        super(SentryBlockException, self).__init__(message)