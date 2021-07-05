function sum(a: number, b: number): number {
  return a + b;
}

sum(10,20,30,40)

// 옵셔널 파라미터
function log(a: string, b?: string){
  return (a + b)
}
log('d');