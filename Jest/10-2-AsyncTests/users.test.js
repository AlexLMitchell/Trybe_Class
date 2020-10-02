/* **Código-base para os exercícios 2 e 3:**

O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa
busca é uma *Promise*, que é utilizada pelo método `getUserName`. */

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

/* Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso
em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs
existem.
 */
describe('getUserName with promise', () => {
  test('name returns', () => {
    expect.assertions(1);
    return getUserName(4).then((name) => expect(name).toEqual('Mark'));
  });

  test('name doesnt exist', () => {
    expect.assertions(1);
    return getUserName(1).catch((error) =>
      expect(error).toEqual({ error: 'User with 1 not found.' })
    );
  });
});

/* Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
Dica: Utilize o try/catch para o caso de erro.
 */

describe('getUserName Async/Await', () => {
  test('name returns async', async () => {
    const userID = await getUserName(4);
    expect(userID).toEqual('Mark');
  });

  test('name doesnt exist async', async () => {
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 3 not found.' });
    }
  });
});
