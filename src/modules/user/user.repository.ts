import { ICRUD } from 'src/utils/interfaces/ICRUD';
import {User} from './entities/user.entity'

export const USER_REPOSITORY = 'UserRepository';

export interface UserRepository extends ICRUD<User> {}