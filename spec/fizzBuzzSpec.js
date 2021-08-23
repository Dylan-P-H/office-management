describe('fizzbuzz', () => {

  it('Any number divisible by 3 and 5 should return FizzBuzz', () => {
    let result = fizzbuzz(30);
    expect(result[14]).toEqual('FizzBuzz')
    expect(result[29]).toEqual('FizzBuzz')
  });

  it('Any number divisible by 3 should return Fizz', () => {
    let result = fizzbuzz(6);
    expect(result[2]).toEqual('Fizz')
    expect(result[5]).toEqual('Fizz')
  });

  it('Any number divisible by 5 should return Buzz', () => {
    let result = fizzbuzz(10);
    expect(result[4]).toEqual('Buzz')
    expect(result[9]).toEqual('Buzz')
  });
});