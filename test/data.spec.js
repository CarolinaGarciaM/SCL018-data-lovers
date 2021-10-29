/* import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
 */
import { sortData, filterData} from '../src/data.js';


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
// se usa toEqual en vez de toBe porque el primero se usa para datos compuestos y el otro para primitivos
// toEqual y toBe son "matchers" de Jest. Sirven para testear valores. 
// toEqual compara características y toBe compara identidad exacta. 

  it('returns `an ordered list of films, in descending alphabetical position`', () => {
    const data = [
      { title: 'The Cat Returns' },
      { title: 'Spirited Away' },
      { title: 'Porco Rosso' },
      { title: 'My Neighbor Totoro' }
    ]

    const result = [
      { title: 'My Neighbor Totoro' },
      { title: 'Porco Rosso' },
      { title: 'Spirited Away' },
      { title: 'The Cat Returns' }
    ]
    expect(sortData(data, 'title')).toEqual(result);
  
  });
});
