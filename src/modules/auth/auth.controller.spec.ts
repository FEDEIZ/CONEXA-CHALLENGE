import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

// describe('AuthController', () => {
//   let controller: AuthController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AuthController],
//       providers: [AuthService],
//     }).compile();

//     controller = module.get<AuthController>(AuthController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });

describe('AuthController', () =>{

  let controller: AuthController;
  let service: AuthService
  let userService : UserService
  let jwtService: JwtService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, UserService, JwtService]
    }).compile();

    service = moduleRef.get<AuthService>(AuthService);
    controller = moduleRef.get<AuthController>(AuthController);
  });

  describe('signIn', ()=>{
    it('should return acces token if the user sign in correctly',
    async ()=> {
      const result = ['test'];
      //jest.spyOn()
    })
  })

})