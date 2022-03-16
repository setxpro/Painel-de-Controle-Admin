import { faker } from '@faker-js/faker';
import IMask from 'imask';

    let masked = IMask.createMask({
        mask: '+55 (21) 90000-0000',
    });
  
  
    export const dadosAgenda = {
    
    saller: {
        
        name: faker.name.findName(),
        pessoas: 9,
        email: faker.internet.email(),
        cel: masked.resolve(faker.phone.phoneNumber()),
  
        item: {
          id: 1,
          title: 'Mercedes',
          date: '01 de Jan',
        }
    },
    saller2: {
      id: 2,
      name: faker.name.findName(),
      pessoas: 9,
      email: faker.internet.email(),
      cel: masked.resolve(faker.phone.phoneNumber()),
  
      item: {
        id: 2,
        title: 'BMW',
        date: '01 de Fev',
      }
    }
  
  }