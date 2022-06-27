export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  uid: string | null;
  errorMessage: string;
}

type AuthAction =
  | {type: 'signUp'; payload: {token: string; uid: string}}
  | {type: 'addError'; payload: string}
  | {type: 'removeError'}
  | {type: 'notAuthenticated'}
  | {type: 'logout'};

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        uid: null,
        status: 'not-authenticated',
        token: '',
        errorMessage: action.payload,
      };
      case 'removeError':
        return {
          ...state,
          errorMessage: ''
        }
      case 'signUp':
        return {
          ...state,
          errorMessage: '',
          status: 'authenticated', 
          token: action.payload.token,
          uid: action.payload.uid,
        }
      case 'logout':
      case 'notAuthenticated': 
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        uid: null
      }
    default:
      return state;
  }
};
