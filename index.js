const sum = (a, b) => {
    return a + b; // 단순 덧셈
  };
  
  const abs = (a, b) => {
    return Math.abs(a) + Math.abs(b); // 절대값 계산 후 덧셈
  };
  
  exports.sum = sum;
  exports.abs = abs;