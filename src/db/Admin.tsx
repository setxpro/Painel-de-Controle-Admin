import { faker } from '@faker-js/faker';
import IMask from 'imask';


let cpf = IMask.createMask({
    mask: '000.000.000-00',
});
let cel = IMask.createMask({
    mask: '+00 (00) 00000-0000',
});

export const AdminDB = {
    user1: {
        id: 1,
        avatar: faker.image.avatar(),
        nome: faker.name.findName(),
        email: faker.internet.email(),
        idade: 25,
        aniversario: '01/12/1996',
        endereço: faker.address.city(),
        cpf: cpf.resolve('15317225710'),
        cargo: 'Developer',
        desktop: 'MacOS',
        cel:cel.resolve('5521966077757')
    },
    user2: {
        id: 2,
        avatar: faker.image.avatar(),
        nome: faker.name.findName(),
        email: faker.internet.email(),
        idade: 25,
        aniversario: '01/12/1996',
        endereço: faker.address.city(),
        cpf: cpf.resolve('15317225710'),
        cargo: 'Developer',
        desktop: 'MacOS',
        cel: cel.resolve('5521966077757')
    },
    user3: {
        id: 3,
        avatar: faker.image.avatar(),
        nome: faker.name.findName(),
        email: faker.internet.email(),
        idade: 25,
        aniversario: '01/12/1996',
        endereço: faker.address.city(),
        cpf: cpf.resolve('15317225710'),
        cargo: 'Developer',
        desktop: 'MacOS',
        cel: cel.resolve('5521966077757')
    },
    user4: {
        id: 4,
        avatar: faker.image.avatar(),
        nome: faker.name.findName(),
        email: faker.internet.email(),
        idade: 25,
        aniversario: '01/12/1996',
        endereço: faker.address.city(),
        cpf: cpf.resolve('15317225710'),
        cargo: 'Developer',
        desktop: 'MacOS',
        cel: cel.resolve('5521966077757'),
    },user5: {
        id: 5,
        avatar: faker.image.avatar(),
        nome: faker.name.findName(),
        email: faker.internet.email(),
        idade: 25,
        aniversario: '01/12/1996',
        endereço: faker.address.city(),
        cpf: cpf.resolve('15317225710'),
        cargo: 'Developer',
        desktop: 'MacOS',
        cel: cel.resolve('5521966077757'),
    },
    user6: {
        id: 6,
        avatar: faker.image.avatar(),
        nome: faker.name.findName(),
        email: faker.internet.email(),
        idade: 25,
        aniversario: '01/12/1996',
        endereço: faker.address.city(),
        cpf: cpf.resolve('15317225710'),
        cargo: 'Developer',
        desktop: 'MacOS',
        cel: cel.resolve('5521966077757')
    }
}