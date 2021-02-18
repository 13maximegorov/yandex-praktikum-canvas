const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
document.addEventListener('keydown', moveRect)

const WIDTH = 400
const HEIGHT = 400

canvas.width = WIDTH
canvas.height = HEIGHT
ctx.fillStyle = '#fff'

const HORIZONTAL_LINE_WIDTH = 100
const VERTICAL_LINE_HEIGHT = 150
const MARGIN = 22
const LINE_WIDTH = 16
const VERTICAL_OFFSET = 106
const HORIZONTAL_OFFSET = 112
const COMMON_OFFSET = MARGIN + LINE_WIDTH

const squares = [
  // top squares
  {
    minX: HORIZONTAL_OFFSET + COMMON_OFFSET,
    minY: VERTICAL_OFFSET,
    width: 25,
    height: LINE_WIDTH
  },
  {
    minX: HORIZONTAL_OFFSET + COMMON_OFFSET + 25,
    minY: VERTICAL_OFFSET,
    width: 25,
    height: LINE_WIDTH
  },
  {
    minX: HORIZONTAL_OFFSET + COMMON_OFFSET + 25 * 2,
    minY: VERTICAL_OFFSET,
    width: 25,
    height: LINE_WIDTH
  },
  {
    minX: HORIZONTAL_OFFSET + COMMON_OFFSET + 25 * 3,
    minY: VERTICAL_OFFSET,
    width: 25,
    height: LINE_WIDTH
  },
  // left squares
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET,
    width: LINE_WIDTH,
    height: 25
  },{
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25,
    width: LINE_WIDTH,
    height: 25
  },
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 2,
    width: LINE_WIDTH,
    height: 25
  },
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 3,
    width: LINE_WIDTH,
    height: 25
  },
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 4,
    width: LINE_WIDTH,
    height: 25
  },
  {
    minX: HORIZONTAL_OFFSET,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 5,
    width: LINE_WIDTH,
    height: 25
  },
  // right squares
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET,
    width: LINE_WIDTH,
    height: 25
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25,
    width: LINE_WIDTH,
    height: 25
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 2,
    width: LINE_WIDTH,
    height: 25
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 3,
    width: LINE_WIDTH,
    height: 25
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 4,
    width: LINE_WIDTH,
    height: 25
  },
  {
    minX: HORIZONTAL_OFFSET + LINE_WIDTH + MARGIN * 2 + HORIZONTAL_LINE_WIDTH,
    minY: VERTICAL_OFFSET + COMMON_OFFSET + 25 * 5,
    width: LINE_WIDTH,
    height: 25
  },
]

const init = () => updateRect(squares)

init()

const clearRect = () => ctx.clearRect(0, 0, WIDTH, HEIGHT)

function moveRect(event) {
  console.log(event.keyCode)
  switch (event.keyCode) {
    case 37:
      updateSquares('x', -25, WIDTH)
      break
    case 38:
      updateSquares('y', -25, HEIGHT)
      break
    case 39:
      updateSquares('x', 25, WIDTH)
      break
    case 40:
      updateSquares('y', 25, HEIGHT)
      break
  }
}

const updateSquares = (axis, step, max) => {
  clearRect()

  const minAxis = `min${axis.toUpperCase()}`
  const maxValue = max

  squares.forEach(square => {
    square[minAxis] = (maxValue + square[minAxis] + step) % maxValue
  })

  updateRect(squares)
}

function updateRect(squares) {
  squares.forEach(square => {
    ctx.fillRect(square.minX, square.minY, square.width, square.height)
  })
}
