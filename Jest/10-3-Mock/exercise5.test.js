/* 
5- Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após 
repetir a implementação, restaure a implementação original e crie os testes necessários para validar.  
*/

const service = require('./exercise');

describe('testando implementações', () => {
  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const first = jest
      .spyOn(service, 'firstFunction')
      .mockImplementation((a) => a.toLowerCase());

    expect(first('UPPERCASE')).toBe('uppercase');
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith('UPPERCASE');

    service.firstFunction.mockRestore();

    expect(service.firstFunction('lowercase')).toBe('LOWERCASE');
  });
});
