
export function randomNumberGenerator(): string {

  const min: number = 10000;
  const max: number = 99999;
  const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber.toString();
  
}