function knightMoves(start, end) {
  const knightMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];

  function getValidMoves(position) {
    const [x, y] = position;

    return knightMoves
      .map(([dx, dy]) => [dx + x, dy + y])
      .filter(([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8);
  }

  const queue = [[start, [start]]];
  const visited = new Set();

  visited.add(start.toString());

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves. The path:`);

      path.forEach((move) => console.log(move));

      return path;
    }

    const validMoves = getValidMoves(current);

    for (const move of validMoves) {
      const key = move.toString();

      if (!visited.has(key)) {
        visited.add(key);

        queue.push([move, [...path, move]]);
      }
    }
  }
}

knightMoves([2, 0], [7, 6]);
