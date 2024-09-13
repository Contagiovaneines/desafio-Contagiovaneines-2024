import { RecintosZoo } from './recintos-zoo';

let zoo;

beforeEach(() => {
    zoo = new RecintosZoo();
});

test('deve retornar recintos viáveis para MACACO', () => {
    const resultado = zoo.analisaRecintos('MACACO', 2);
    expect(resultado).toEqual({
        recintosViaveis: [
            'Recinto 1 (espaço livre: 5 total: 10)',
            'Recinto 2 (espaço livre: 3 total: 5)',
            'Recinto 3 (espaço livre: 2 total: 7)',
            'Recinto 5 (espaço livre: 4 total: 9)',
        ],
    });
});

test('deve retornar erro para animal inválido', () => {
    const resultado = zoo.analisaRecintos('DINOSSORO', 1);
    expect(resultado).toEqual({ erro: 'Animal inválido' });
});

test('deve retornar erro para quantidade inválida', () => {
    const resultado = zoo.analisaRecintos('macaco', -1);
    expect(resultado).toEqual({ erro: 'Quantidade inválida' });
});

test('deve retornar erro para quantidade inválida não numérica', () => {
    const resultado = zoo.analisaRecintos('macaco', 'dois');
    expect(resultado).toEqual({ erro: 'Quantidade inválida' });
});

test('deve retornar erro para nenhum recinto viável', () => {
    const resultado = zoo.analisaRecintos('crocodilo', 10);
    expect(resultado).toEqual({ erro: 'Não há recinto viável' });
});
